import type { TermUnit } from "@/lib/loan-utils";

interface LoanInputFormProps {
  loanAmount: number | "";
  annualInterestRate: number | "";
  termValue: number | "";
  termUnit: TermUnit;
  totalMonths: number;
  onLoanAmountChange: (val: number | "") => void;
  onAnnualInterestRateChange: (val: number | "") => void;
  onTermValueChange: (val: number | "") => void;
  onTermUnitChange: (unit: TermUnit) => void;
  onReset: () => void;
}

export default function LoanInputForm({
  loanAmount,
  annualInterestRate,
  termValue,
  termUnit,
  totalMonths,
  onLoanAmountChange,
  onAnnualInterestRateChange,
  onTermValueChange,
  onTermUnitChange,
  onReset,
}: LoanInputFormProps) {
  return (
    <section className="bg-white/85 backdrop-blur-xl border border-white/90 rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(16,185,129,0.06)] space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-emerald-100/70">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-black">
            1
          </span>
          ข้อมูลนำเข้า (Input)
        </h2>
        {(loanAmount !== "" || annualInterestRate !== "" || termValue !== "") && (
          <button
            type="button"
            onClick={onReset}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-950 transition-colors"
          >
            ล้างข้อมูล
          </button>
        )}
      </div>

      <div className="space-y-5">
        {/* ยอดเงินกู้ (บาท) */}
        <div>
          <label className="flex items-center justify-between text-sm font-bold text-slate-700 mb-2">
            <span>ยอดเงินกู้ (บาท)</span>
            {typeof loanAmount === "number" && loanAmount > 0 && (
              <span className="text-xs font-semibold text-emerald-700">
                {loanAmount.toLocaleString("th-TH")} บาท
              </span>
            )}
          </label>
          <div className="relative">
            <input
              type="number"
              min="1"
              max="1000000000"
              step="1000"
              value={loanAmount}
              onChange={(e) =>
                onLoanAmountChange(
                  e.target.value === "" ? "" : Math.max(0, Number(e.target.value))
                )
              }
              placeholder="เช่น 1,500,000"
              className="w-full pl-4 pr-14 py-3.5 rounded-2xl border border-emerald-200/80 bg-white/95 text-slate-800 font-bold text-lg focus:ring-3 focus:ring-emerald-400/30 focus:border-emerald-500 focus:outline-hidden transition-all shadow-xs placeholder:text-slate-300 placeholder:font-normal"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400">
              บาท
            </span>
          </div>
        </div>

        {/* อัตราดอกเบี้ยต่อปี (%) */}
        <div>
          <label className="flex items-center justify-between text-sm font-bold text-slate-700 mb-2">
            <span>อัตราดอกเบี้ยต่อปี (%)</span>
            {typeof annualInterestRate === "number" && (
              <span className="text-xs font-semibold text-emerald-700">
                {annualInterestRate}% ต่อปี
              </span>
            )}
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              max="100"
              step="0.05"
              value={annualInterestRate}
              onChange={(e) =>
                onAnnualInterestRateChange(
                  e.target.value === "" ? "" : Math.max(0, Number(e.target.value))
                )
              }
              placeholder="เช่น 4.5"
              className="w-full pl-4 pr-12 py-3.5 rounded-2xl border border-emerald-200/80 bg-white/95 text-slate-800 font-bold text-lg focus:ring-3 focus:ring-emerald-400/30 focus:border-emerald-500 focus:outline-hidden transition-all shadow-xs placeholder:text-slate-300 placeholder:font-normal"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400">
              %
            </span>
          </div>
        </div>

        {/* ระยะเวลาผ่อนชำระ พร้อม toggle เลือกหน่วยเป็นปี/เดือน */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-bold text-slate-700">
              ระยะเวลาผ่อนชำระ
            </label>

            {/* Toggle เลือกหน่วยเป็นปี / เดือน */}
            <div className="inline-flex p-1 rounded-xl bg-emerald-50 border border-emerald-200/80">
              <button
                type="button"
                onClick={() => onTermUnitChange("years")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  termUnit === "years"
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-emerald-700"
                }`}
              >
                ปี
              </button>
              <button
                type="button"
                onClick={() => onTermUnitChange("months")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  termUnit === "months"
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-emerald-700"
                }`}
              >
                เดือน
              </button>
            </div>
          </div>

          <div className="relative">
            <input
              type="number"
              min="1"
              max={termUnit === "years" ? 60 : 720}
              value={termValue}
              onChange={(e) =>
                onTermValueChange(
                  e.target.value === "" ? "" : Math.max(0, Number(e.target.value))
                )
              }
              placeholder={termUnit === "years" ? "เช่น 30" : "เช่น 360"}
              className="w-full pl-4 pr-16 py-3.5 rounded-2xl border border-emerald-200/80 bg-white/95 text-slate-800 font-bold text-lg focus:ring-3 focus:ring-emerald-400/30 focus:border-emerald-500 focus:outline-hidden transition-all shadow-xs placeholder:text-slate-300 placeholder:font-normal"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400">
              {termUnit === "years" ? "ปี" : "เดือน"}
            </span>
          </div>

          {totalMonths > 0 && (
            <div className="text-xs text-slate-500 mt-2 px-1">
              คิดเป็น <span className="font-semibold text-emerald-800">{totalMonths}</span> งวด (เดือน)
            </div>
          )}
        </div>
      </div>

      {/* Info note */}
      <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 text-xs text-emerald-950 flex items-start gap-2.5">
        <span className="text-emerald-600 font-bold text-base leading-none">💡</span>
        <p className="leading-relaxed text-emerald-900">
          สูตร Annuity คำนวณค่างวดแบบคงที่ทุกงวด โดยแต่ละงวดจะทยอยหักดอกเบี้ยและลดเงินต้นลงอย่างต่อเนื่อง
        </p>
      </div>
    </section>
  );
}
