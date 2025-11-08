"use client";

import React from "react";

export default function TermsOfServicePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        Terms of Service
      </h1>

      <section className="space-y-4">
        <p>
          Welcome to the Wellness Connect Platform. By using this service, you agree to follow the terms and conditions listed below. 
          Please read them carefully before using our platform.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Purpose</h2>
        <p>
          This platform is designed to help students confidentially book wellness and guidance sessions with university counselors. 
          The goal is to provide a safe and private environment for personal and academic well-being.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. Privacy</h2>
        <p>
          Your data and identity will remain confidential. Booking information is encrypted and visible only to authorized counselors. 
          We never share your personal details with third parties.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. Cancellations</h2>
        <p>
          Students can cancel or reschedule appointments up to 24 hours in advance through the booking dashboard.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Acceptable Use</h2>
        <p>
          Users must respect all faculty and staff members. Misuse of the system or false bookings may lead to disciplinary action.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Updates</h2>
        <p>
          We may modify these terms as necessary. Continued use of the platform means you accept any updated terms.
        </p>

        <p className="mt-8 text-center text-gray-600">
          Last Updated: November 2025
        </p>
      </section>
    </main>
  );
}
