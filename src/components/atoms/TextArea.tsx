"use client";

import React from "react";
import Button from "./Button";

interface TextAreaProps {
  title: string;
  placeholder: string;
  message?: string;
  rows?: number;
  value?: string;
  disabled?: boolean;
  buttonText?: string;
  type?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  title,
  placeholder,
  message = "Your message will be copied to the support team.",
  rows = 4,
  value,
  disabled = false,
  buttonText = "Send message",
  type = "message",
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-xs">
      <label className="text-sm font-medium text-base-black">{title}</label>
      <textarea
        className="w-[530px] h-20 rounded-m border border-neutral-200 text-neutral-700 px-sm py-xs focus:outline-none focus:ring-0 focus:border-primary-main"
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {type === "message" ? (
        <p className="text-sm font-medium text-neutral-700">{message}</p>
      ) : (
        <Button type="default" size="default">
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default TextArea;
