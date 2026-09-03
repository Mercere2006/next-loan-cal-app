import type { Metadata } from "next";
import Link from "next/link";
import LoanCalculator from "@/components/loancal/LoanCalculator";

export const metadata: Metadata = {
  title: "คำนวณค่างวดผ่อนชำระและตารางผ่อนชำระ (Amortization) | LoanCal",
  description:
    "โปรแกรมคำนวณค่างวดผ่อนชำระรายเดือน คำนวณดอกเบี้ย พร้อมตารางการผ่อนชำระ (Amortization Schedule) ละเอียดทุกงวด วางแผนการเงินได้อย่างแม่นยำและรวดเร็ว",
  keywords: [
    "คำนวณค่างวด",
    "ตารางผ่อนชำระ",
    "Amortization Schedule",
    "สูตร Annuity",
    "คำนวณสินเชื่อบ้าน",
    "LoanCal",
  ],
};

export default function LoanCalPage() {
  return (
    <main className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-gradient-to-br from-[#f6f8fe] via-[#edf2ff] to-[#e8fbf4] text-slate-800 antialiased">
      {/* Decorative Ambient Background Glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-indigo-300/25 blur-3xl" />
        <div className="absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />
        <div className="absolute top-2/3 right-1/4 h-72 w-72 rounded-full bg-teal-200/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
      </div>

      {/* Header Bar */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 text-sm font-semibold text-indigo-900 hover:text-teal-700 px-4 py-2.5 rounded-2xl bg-white/80 hover:bg-white border border-indigo-100/80 shadow-xs hover:shadow-md transition-all duration-200"
        >
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span>กลับหน้าหลัก</span>
        </Link>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-teal-400 p-0.5 shadow-xs">
            <div className="w-full h-full bg-white rounded-[6px] flex items-center justify-center text-sm">
              💰
            </div>
          </div>
          <span className="font-extrabold text-base text-slate-800 tracking-tight">
            Loan<span className="text-teal-600">Cal</span>
          </span>
        </div>
      </header>

      {/* Loan Calculator Client Component */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex-1">
        <LoanCalculator />
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-indigo-100/70 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} LoanCal - เว็บคำนวณค่าผ่อนชำระรายเดือน</p>
        <div className="flex items-center gap-4 text-slate-500">
          <Link href="/" className="hover:text-indigo-600 transition-colors font-medium">
            หน้าแรก
          </Link>
          <span>•</span>
          <span className="text-slate-400">สูตรคำนวณมาตรฐาน Annuity</span>
        </div>
      </footer>
    </main>
  );
}
