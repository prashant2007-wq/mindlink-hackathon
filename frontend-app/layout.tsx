import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wellness Connect | Rishiverse",
  description:
    "A confidential wellness and counseling booking system for students and faculty at Rishihood University.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "bg-background text-foreground")}>
        <ReduxProvider>
          <div className="min-h-screen flex flex-col">
            <header className="bg-primary text-white py-4 text-center font-semibold text-lg shadow-md">
              Wellness Connect
            </header>

            <main className="flex-1 container mx-auto px-6 py-8">{children}</main>

            <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600 border-t">
              © {new Date().getFullYear()} Rishihood University · Wellness Connect
            </footer>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
