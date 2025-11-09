import React from "react";
import { PricingTable } from "@clerk/clerk-react";

const Plan = () => {
  return (
    <div className="max-w-2xl mx-auto z-20 my-30">
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold">
          灵活的创作方案，为你的内容增长量身打造。
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          从免费使用到高阶进阶，满足不同阶段的创作需求。
        </p>
      </div>
      <div className="mt-14 max-sm:mx-8">
        <PricingTable />
      </div>
    </div>
  );
};

export default Plan;
