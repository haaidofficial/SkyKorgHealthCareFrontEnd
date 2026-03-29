"use client";

import { API_URL, ApiEndPoint } from "@/services/ApiEndPoint";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function ContactSection() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    howDidYouHearAboutUs: "",
    serviceInterestedIn: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [feedback, setFeedback] = useState({
    open: false,
    type: "",
    message: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const errors: any = {};

    if (!form.name.trim()) {
      errors.name = "Name is required";
    }

    if (!form.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9]{7,15}$/.test(form.phone)) {
      errors.phone = "Enter a valid phone number";
    }

    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      errors.email = "Enter a valid email address";
    }

    if (!form.message.trim()) {
      errors.message = "Message is required";
    }

    // OPTIONAL (but recommended)
    if (!form.howDidYouHearAboutUs) {
      errors.howDidYouHearAboutUs = "Please select an option";
    }

    if (!form.serviceInterestedIn) {
      errors.serviceInterestedIn = "Please select a service";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);

      const res = await axios.post(`${API_URL}/${ApiEndPoint.ContactUsForm}`, form);

      if (res?.data?.message) {
        setFeedback({
          open: true,
          type: "success",
          message: "Our team will contact you shortly.",
        });

        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
          howDidYouHearAboutUs: "",
          serviceInterestedIn: "",
        });
      }
    } catch (err) {
      setFeedback({
        open: true,
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };


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

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >

              {/* Name */}
              <div>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Name*"
                  className="bg-white/90 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                />
                {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
              </div>

              {/* Hear About Us */}
              <div>
                <select
                  value={form.howDidYouHearAboutUs}
                  onChange={(e) => handleChange("howDidYouHearAboutUs", e.target.value)}
                  className="bg-white/90 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                >
                  <option value="">How did you hear about us?</option>
                  <option value="Google">Google</option>
                  <option value="Referral">Referral</option>
                  <option value="LinkedIn">LinkedIn</option>
                </select>
                {errors.howDidYouHearAboutUs && <p className="text-red-400 text-sm">{errors.howDidYouHearAboutUs}</p>}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Email*"
                  className="bg-white/90 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                />
                {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="text"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="Phone Number*"
                  className="bg-white/90 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                />
                {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
              </div>

              {/* Service */}
              <div className="md:col-span-2">
                <select
                  value={form.serviceInterestedIn}
                  onChange={(e) => handleChange("serviceInterestedIn", e.target.value)}
                  className="md:col-span-2 bg-white/90 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                >
                  <option value="">What are you interested in?</option>
                  <option value="Medical Billing">Medical Billing</option>
                  <option value="RCM Services">RCM Services</option>
                  <option value="Prior Authorization">Prior Authorization</option>
                </select>
                {errors.serviceInterestedIn && <p className="text-red-400 text-sm">{errors.serviceInterestedIn}</p>}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Message*"
                  className="md:col-span-2 bg-white/90 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
                ></textarea>
                {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
              </div>

              {/* Captcha placeholder */}
              {/* <div className="md:col-span-2 bg-white/90 p-4 rounded-md text-sm text-gray-600">
                CAPTCHA verification
              </div> */}

              <p className="md:col-span-2 text-xs text-gray-300">
                By submitting this form you consent to be contacted regarding
                your request. Message & data rates may apply.
              </p>

              {/* Feedback */}
              {feedback && (
                <p className="md:col-span-2 text-green-400 text-sm">
                  {feedback.message}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

  );
}