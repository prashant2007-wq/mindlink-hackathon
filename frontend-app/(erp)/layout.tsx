import React, { ReactNode } from "react";
import ERPLayout from "../../components/layout/ERPLayout";

interface ERPLayoutProps {
  children: ReactNode;
}

export default function ERPRootLayout({ children }: ERPLayoutProps) {
  return <ERPLayout>{children}</ERPLayout>;
}
