"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-primary mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to Rishiverse Connect
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 mb-8 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Your all-in-one student wellness, LMS, and ERP platform — designed to
        make learning, growth, and wellbeing simpler and more private.
      </motion.p>

      <motion.div
        className="flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link href="/auth/login">
          <Button className="px-6 py-2 text-white bg-primary hover:bg-primary/90">
            Login
          </Button>
        </Link>

        <Link href="/auth/register">
          <Button variant="outline" className="px-6 py-2">
            Register
          </Button>
        </Link>

        <Link href="/wellness">
          <Button variant="secondary" className="px-6 py-2">
            Book Wellness Session
          </Button>
        </Link>
      </motion.div>

      <motion.div
        className="mt-12 text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        © {new Date().getFullYear()} Rishiverse | Built for Student Success
      </motion.div>
    </main>
  );
}
