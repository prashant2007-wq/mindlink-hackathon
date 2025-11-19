"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Brain, Calendar, Heart, LineChart, Users } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: Brain,
      title: "Mental Wellness",
      description: "Access confidential counseling and wellness resources tailored for students.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: BookOpen,
      title: "Learning Management",
      description: "Comprehensive LMS with courses, assignments, and interactive learning tools.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: LineChart,
      title: "ERP System",
      description: "Streamlined academic administration, attendance, and performance tracking.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Intelligent calendar management for classes, sessions, and appointments.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Users,
      title: "Community Connect",
      description: "Foster connections with peers, mentors, and support groups.",
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: Heart,
      title: "Holistic Growth",
      description: "Track your academic, personal, and wellness journey in one place.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-20 pb-16">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 font-semibold text-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            🎓 Built for Rishihood Students
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Rishiverse Connect
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-600 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Your all-in-one platform for academic excellence, mental wellness, and personal growth.
            Designed with privacy, simplicity, and student success at its core.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/auth/login">
              <Button size="lg" className="px-8 py-6 text-lg bg-indigo-600 hover:bg-indigo-700">
                Login to Your Account
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2">
                Create New Account
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`p-8 rounded-2xl ${feature.bgColor} border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Student Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of students already using Rishiverse Connect for a better campus life.
          </p>
          <Link href="/wellness">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg bg-white text-indigo-700 hover:bg-gray-100">
              Book a Wellness Session
            </Button>
          </Link>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          {[
            { value: "500+", label: "Active Students" },
            { value: "100+", label: "Courses Available" },
            { value: "24/7", label: "Support Access" },
            { value: "99%", label: "Privacy Protected" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1 }}
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20 py-8 bg-white">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>
            © {new Date().getFullYear()} Rishiverse Connect | Built with ❤️ for Student Success
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <Link href="/terms-of-service" className="hover:text-indigo-600 transition">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-indigo-600 transition">
              Privacy Policy
            </Link>
            <Link href="/support" className="hover:text-indigo-600 transition">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
