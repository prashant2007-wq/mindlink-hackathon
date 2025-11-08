import React, { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outlined";
}

const Input: React.FC<InputProps> = ({
  size = "md",
  variant = "default",
  className,
  ...props
}) => {
  const baseStyles =
    "rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors";

  const variantStyles = clsx({
    "border-gray-300 bg-white text-gray-900": variant === "default",
    "border-gray-500 bg-gray-50 text-gray-900": variant === "outlined",
  });

  const sizeStyles = clsx({
    "px-2 py-1 text-sm": size === "sm",
    "px-3 py-2 text-base": size === "md",
    "px-4 py-3 text-lg": size === "lg",
  });

  return <input className={clsx(baseStyles, variantStyles, sizeStyles, className)} {...props} />;
};

export default Input;
