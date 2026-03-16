import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Medical Billing Services | Revenue Cycle Management | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides end-to-end medical billing and revenue cycle management services including eligibility verification, coding, claims submission, denial management, and AR follow-up."
};

export default function MedicalBillingPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Medical Billing Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold max-w-3xl">
            Medical Billing Services to Optimize Your Revenue Cycle
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
              SkyKorg Healthcare is a trusted healthcare outsourcing partner
              delivering comprehensive Revenue Cycle Management (RCM) services
              for healthcare providers across the United States. Our medical
              billing services are designed to streamline billing operations,
              reduce administrative burden, and maximize reimbursements for
              healthcare practices.
            </p>

            <p>
              With expertise across pre-billing, mid-cycle, and post-billing
              operations, SkyKorg Healthcare helps providers maintain accurate
              claims processing while improving financial performance and
              operational efficiency.
            </p>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                End-to-End Medical Billing Services
              </h2>

              <ul className="list-disc ml-6 space-y-2">

                <li>
                  Patient Eligibility and Benefits Verification before service delivery.
                </li>

                <li>
                  Accurate Medical Coding using ICD-10, CPT, and HCPCS standards.
                </li>

                <li>
                  Clean Claims Submission to reduce claim rejections and delays.
                </li>

                <li>
                  Payment Posting and reconciliation of insurance and patient payments.
                </li>

                <li>
                  Denial Management to recover lost revenue efficiently.
                </li>

                <li>
                  Accounts Receivable Follow-Up for faster reimbursements.
                </li>

              </ul>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Why Medical Billing Is Critical for Healthcare Providers
              </h2>

              <p>
                Medical billing is a crucial component of the healthcare
                revenue cycle. Accurate billing ensures providers are paid
                correctly and promptly for the services they deliver. However,
                managing billing in-house can be challenging due to evolving
                healthcare regulations, payer requirements, and high claim
                volumes.
              </p>

              <p className="mt-4">
                By outsourcing medical billing to SkyKorg Healthcare,
                providers gain access to experienced billing specialists,
                advanced technology, and optimized workflows that improve
                reimbursement speed and reduce claim denials.
              </p>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Benefits of Outsourcing Medical Billing
              </h2>

              <ul className="list-disc ml-6 space-y-2">

                <li>Increase revenue through accurate billing and coding.</li>

                <li>Reduce administrative workload for healthcare staff.</li>

                <li>Improve claim acceptance and reduce denials.</li>

                <li>Faster reimbursement cycles and improved cash flow.</li>

                <li>Full HIPAA compliant processes and data security.</li>

              </ul>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Partner with SkyKorg Healthcare
              </h2>

              <p>
                SkyKorg Healthcare combines experienced RCM professionals,
                certified medical coders, and technology-driven workflows to
                deliver accurate and efficient medical billing services.
                Our scalable solutions support healthcare practices of all
                sizes, helping them improve operational efficiency and
                financial outcomes.
              </p>

            </div>

          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">

            <div className="bg-orange-500 p-8 text-white">

              <h3 className="text-xl font-semibold mb-4">
                Need Help with Medical Billing?
              </h3>

              <p className="mb-6">
                Let SkyKorg Healthcare streamline your revenue cycle and
                improve reimbursements.
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

                <li>✔ Up to 30% operational cost reduction</li>
                <li>✔ 99%+ clean claim rate</li>
                <li>✔ Certified billing and coding experts</li>
                <li>✔ Faster reimbursements</li>
                <li>✔ HIPAA compliant processes</li>

              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Looking for Reliable Medical Billing Services?
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