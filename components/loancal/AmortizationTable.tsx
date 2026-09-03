"use client";

import { useState, useMemo } from "react";
import type { AmortizationRow } from "@/lib/loan-utils";
import { downloadScheduleCSV } from "@/lib/loan-utils";

interface AmortizationTableProps {
  schedule: AmortizationRow[];
}

export default function AmortizationTable({ schedule }: AmortizationTableProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(12);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // กรองตารางตามงวดที่ค้นหา
  const filteredSchedule = useMemo(() => {
    if (!searchTerm.trim()) return schedule;
    const searchNum = parseInt(searchTerm.trim(), 10);
    if (isNaN(searchNum)) return schedule;
    return schedule.filter((row) => row.month === searchNum);
  }, [schedule, searchTerm]);

  // คำนวณการแบ่งหน้า (Pagination)
  const effectiveRowsPerPage = rowsPerPage === -1 ? filteredSchedule.length : rowsPerPage;
  const totalPages = Math.ceil(filteredSchedule.length / (effectiveRowsPerPage || 1)) || 1;
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  const displayedSchedule = useMemo(() => {
    if (rowsPerPage === -1) return filteredSchedule;
    const start = (safeCurrentPage - 1) * rowsPerPage;
    return filteredSchedule.slice(start, start + rowsPerPage);
  }, [filteredSchedule, safeCurrentPage, rowsPerPage]);

  return (
    <section className="bg-white/85 backdrop-blur-xl border border-white/90 rounded-3xl p-5 sm:p-8 shadow-[0_20px_50px_rgba(79,70,229,0.06)] space-y-5">
      {/* Header of Amortization Schedule */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-indigo-50">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-xl bg-teal-100 text-teal-800 text-xs font-black">
              2
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              ตารางการผ่อนชำระ (Amortization Schedule)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {schedule.length > 0
              ? `แจกแจงรายละเอียดเงินต้น ดอกเบี้ย และยอดหนี้คงเหลือครบถ้วนทุกงวด (รวม ${schedule.length} งวด)`
              : "แจกแจงรายละเอียดเงินต้น ดอกเบี้ย และยอดหนี้คงเหลือครบถ้วนทุกงวด"}
          </p>
        </div>

        {/* Controls: Search, Rows per page, Export CSV */}
        {schedule.length > 0 && (
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Search installment */}
            <div className="relative">
              <input
                type="number"
                min="1"
                max={schedule.length}
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="ค้นหางวดที่..."
                className="w-32 sm:w-36 pl-8 pr-3 py-2 text-xs rounded-xl border border-indigo-100 bg-white focus:ring-2 focus:ring-indigo-300 focus:outline-hidden"
              />
              <svg
                className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Rows per page selector */}
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="px-3 py-2 text-xs font-semibold rounded-xl border border-indigo-100 bg-white text-slate-700 focus:ring-2 focus:ring-indigo-300 focus:outline-hidden"
            >
              <option value={12}>12 งวด / หน้า (1 ปี)</option>
              <option value={24}>24 งวด / หน้า (2 ปี)</option>
              <option value={60}>60 งวด / หน้า (5 ปี)</option>
              <option value={120}>120 งวด / หน้า (10 ปี)</option>
              <option value={-1}>แสดงทั้งหมด ({schedule.length} งวด)</option>
            </select>

            {/* Download CSV button */}
            <button
              type="button"
              onClick={() => downloadScheduleCSV(schedule)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all duration-200"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>ส่งออก CSV</span>
            </button>
          </div>
        )}
      </div>

      {/* Table Container (Responsive with horizontal scrolling on small screens) */}
      <div className="overflow-x-auto rounded-2xl border border-indigo-50 shadow-inner bg-white">
        <table className="w-full text-left text-sm border-collapse min-w-[620px]">
          <thead>
            <tr className="bg-gradient-to-r from-[#f5f7ff] via-[#edf2ff] to-[#e6fbf4] text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-indigo-100">
              <th className="py-3.5 px-4 text-center w-20">งวดที่</th>
              <th className="py-3.5 px-4 text-right">ค่างวดต่อเดือน (บาท)</th>
              <th className="py-3.5 px-4 text-right text-indigo-700">เงินต้น (บาท)</th>
              <th className="py-3.5 px-4 text-right text-teal-700">ดอกเบี้ย (บาท)</th>
              <th className="py-3.5 px-4 text-right">เงินต้นคงเหลือ (บาท)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
            {displayedSchedule.length > 0 ? (
              displayedSchedule.map((row) => (
                <tr
                  key={row.month}
                  className="hover:bg-indigo-50/40 transition-colors duration-150 odd:bg-white even:bg-slate-50/50"
                >
                  <td className="py-3 px-4 text-center font-bold text-slate-600">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                      {row.month}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right font-extrabold text-slate-900">
                    {row.payment.toLocaleString("th-TH", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="py-3 px-4 text-right font-semibold text-indigo-700">
                    {row.principal.toLocaleString("th-TH", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="py-3 px-4 text-right font-semibold text-teal-700">
                    {row.interest.toLocaleString("th-TH", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="py-3 px-4 text-right font-medium text-slate-600">
                    {row.balance.toLocaleString("th-TH", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-12 text-center text-slate-400">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <span className="text-3xl">📋</span>
                    <span className="font-medium text-slate-500">
                      กรุณากรอกยอดเงินกู้ อัตราดอกเบี้ย และระยะเวลาเพื่อคำนวณตารางการผ่อนชำระ
                    </span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      {rowsPerPage !== -1 && totalPages > 1 && schedule.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-slate-500">
          <div>
            แสดงงวดที่{" "}
            <span className="font-bold text-slate-800">
              {(safeCurrentPage - 1) * rowsPerPage + 1}
            </span>{" "}
            ถึง{" "}
            <span className="font-bold text-slate-800">
              {Math.min(safeCurrentPage * rowsPerPage, filteredSchedule.length)}
            </span>{" "}
            จากทั้งหมด{" "}
            <span className="font-bold text-slate-800">
              {filteredSchedule.length}
            </span>{" "}
            งวด
          </div>

          {/* Navigation page buttons */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              disabled={safeCurrentPage <= 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed font-medium transition-colors"
            >
              ◀ ก่อนหน้า
            </button>

            <div className="px-3 py-1.5 font-semibold text-slate-700">
              หน้า {safeCurrentPage} / {totalPages}
            </div>

            <button
              type="button"
              disabled={safeCurrentPage >= totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed font-medium transition-colors"
            >
              ถัดไป ▶
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
