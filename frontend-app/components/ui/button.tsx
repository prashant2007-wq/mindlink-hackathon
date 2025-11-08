import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  const baseStyles =
    "rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";

  const variantStyles = clsx({
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500": variant === "primary",
    "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400": variant === "secondary",
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500": variant === "danger",
  });

  const sizeStyles = clsx({
    "px-3 py-1 text-sm": size === "sm",
    "px-4 py-2 text-base": size === "md",
    "px-6 py-3 text-lg": size === "lg",
  });

  return (
    <button className={clsx(baseStyles, variantStyles, sizeStyles, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
