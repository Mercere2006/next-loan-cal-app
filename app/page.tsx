import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import loanImage from "@/assets/images/loan.png";

export const metadata: Metadata = {
  title: "เว็บคำนวณค่าผ่อนชำระรายเดือน | LoanCal",
  description: "เว็บคำนวณค่าผ่อนชำระรายเดือน ช่วยคำนวณค่างวดสินเชื่อ ดอกเบี้ย และวางแผนการเงินได้อย่างแม่นยำ สะดวก รวดเร็ว รองรับทุกอุปกรณ์",
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#f6f8fe] via-[#edf2ff] to-[#e8fbf4] text-slate-800">
      {/* Decorative ambient background glows (Soft Bluish-Purple & Mint Green) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl" />
        <div className="absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-purple-200/35 blur-3xl" />
        <div className="absolute top-2/3 right-1/4 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035]" />
      </div>

      {/* Header / Top Navigation Bar */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-teal-400 p-0.5 shadow-md shadow-indigo-500/20">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <span className="text-xl">💳</span>
            </div>
          </div>
          <div>
            <div className="font-bold text-lg text-slate-800 tracking-tight leading-none">
              Loan<span className="text-teal-600">Cal</span>
            </div>
            <span className="text-[11px] font-medium text-indigo-700/80">ระบบคำนวณสินเชื่อ</span>
          </div>
        </div>

        {/* Quick link button in header */}
        <Link
          href="/loancal"
          className="group inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-teal-700 px-4 py-2 rounded-xl bg-white/70 hover:bg-white border border-indigo-100/90 shadow-xs hover:shadow-md transition-all duration-200"
        >
          <span>คำนวณทันที</span>
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8 md:py-14 lg:py-16 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Content Column (Text + Button) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/85 border border-indigo-100/90 shadow-xs backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-indigo-950">
                เครื่องมือวางแผนการผ่อนชำระออนไลน์
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
                <span className="block text-slate-800">ยินดีต้อนรับสู่</span>
                <span className="block bg-gradient-to-r from-indigo-700 via-indigo-600 to-teal-600 bg-clip-text text-transparent">
                  เว็บคำนวณค่าผ่อนชำระรายเดือน
                </span>
              </h1>
            </div>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
              ช่วยให้คุณคำนวณค่างวดผ่อนชำระรายเดือน ดอกเบี้ย และยอดรวมได้อย่างแม่นยำ 
              วางแผนการเงินสำหรับบ้าน รถ หรือสินเชื่อส่วนบุคคลได้อย่างมั่นใจ สะดวก รวดเร็ว
            </p>

            {/* Primary Action Button to /loancal */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/loancal"
                className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-teal-600 hover:from-indigo-500 hover:via-indigo-600 hover:to-teal-500 shadow-lg shadow-indigo-600/25 hover:shadow-xl hover:shadow-indigo-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-base sm:text-lg"
              >
                <span>เริ่มคำนวณค่างวดผ่อนชำระ</span>
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <span className="text-teal-600 font-bold">✓</span>
                <span>ใช้งานฟรี ไม่ต้องลงทะเบียน</span>
              </div>
            </div>

            {/* Highlight Metric Badges */}
            <div className="pt-4 grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg">
              <div className="p-3.5 rounded-2xl bg-white/75 backdrop-blur-md border border-indigo-100/70 shadow-xs text-center transition-transform hover:-translate-y-0.5">
                <div className="text-indigo-600 font-bold text-base sm:text-lg">แม่นยำ</div>
                <div className="text-xs text-slate-500 mt-0.5">สูตรคำนวณมาตรฐาน</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/75 backdrop-blur-md border border-teal-100/70 shadow-xs text-center transition-transform hover:-translate-y-0.5">
                <div className="text-teal-600 font-bold text-base sm:text-lg">รวดเร็ว</div>
                <div className="text-xs text-slate-500 mt-0.5">รู้ผลทันทีใน 1 วิ</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/75 backdrop-blur-md border border-purple-100/70 shadow-xs text-center transition-transform hover:-translate-y-0.5">
                <div className="text-indigo-700 font-bold text-base sm:text-lg">ครบถ้วน</div>
                <div className="text-xs text-slate-500 mt-0.5">แจกแจงดอกเบี้ยชัดเจน</div>
              </div>
            </div>

          </div>

          {/* Right Column (Hero Graphic with loan.png) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Soft Gradient Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400/30 via-teal-300/35 to-purple-300/25 rounded-full blur-3xl transform scale-95 pointer-events-none" />

              {/* Glassmorphism Card Wrapper */}
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/90 p-8 sm:p-10 rounded-3xl shadow-[0_20px_50px_rgba(79,70,229,0.08)] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-[0_25px_60px_rgba(79,70,229,0.14)]">
                
                {/* Floating Decorative Badges */}
                <div className="absolute -top-3.5 -right-3.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-semibold shadow-md shadow-teal-500/25 flex items-center gap-1.5">
                  <span className="text-[10px]">✨</span>
                  <span>สมาร์ทคำนวณ</span>
                </div>

                <div className="absolute -bottom-3.5 -left-3.5 px-4 py-2 rounded-2xl bg-white/95 border border-indigo-100 shadow-md text-xs font-semibold text-indigo-950 flex items-center gap-2 backdrop-blur-md">
                  <span className="text-base">📊</span>
                  <span>แยกเงินต้นและดอกเบี้ย</span>
                </div>

                {/* Displaying Image from assets/images/loan.png */}
                <div className="relative w-52 h-52 sm:w-64 sm:h-64 transition-transform duration-300 hover:scale-105">
                  <Image
                    src={loanImage}
                    alt="เว็บคำนวณค่าผ่อนชำระรายเดือน"
                    priority
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                </div>

                <p className="mt-4 text-xs font-medium text-slate-500 text-center">
                  คำนวณสินเชื่อบ้าน สินเชื่อรถยนต์ และสินเชื่อบุคคล
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 border-t border-indigo-100/70 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} LoanCal - เว็บคำนวณค่าผ่อนชำระรายเดือน. สงวนลิขสิทธิ์</p>
        <div className="flex items-center gap-4 text-slate-500 font-medium">
          <Link href="/loancal" className="hover:text-indigo-600 transition-colors">
            หน้าคำนวณ
          </Link>
          <span>•</span>
          <span className="text-slate-400">Next.js & Tailwind CSS</span>
        </div>
      </footer>
    </main>
  );
}