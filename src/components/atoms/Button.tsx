import React, { ReactNode } from "react";

interface ButtonProps {
  type?:
    | "default"
    | "destructive"
    | "ghost"
    | "icon"
    | "icon round"
    | "link"
    | "loading"
    | "outline"
    | "outline with icon"
    | "primary with icon"
    | "secondary";
  size?: "sm" | "default" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "default",
  size,
  className = "",
  onClick,
  disabled = false,
  children,
}) => {
  const sizeStyles = {
    sm: "px-sm py-xs",
    default: size ? "px-m py-xxs" : "",
    lg: "px-l py-sm",
  };

  const typeStyles = {
    default:
      "bg-primary-main hover:bg-primary-600 text-base-white rounded-m text-sm",
    destructive:
      "bg-error-100 hover:bg-error-200 text-base-white rounded-m text-sm",
    outline:
      "bg-base-white hover:bg-neutrals-100 border border-neutrals-200 text-base-black hover:text-neutrals-900 rounded-m text-sm",
    secondary:
      "bg-secondary-main hover:bg-secondary-600 text-base-black rounded-m text-sm",
    ghost:
      "hover:bg-neutrals-100 text-base-black hover:text-neutrals-900 rounded-m text-sm",
    link: "text-base-black hover:text-primary-main hover:underline hover:underline-offset-4 hover:decoration-primary-main rounded-m text-sm",
    "primary with icon":
      "bg-primary-main hover:bg-primary-600 text-base-white rounded-m text-sm px-base py-xs",
    "outline with icon":
      "bg-base-white hover:bg-neutrals-100 border border-neutrals-200 text-base-black hover:text-neutrals-900 rounded-m text-sm px-base py-xs",
    icon: "flex items-center justify-center w-[16px] h-[16px] px-sm py-sm border border-neutrals-200 text-base-black hover:bg-neutrals-100 rounded-m text-sm",
    "icon round":
      "flex items-center justify-center w-[16px] h-[16px] px-sm py-sm border border-neutrals-200 text-base-black hover:bg-neutrals-100 rounded-round text-sm",
    loading:
      "text-base-white bg-primary-main opacity-50 rounded-m text-sm px-sm py-sm",
  };

  return (
    <button
      type="button"
      className={`${typeStyles[type]} ${
        sizeStyles[size || "default"]
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
