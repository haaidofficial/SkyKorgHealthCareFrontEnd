"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/contact-bg.jpg"
          alt="Healthcare background"
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div className="text-white">

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get in <span className="text-orange-500">Touch</span>
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Let us know about your needs and discover how SkyKorg HealthCare
              can streamline your revenue cycle management operations with
              reliable outsourcing solutions.
            </p>

            <ul className="space-y-3 text-gray-300">
              <li>✔ Medical Billing & Coding</li>
              <li>✔ Prior Authorization Services</li>
              <li>✔ Accounts Receivable Management</li>
              <li>✔ Virtual Medical Assistance</li>
            </ul>

          </div>

          {/* Form */}
          <div className="bg-white/10 backdrop-blur-lg p-10 rounded-xl border border-white/20">

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Name*"
                className="bg-white/90 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <select className="bg-white/90 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>How did you hear about us?</option>
                <option>Google</option>
                <option>Referral</option>
                <option>LinkedIn</option>
              </select>

              <input
                type="email"
                placeholder="Email*"
                className="bg-white/90 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="text"
                placeholder="Phone Number*"
                className="bg-white/90 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <select className="md:col-span-2 bg-white/90 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>What are you interested in?</option>
                <option>Medical Billing</option>
                <option>RCM Services</option>
                <option>Prior Authorization</option>
              </select>

              <textarea
                rows={4}
                placeholder="Message*"
                className="md:col-span-2 bg-white/90 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>

              {/* Captcha placeholder */}
              <div className="md:col-span-2 bg-white/90 p-4 rounded-md text-sm text-gray-600">
                CAPTCHA verification
              </div>

              <p className="md:col-span-2 text-xs text-gray-300">
                By submitting this form you consent to be contacted regarding
                your request. Message & data rates may apply.
              </p>

              <button
                type="submit"
                className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition"
              >
                Submit
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}