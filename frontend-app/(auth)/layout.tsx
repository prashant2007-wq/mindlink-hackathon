import "./globals.css";
import { ReactNode } from "react";
import AppShell from "../components/layout/AppShell";

export const metadata = {
  title: "MindLink",
  description: "MindLink Hackathon Project",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {/* Wrap all pages in AppShell */}
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
