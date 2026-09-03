export type TermUnit = "years" | "months";

export interface LoanCalculationParams {
  loanAmount: number | "";
  annualInterestRate: number | "";
  termValue: number | "";
  termUnit: TermUnit;
}

export interface AmortizationRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

export interface LoanCalculationResult {
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  totalMonths: number;
  schedule: AmortizationRow[];
}

/**
 * คำนวณค่างวดรายเดือนและตารางแจกแจงการผ่อนชำระ (Annuity Formula & Amortization Schedule)
 */
export function calculateLoan({
  loanAmount,
  annualInterestRate,
  termValue,
  termUnit,
}: LoanCalculationParams): LoanCalculationResult {
  const P = typeof loanAmount === "number" && loanAmount > 0 ? loanAmount : 0;
  const annualRate =
    typeof annualInterestRate === "number" && annualInterestRate >= 0
      ? annualInterestRate
      : 0;
  const term = typeof termValue === "number" && termValue > 0 ? termValue : 0;
  const n = termUnit === "years" ? term * 12 : term; // จำนวนงวดทั้งหมด n = ระยะเวลาผ่อน (เดือน)
  const r = annualRate / 100 / 12; // อัตราดอกเบี้ยต่อเดือน r = (อัตราดอกเบี้ยต่อปี / 100) / 12

  if (P <= 0 || n <= 0) {
    return {
      monthlyPayment: 0,
      totalInterest: 0,
      totalPayment: 0,
      totalMonths: n,
      schedule: [],
    };
  }

  // ค่างวดรายเดือน (Annuity Formula): M = P * [r * (1+r)^n] / [(1+r)^n - 1]
  let monthlyPayment = 0;
  if (r === 0) {
    monthlyPayment = P / n;
  } else {
    const compound = Math.pow(1 + r, n);
    monthlyPayment = (P * (r * compound)) / (compound - 1);
  }

  // สร้างตารางการผ่อนชำระละเอียดทุกงวด (Amortization Schedule)
  const schedule: AmortizationRow[] = [];
  let remainingBalance = P;
  let accumulatedInterest = 0;

  for (let month = 1; month <= n; month++) {
    const interestForMonth = remainingBalance * r;
    let principalForMonth = monthlyPayment - interestForMonth;
    let finalPayment = monthlyPayment;

    // งวดสุดท้าย หรือกรณีที่เงินต้นที่ตัดมากกว่าเงินต้นคงเหลือ
    if (month === n || principalForMonth > remainingBalance) {
      principalForMonth = remainingBalance;
      finalPayment = principalForMonth + interestForMonth;
      remainingBalance = 0;
    } else {
      remainingBalance -= principalForMonth;
    }

    accumulatedInterest += interestForMonth;

    schedule.push({
      month,
      payment: finalPayment,
      principal: principalForMonth,
      interest: interestForMonth,
      balance: Math.max(0, remainingBalance),
    });

    if (remainingBalance <= 0) break;
  }

  const totalInterest = accumulatedInterest;
  const totalPayment = P + totalInterest;

  return {
    monthlyPayment,
    totalInterest,
    totalPayment,
    totalMonths: n,
    schedule,
  };
}

/**
 * ดาวน์โหลดตารางผ่อนชำระเป็นไฟล์ CSV (รองรับภาษาไทยด้วย UTF-8 BOM)
 */
export function downloadScheduleCSV(schedule: AmortizationRow[]): void {
  if (!schedule.length) return;
  const headers = "งวดที่,ค่างวด (บาท),เงินต้น (บาท),ดอกเบี้ย (บาท),เงินต้นคงเหลือ (บาท)\n";
  const rows = schedule
    .map(
      (r) =>
        `${r.month},${r.payment.toFixed(2)},${r.principal.toFixed(2)},${r.interest.toFixed(2)},${r.balance.toFixed(2)}`
    )
    .join("\n");

  const blob = new Blob(["\uFEFF" + headers + rows], {
    type: "text/csv;charset=utf-8;",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `ตารางผ่อนชำระ_LoanCal_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
