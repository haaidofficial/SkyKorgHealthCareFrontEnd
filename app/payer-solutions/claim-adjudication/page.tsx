import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Claims Processing Services for Payers | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides fast and accurate payer-side claims processing services ensuring compliance, efficiency, and improved financial performance."
};

export default function ClaimsProcessingPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Claims Processing Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold max-w-3xl">
            Fast and Accurate Claims Processing Services for Payers
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

        </div>

      </section>

      {/* MAIN CONTENT */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10 text-gray-700">

            <p>
              SkyKorg Healthcare offers a comprehensive approach to
              payer-side claims processing. Our expertise combines
              advanced technology and industry knowledge to improve
              operational efficiency and financial performance for
              healthcare payers.
            </p>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Comprehensive Payer-Side Claims Processing Solutions
              </h2>

              <ul className="list-disc ml-6 space-y-2">

                <li>
                  Claim Form Processing and Re-Pricing for efficient
                  claims entry and verification.
                </li>

                <li>
                  Eligibility and Coverage Verification to ensure
                  accurate claims processing.
                </li>

                <li>
                  Timely claim turnaround with industry-leading
                  processing speed.
                </li>

                <li>
                  Expertise across Medicare, Medicaid, and Commercial
                  payer claims systems.
                </li>

              </ul>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Addressing Common Challenges in Claims Processing
              </h2>

              <ul className="list-disc ml-6 space-y-2">

                <li>
                  Meeting turnaround time requirements through optimized
                  workflow management.
                </li>

                <li>
                  Maintaining processing accuracy with continuous
                  quality audits.
                </li>

                <li>
                  Adapting quickly to evolving healthcare regulations.
                </li>

                <li>
                  Managing high claim volumes efficiently.
                </li>

                <li>
                  Ensuring full compliance with PHI security standards.
                </li>

              </ul>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg for Payer-Side Claims Processing?
              </h2>

              <ul className="list-disc ml-6 space-y-2">

                <li>More than 98% claims processing accuracy.</li>

                <li>
                  Automation and optimized workflows improve operational
                  efficiency.
                </li>

                <li>
                  Infrastructure compatibility with multiple payer
                  systems.
                </li>

                <li>
                  Real-time reporting and analytics for better
                  decision-making.
                </li>

              </ul>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Partner With SkyKorg for Expert Claims Processing
              </h2>

              <p>
                SkyKorg Healthcare provides scalable claims processing
                services that help payers improve efficiency, reduce
                costs, and maintain compliance with healthcare
                regulations.
              </p>

            </div>

          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">

            <div className="bg-orange-500 p-8 text-white">

              <h3 className="text-xl font-semibold mb-4">
                How Can We Help?
              </h3>

              <p className="mb-6">
                Transform your Revenue Cycle with our expert support.
              </p>

              <Link
                href="/contact"
                className="bg-black px-6 py-3 inline-block"
              >
                Schedule a Call
              </Link>

            </div>

            <div className="bg-orange-100 border border-orange-400 p-6">

              <h3 className="font-semibold mb-4">
                The SkyKorg Advantage
              </h3>

              <ul className="space-y-2 text-sm">

                <li>✔ Competitive pricing</li>
                <li>✔ Up to 80% cost reduction</li>
                <li>✔ 99.9% processing accuracy</li>
                <li>✔ Trusted industry references</li>

              </ul>

            </div>

          </aside>

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