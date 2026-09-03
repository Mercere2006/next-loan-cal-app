interface LoanSummaryCardProps {
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  totalMonths: number;
  loanAmount: number | "";
}

export default function LoanSummaryCard({
  monthlyPayment,
  totalInterest,
  totalPayment,
  totalMonths,
  loanAmount,
}: LoanSummaryCardProps) {
  const numericPrincipal = typeof loanAmount === "number" && loanAmount > 0 ? loanAmount : 0;
  const principalRatio = totalPayment > 0 ? (numericPrincipal / totalPayment) * 100 : 0;
  const interestRatio = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 0;

  return (
    <section className="space-y-5">
      {/* ค่างวดรายเดือน (M) - แสดงเด่นชัดที่สุดในหน้า */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-teal-600 text-white p-7 sm:p-9 shadow-[0_25px_60px_rgba(79,70,229,0.25)]">
        {/* Subtle decorative glowing background orbs */}
        <div className="pointer-events-none absolute -right-8 -bottom-8 w-48 h-48 rounded-full bg-white/10 blur-xl" />
        <div className="pointer-events-none absolute -left-8 -top-8 w-40 h-40 rounded-full bg-teal-400/20 blur-xl" />

        <div className="relative z-10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold backdrop-blur-md border border-white/20">
              <span className="w-2 h-2 rounded-full bg-teal-300 animate-ping" />
              ค่างวดรายเดือน (M)
            </span>
            {totalMonths > 0 && (
              <span className="text-xs text-indigo-100 font-medium">
                รวมทั้งสิ้น {totalMonths} งวด
              </span>
            )}
          </div>

          {/* Hero Number Display */}
          <div className="pt-2">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-sm flex flex-wrap items-baseline gap-2">
              <span>
                {monthlyPayment > 0
                  ? monthlyPayment.toLocaleString("th-TH", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  : "0.00"}
              </span>
              <span className="text-lg sm:text-2xl font-bold text-teal-200">
                บาท / เดือน
              </span>
            </div>
            <p className="text-xs sm:text-sm text-indigo-100 mt-2 font-normal">
              ยอดผ่อนชำระคงที่ต่อเดือนโดยประมาณ (คำนวณจากสูตร Annuity)
            </p>
          </div>
        </div>
      </div>

      {/* Sub-Outputs: ดอกเบี้ยรวม และ ยอดชำระรวมทั้งหมด */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* ยอดดอกเบี้ยรวมตลอดสัญญา */}
        <div className="p-6 rounded-3xl bg-white/85 backdrop-blur-xl border border-teal-100/90 shadow-[0_15px_35px_rgba(20,184,166,0.06)] flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              ยอดดอกเบี้ยรวมตลอดสัญญา
            </span>
            <span className="text-lg">📈</span>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-700 tracking-tight">
              {Math.max(0, totalInterest).toLocaleString("th-TH", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              <span className="text-sm font-semibold ml-1 text-slate-500">บาท</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              คิดเป็น{" "}
              <span className="font-bold text-teal-700">
                {numericPrincipal > 0
                  ? ((totalInterest / numericPrincipal) * 100).toFixed(1)
                  : "0.0"}
                %
              </span>{" "}
              ของเงินต้น
            </p>
          </div>
        </div>

        {/* ยอดชำระรวมทั้งหมด (เงินต้น + ดอกเบี้ย) */}
        <div className="p-6 rounded-3xl bg-white/85 backdrop-blur-xl border border-indigo-100/90 shadow-[0_15px_35px_rgba(79,70,229,0.06)] flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-800">
              ยอดชำระรวมทั้งหมด
            </span>
            <span className="text-lg">🏷️</span>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-950 tracking-tight">
              {Math.max(0, totalPayment).toLocaleString("th-TH", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              <span className="text-sm font-semibold ml-1 text-slate-500">บาท</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {numericPrincipal > 0
                ? `(เงินต้น ${numericPrincipal.toLocaleString("th-TH")} + ดอกเบี้ย)`
                : "(เงินต้น + ดอกเบี้ย)"}
            </p>
          </div>
        </div>
      </div>

      {/* Visual Ratio Bar: สัดส่วนเงินต้น vs ดอกเบี้ย */}
      <div className="p-5 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/80 shadow-xs space-y-2.5">
        <div className="flex justify-between items-center text-xs font-bold text-slate-700">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-indigo-600 inline-block" />
            เงินต้น: {principalRatio.toFixed(1)}%
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-teal-500 inline-block" />
            ดอกเบี้ยรวม: {interestRatio.toFixed(1)}%
          </span>
        </div>
        <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden flex p-0.5 gap-0.5 border border-slate-200/60">
          <div
            className="h-full bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-full transition-all duration-500"
            style={{ width: `${principalRatio}%` }}
          />
          <div
            className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full transition-all duration-500"
            style={{ width: `${interestRatio}%` }}
          />
        </div>
      </div>
    </section>
  );
}
