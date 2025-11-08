import React, { LabelHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Label: React.FC<LabelProps> = ({ children, size = "md", className, ...props }) => {
  const sizeStyles = clsx({
    "text-sm": size === "sm",
    "text-base": size === "md",
    "text-lg": size === "lg",
  });

  return (
    <label
      className={clsx("font-medium text-gray-700 dark:text-gray-200", sizeStyles, className)}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
