"use client";

import { useState, useMemo } from "react";
import type { TermUnit } from "@/lib/loan-utils";
import { calculateLoan } from "@/lib/loan-utils";
import LoanInputForm from "./LoanInputForm";
import LoanSummaryCard from "./LoanSummaryCard";
import AmortizationTable from "./AmortizationTable";

export default function LoanCalculator() {
  // 1. ข้อมูลนำเข้า (เริ่มต้นเป็นค่าว่างเพื่อให้แสดง Placeholder)
  const [loanAmount, setLoanAmount] = useState<number | "">("");
  const [annualInterestRate, setAnnualInterestRate] = useState<number | "">("");
  const [termValue, setTermValue] = useState<number | "">("");
  const [termUnit, setTermUnit] = useState<TermUnit>("years");

  // 2. คำนวณผลลัพธ์ผ่าน Pure Function และ Cache ด้วย useMemo
  const results = useMemo(
    () =>
      calculateLoan({
        loanAmount,
        annualInterestRate,
        termValue,
        termUnit,
      }),
    [loanAmount, annualInterestRate, termValue, termUnit]
  );

  const handleReset = () => {
    setLoanAmount("");
    setAnnualInterestRate("");
    setTermValue("");
    setTermUnit("years");
  };

  return (
    <div className="space-y-8">
      {/* Page Title & Intro */}
      <div className="text-center sm:text-left space-y-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/80 border border-indigo-100 text-xs font-semibold text-indigo-800 mb-1">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          ระบบคำนวณค่างวดสินเชื่อและดอกเบี้ย
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
          คำนวณค่าผ่อนชำระรายเดือน
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
          วางแผนการผ่อนชำระด้วยสูตร Annuity มาตรฐาน พร้อมแสดงตารางแจกแจงเงินต้นและดอกเบี้ยแบบละเอียดทุกงวด
        </p>
      </div>

      {/* Top Section: Form Inputs & Summary Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        <div className="lg:col-span-5">
          <LoanInputForm
            loanAmount={loanAmount}
            annualInterestRate={annualInterestRate}
            termValue={termValue}
            termUnit={termUnit}
            totalMonths={results.totalMonths}
            onLoanAmountChange={setLoanAmount}
            onAnnualInterestRateChange={setAnnualInterestRate}
            onTermValueChange={setTermValue}
            onTermUnitChange={setTermUnit}
            onReset={handleReset}
          />
        </div>

        <div className="lg:col-span-7">
          <LoanSummaryCard
            monthlyPayment={results.monthlyPayment}
            totalInterest={results.totalInterest}
            totalPayment={results.totalPayment}
            totalMonths={results.totalMonths}
            loanAmount={loanAmount}
          />
        </div>
      </div>

      {/* Bottom Section: Amortization Schedule Table */}
      <AmortizationTable schedule={results.schedule} />
    </div>
  );
}
