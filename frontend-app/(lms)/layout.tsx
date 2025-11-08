import React, { ReactNode } from "react";
import LMSLayout from "../../components/layout/LMSLayout";

interface LMSRootLayoutProps {
  children: ReactNode;
}

export default function LMSRootLayout({ children }: LMSRootLayoutProps) {
  return <LMSLayout>{children}</LMSLayout>;
}
