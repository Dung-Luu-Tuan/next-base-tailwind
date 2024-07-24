"use client";

import React, { useState } from "react";
import Select from "@/components/atoms/Select";

const SelectPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };

  const options = [
    { value: "", label: "Select an option" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="p-4">
      <Select
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
        side="Right"
      />
    </div>
  );
};

export default SelectPage;
