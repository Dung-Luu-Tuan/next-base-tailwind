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

  const general = "text-sm font-medium"

  const typeStyles = {
    default:
      "bg-primary-main hover:bg-primary-600 text-base-white rounded-m",
    destructive:
      "bg-error-100 hover:bg-error-200 text-base-white rounded-m",
    outline:
      "bg-base-white hover:bg-neutrals-100 border border-neutrals-200 text-base-black hover:text-neutrals-900 rounded-m",
    secondary:
      "bg-secondary-main hover:bg-secondary-600 text-base-black rounded-m",
    ghost:
      "hover:bg-neutrals-100 text-base-black hover:text-neutrals-900 rounded-m",
    link: "text-base-black hover:text-primary-main hover:underline hover:underline-offset-4 hover:decoration-primary-main rounded-m",
    "primary with icon":
      "bg-primary-main hover:bg-primary-600 text-base-white rounded-m px-base py-xs",
    "outline with icon":
      "bg-base-white hover:bg-neutrals-100 border border-neutrals-200 text-base-black hover:text-neutrals-900 rounded-m px-base py-xs",
    icon: "px-sm py-sm border border-neutrals-200 text-base-black hover:bg-neutrals-100 rounded-m",
    "icon round":
      "px-sm py-sm border border-neutrals-200 text-base-black hover:bg-neutrals-100 rounded-round",
    loading:
      "text-base-white bg-primary-main opacity-50 rounded-m px-sm py-sm",
  };

  return (
    <button
      type="button"
      className={`${general} ${typeStyles[type]} ${
        sizeStyles[size || "default"]
      } ${className} flex items-center gap-xs`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
