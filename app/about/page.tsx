import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

import {
  EyeIcon,
  RocketLaunchIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "About SkyKorg Healthcare",
  description:
    "Learn about SkyKorg Healthcare, a global healthcare outsourcing and revenue cycle management partner delivering high-quality healthcare solutions."
};

export default function AboutPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/about-hero.jpg"
            alt="About SkyKorg Healthcare"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            About SkyKorg Healthcare
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

        </div>

      </section>

      {/* ABOUT CONTENT */}
      <section className="py-16">

        <div className="max-w-5xl mx-auto px-6 space-y-10 text-gray-700">

          <p>
            SkyKorg Healthcare is a leading provider of healthcare
            outsourcing and revenue cycle management services designed
            to support healthcare providers, payors, and healthcare
            organizations globally.
          </p>

          <p>
            Our team brings years of experience in medical billing,
            coding, claims adjudication, data analytics, and virtual
            healthcare assistance. We help healthcare organizations
            improve operational efficiency while reducing costs and
            enhancing patient care delivery.
          </p>

        </div>

      </section>

      {/* HOW WE OPERATE */}
      <section className="py-12">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            How We Operate
          </h2>

          <p className="text-gray-700 leading-relaxed">
            We function as a seamless extension of our clients’
            operations, helping healthcare organizations optimize
            workflows, streamline processes, and improve financial
            performance.
          </p>

        </div>

      </section>

      {/* WHO WE ARE */}
      <section className="py-12">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Who We Are
          </h2>

          <p className="text-gray-700 leading-relaxed">
            SkyKorg Healthcare delivers innovative solutions tailored to
            the healthcare industry's evolving needs. Our experts combine
            industry knowledge with advanced technology to deliver
            efficient and scalable healthcare solutions.
          </p>

        </div>

      </section>

      {/* ACCOMPLISHMENTS */}
      <section className="py-16 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-10">
            Our Proud Accomplishments
          </h2>

          <ul className="space-y-4 text-gray-700 list-disc ml-6">

            <li>Up to 80% revenue improvement for healthcare providers</li>
            <li>Reduced operational costs through outsourcing</li>
            <li>Improved claim accuracy and reimbursement rates</li>

          </ul>

        </div>

      </section>

      {/* VISION MISSION VALUE */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl font-semibold text-center mb-14">
            Our Value Proposition
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div>

              <EyeIcon className="w-12 h-12 mx-auto text-orange-500 mb-4" />

              <h3 className="font-semibold text-lg mb-2">
                Vision
              </h3>

              <p className="text-gray-600">
                To become a global leader in healthcare outsourcing
                services.
              </p>

            </div>

            <div>

              <RocketLaunchIcon className="w-12 h-12 mx-auto text-orange-500 mb-4" />

              <h3 className="font-semibold text-lg mb-2">
                Mission
              </h3>

              <p className="text-gray-600">
                Deliver high-quality healthcare business solutions with
                transparency and efficiency.
              </p>

            </div>

            <div>

              <ShieldCheckIcon className="w-12 h-12 mx-auto text-orange-500 mb-4" />

              <h3 className="font-semibold text-lg mb-2">
                Value
              </h3>

              <p className="text-gray-600">
                Provide trusted services that help clients maximize ROI
                and operational success.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* MANAGEMENT */}
      <section className="py-12">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Meet Our Management Team
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Our leadership team brings extensive expertise in healthcare
            revenue cycle management, virtual assistance, and healthcare
            operational solutions designed to improve healthcare
            organizations’ performance.
          </p>

        </div>

      </section>

      {/* DELIVERY */}
      <section className="py-12">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Delivery Methodology
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Our delivery model combines industry best practices,
            technology-driven workflows, and quality assurance to ensure
            optimal performance for healthcare providers and payors.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded"
          >
            Learn More
          </Link>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Are You Looking for Streamlined Medical Billing Assistance?
          </h2>

          <Link
            href="/contact"
            className="bg-black px-8 py-3 rounded"
          >
            Request a Demo
          </Link>

        </div>

      </section>

      <EnquiryForm />

    </main>
  );
}