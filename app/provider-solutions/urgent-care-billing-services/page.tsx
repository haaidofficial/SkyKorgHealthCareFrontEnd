import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export default function UrgentCareBillingPage() {
  return (
    <main className="bg-gray-50">
      {/* HERO (Your Standard Hero Layout) */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/urgent-care-billing.jpg"
            alt="Urgent care billing services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Urgent Care Billing Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg HealthCare provides specialized urgent care billing
            solutions designed to streamline claim submission, reduce
            administrative workload, and maximize reimbursements for urgent
            care centers across the United States.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* MAIN ARTICLE */}
          <article className="lg:col-span-2 space-y-12">

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                What is Urgent Care Billing?
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Urgent care billing involves processing insurance claims for
                immediate medical services provided at urgent care centers.
                Because these facilities handle high patient volumes and
                time-sensitive treatments, efficient billing systems are
                essential to maintain revenue flow and operational efficiency.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Urgent Care Billing Overview
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Billing for urgent care requires accurate coding, proper
                documentation, and insurance verification. Providers must
                comply with payer requirements and ensure claims are submitted
                promptly to prevent reimbursement delays.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Common Challenges in Urgent Care Billing
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Incorrect CPT or ICD coding</li>
                <li>✔ Insurance eligibility errors</li>
                <li>✔ Delayed claim submissions</li>
                <li>✔ Denied or rejected claims</li>
                <li>✔ Compliance issues with payer rules</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                How SkyKorg HealthCare Helps Urgent Care Centers
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Our urgent care billing specialists ensure accurate coding,
                efficient claim submission, and faster reimbursement cycles.
                We help urgent care centers reduce claim denials and improve
                financial performance while allowing providers to focus on
                patient care.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">
                Our Urgent Care Billing Services
              </h2>

              <div className="grid md:grid-cols-2 gap-4 text-gray-700">

                <ul className="space-y-2">
                  <li>✔ Patient registration & verification</li>
                  <li>✔ Medical coding services</li>
                  <li>✔ Charge entry</li>
                  <li>✔ Claim submission</li>
                </ul>

                <ul className="space-y-2">
                  <li>✔ Payment posting</li>
                  <li>✔ AR follow-ups</li>
                  <li>✔ Denial management</li>
                  <li>✔ Compliance monitoring</li>
                </ul>

              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg HealthCare
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Our revenue cycle management experts work with urgent care
                centers to streamline billing operations and improve claim
                accuracy. With extensive experience in urgent care billing, we
                help providers reduce costs, increase reimbursements, and
                maintain compliance with healthcare regulations.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">
                Frequently Asked Questions
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <h3 className="font-semibold">
                    Why outsource urgent care billing?
                  </h3>
                  <p className="text-gray-600">
                    Outsourcing reduces administrative workload and improves
                    claim accuracy, allowing providers to focus on patient
                    care.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Do you support multiple insurance payers?
                  </h3>
                  <p className="text-gray-600">
                    Yes. Our team works with Medicare, Medicaid, and commercial
                    insurance payers across the United States.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Can you reduce claim denials?
                  </h3>
                  <p className="text-gray-600">
                    Our denial management specialists identify root causes and
                    recover lost revenue efficiently.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Do you support EHR/EMR integrations?
                  </h3>
                  <p className="text-gray-600">
                    Yes. We support multiple healthcare software platforms
                    used by urgent care providers.
                  </p>
                </div>

              </div>
            </section>

          </article>

          {/* SIDEBAR */}
          <aside className="space-y-8">

            <div className="bg-orange-500 text-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-3">
                How Can We Help?
              </h3>

              <p className="text-sm mb-4">
                Speak with our urgent care billing specialists to improve
                claim accuracy and accelerate reimbursements.
              </p>

              <Link
                href="/contact"
                className="block bg-black text-white text-center py-2 rounded"
              >
                Schedule Consultation
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">
                SkyKorg Advantage
              </h3>

              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✔ 99.9% Billing Accuracy</li>
                <li>✔ Faster Reimbursements</li>
                <li>✔ Dedicated RCM Specialists</li>
                <li>✔ Nationwide Healthcare Support</li>
              </ul>
            </div>

          </aside>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Transform Your Urgent Care Billing Process
          </h2>

          <p className="mb-6">
            Partner with SkyKorg HealthCare to streamline billing operations
            and improve reimbursement accuracy.
          </p>

          <Link
            href="/contact"
            className="bg-black px-8 py-3 rounded"
          >
            Get Started
          </Link>

        </div>
      </section>

      {/* CONTACT COMPONENT */}
      <EnquiryForm />

    </main>
  );
}