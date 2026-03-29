"use client";

import Image from "next/image";
import {
  BriefcaseIcon,
  LinkIcon,
  DocumentCheckIcon,
  UsersIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { API_URL, ApiEndPoint } from "@/services/ApiEndPoint";

type ContactFormType = {
  name: string;
  phone: string;
  email: string;
  message: string;
  serviceInterestedIn: string;
};

type ErrorsType = Partial<Record<keyof ContactFormType, string>>;

export default function ContactPage() {

  const [form, setForm] = useState<ContactFormType>({
    name: "",
    phone: "",
    email: "",
    message: "",
    serviceInterestedIn: "",
  });

  const [errors, setErrors] = useState<ErrorsType>({});
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });

  const handleChange = (key: keyof ContactFormType, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" })); // clear error on typing
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = (): ErrorsType => {
    const newErrors: ErrorsType = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{7,15}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!form.serviceInterestedIn) {
      newErrors.serviceInterestedIn = "Please select a service";
    }

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);
      setFeedback({ type: "", message: "" });

      const res = await axios.post(
        `${API_URL}/${ApiEndPoint.ContactUsForm}`,
        form
      );

      if (res?.data?.message) {
        setFeedback({
          type: "success",
          message: "Your enquiry has been submitted successfully.",
        });

        setTimeout(() => {
          setFeedback({ type: "", message: "" });
        }, 5000);

        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
          serviceInterestedIn: "",
        });
      }
    } catch (err) {
      setFeedback({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-gray-50">
      {/* --- unchanged sections above --- */}

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* LEFT CONTENT */}
          <div> <h2 className="text-2xl font-semibold mb-4">
            We Are Glad To See You Here!
          </h2>

            <p className="text-gray-600 mb-6">
              A comprehensive range of solutions in practice management
              awaits you at SkyKorg Healthcare. Let us help you reduce
              denials, increase collections, and streamline your
              healthcare operations.
            </p>

            {/* TESTIMONIAL */}
            <div className="bg-gray-100 p-8 border-l-4 border-orange-500">

              <div className="flex items-center gap-4 mb-4">

                <Image
                  src="/assets/images/testimonial/kevin.jpg"
                  width={60}
                  height={60}
                  alt="David Collins"
                  className="rounded-full"
                />

                <div>
                  <p className="font-semibold">
                    David Collins
                  </p>

                  <p className="text-sm text-gray-500">
                    Director of Revenue Cycle Management
                  </p>
                </div>

              </div>

              <p className="text-gray-600 italic">
                "SkyKorg Healthcare combines advanced healthcare
                technology with powerful revenue cycle management
                services."
              </p>

            </div>

            {/* CONTACT INFO */}
            <div className="mt-12">

              <h3 className="text-xl font-semibold mb-4">
                Reach Out To Us
              </h3>

              <div className="space-y-4 text-gray-600">

                <div className="flex gap-3">
                  <MapPinIcon className="w-5 text-orange-500" />
                  <p>
                    42 Thatcher drive, Postal code - R3T2L3
                  </p>
                </div>

                <div className="flex gap-3">
                  <PhoneIcon className="w-5 text-orange-500" />
                  <p>+1 (888) 370 5125</p>
                </div>

                <div className="flex gap-3">
                  <EnvelopeIcon className="w-5 text-orange-500" />
                  <p><Link href="mailto: info@skykorghealthcare.com">info@skykorghealthcare.com</Link></p>
                </div>

              </div>

            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-gray-100 p-8">

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Name"
                  className="w-full border p-3"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Email"
                  className="w-full border p-3"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="Phone Number"
                  className="w-full border p-3"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <select
                  value={form.serviceInterestedIn}
                  onChange={(e) =>
                    handleChange("serviceInterestedIn", e.target.value)
                  }
                  className="w-full border p-3"
                >
                  <option value="">What are you interested in?</option>
                  <option value="Medical Billing">Medical Billing</option>
                  <option value="RCM Services">RCM Services</option>
                  <option value="Virtual Medical Assistant">
                    Virtual Medical Assistant
                  </option>
                </select>
                {errors.serviceInterestedIn && (
                  <p className="text-red-500 text-sm">
                    {errors.serviceInterestedIn}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Message"
                  rows={5}
                  className="w-full border p-3"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              {/* Feedback */}
              {feedback.message && (
                <p
                  className={`text-sm ${feedback.type === "success"
                    ? "text-green-600"
                    : "text-red-500"
                    }`}
                >
                  {feedback.message}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white px-6 py-3"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

            </form>

          </div>

        </div>
      </section>
    </main>
  );
}