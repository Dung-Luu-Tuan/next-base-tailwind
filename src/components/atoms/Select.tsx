// components/atoms/Select.tsx

"use client";

import React from "react";
import SelectOption from "./SelectOption";
import ChevronsDown from "@/public/icons/interface/outline/chevron-down.svg";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  side?: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  side = "right",
}) => {
  return (
    <div className="relative">
      <select
        className="w-full flex justify-center items-center pl-sm pr-l py-xs text-sm font-medium text-base-black bg-base-white border border-neutrals-200 rounded-m appearance-none focus:outline-none focus:border-neutrals-200"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <SelectOption
            key={option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </select>
      <div className="absolute inset-y-0 right-3 flex items-center justify-center pointer-events-none">
        <ChevronsDown
          className="w-base h-base stroke-neutrals-700"
          strokeWidth="0.5"
        />
      </div>
    </div>
  );
};

export default Select;
