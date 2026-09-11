import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import loan2Image from "@/assets/images/loan2.png";

export const metadata: Metadata = {
  title: "เว็บคำนวณค่าผ่อนชำระรายเดือน | LoanCal",
  description:
    "เว็บคำนวณค่าผ่อนชำระรายเดือน ช่วยคำนวณค่างวดสินเชื่อ ดอกเบี้ย และวางแผนการเงินได้อย่างแม่นยำ สะดวก รวดเร็ว รองรับทุกอุปกรณ์",
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#f8fdfb] via-[#f0fbf5] to-[#e4f8ed] text-slate-800">
      {/* ======================================================== */}
      {/* 🌟 พื้นหลังทางด้านซ้ายเป็นรูปทรงครึ่งวงกลมยื่นออกมา 🌟 */}
      {/* ======================================================== */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden z-0"
        aria-hidden="true"
      >
        {/* ครึ่งวงกลมสีเขียวมิ้นทางซ้าย ยื่นออกมาอย่างพอดี ไร้เส้นขอบสีขาว */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[180px] sm:w-[250px] md:w-[320px] lg:w-[370px] xl:w-[430px] h-[62vh] sm:h-[70vh] min-h-[400px] max-h-[620px] rounded-r-full bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-200 shadow-[20px_0_50px_rgba(20,184,166,0.18)]">
          {/* เงาแสงสะท้อนและมิติความลึกภายในครึ่งวงกลม */}
          <div className="absolute inset-0 rounded-r-full bg-gradient-to-tr from-white/20 via-transparent to-teal-500/10" />
          <div className="absolute top-1/4 right-8 w-36 h-36 rounded-full bg-white/25 blur-2xl" />
        </div>

        {/* แสงเรืองละมุนประดับทางฝั่งขวา */}
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-teal-200/35 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035]" />
      </div>

      {/* Header / Top Navigation Bar (กระชับระยะ ไม่ดันหน้าจอ) */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 py-2.5 sm:py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-emerald-400 p-0.5 shadow-md shadow-emerald-600/20">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <span className="text-lg sm:text-xl">🪙</span>
            </div>
          </div>
          <div>
            <div className="font-bold text-base sm:text-lg text-slate-800 tracking-tight leading-none">
              Loan<span className="text-emerald-600">Cal</span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-800">
              ระบบคำนวณสินเชื่อ
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section (ลดระยะห่างให้พอดี 1 หน้าจอ ไม่ต้อง Scroll) */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-1 sm:py-2 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-5 xl:gap-8 items-center">
          {/* คอลัมน์ซ้าย: รูปภาพ loan2.png ขนาดใหญ่คมชัด พอดีความสูงจอ */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-start min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] xl:min-h-[480px]">
            <div className="relative z-10 -ml-4 sm:-ml-8 md:-ml-12 lg:-ml-16 xl:-ml-28 2xl:-ml-36 w-64 h-[320px] sm:w-[320px] sm:h-[400px] md:w-[360px] md:h-[440px] lg:w-[410px] lg:h-[480px] xl:w-[460px] xl:h-[530px] transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 flex items-center justify-center cursor-pointer">
              <Image
                src={loan2Image}
                alt="เว็บคำนวณค่าผ่อนชำระรายเดือน"
                priority
                className="w-full h-full object-contain drop-shadow-[0_24px_35px_rgba(0,0,0,0.22)]"
              />
            </div>
          </div>

          {/* คอลัมน์ขวา: ลดระยะห่างจาก heading ลงมา (กระชับและไม่ดันให้ต้อง scroll) */}
          <div className="lg:col-span-7 flex flex-col items-center text-center space-y-2.5 sm:space-y-3 lg:space-y-3.5 lg:-ml-4 xl:-ml-8">
            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.35rem] xl:text-[3rem] font-extrabold tracking-tight text-slate-900 leading-[1.18]">
                <span className="block text-slate-800">ยินดีต้อนรับสู่</span>
                <span className="block sm:whitespace-nowrap bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
                  เว็บคำนวณค่าผ่อนชำระรายเดือน
                </span>
              </h1>
            </div>

            {/* Subtitle / Description */}
            <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed font-normal">
              ช่วยให้คุณคำนวณค่างวดผ่อนชำระรายเดือน ดอกเบี้ย
              และยอดรวมได้อย่างแม่นยำ วางแผนการเงินสำหรับบ้าน รถ
              หรือสินเชื่อส่วนบุคคลได้อย่างมั่นใจ
            </p>

            {/* Primary Action Button to /loancal */}
            <div className="pt-0.5 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
              <Link
                href="/loancal"
                className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto px-7 py-3 sm:px-8 sm:py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-400 shadow-md shadow-emerald-600/25 hover:shadow-lg hover:shadow-emerald-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm sm:text-base"
              >
                <span>เริ่มคำนวณค่างวดผ่อนชำระ</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (กระชับ ไม่ดันหน้าจอ) */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-2 sm:py-2.5 border-t border-emerald-200/70 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>
          © {new Date().getFullYear()} LoanCal - เว็บคำนวณค่าผ่อนชำระรายเดือน.
          สงวนลิขสิทธิ์
        </p>
      </footer>
    </main>
  );
}
