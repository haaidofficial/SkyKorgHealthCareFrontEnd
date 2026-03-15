import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Prior Authorization Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides professional prior authorization services to reduce delays, improve claim approvals, and streamline healthcare revenue cycle management."
};

export default function PriorAuthorizationPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Prior Authorization Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Complete Healthcare Prior Authorization Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg Healthcare helps providers streamline prior authorization
            processes, reduce administrative workload, and ensure faster
            insurance approvals for treatments and procedures.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* MAIN CONTENT */}
          <article className="lg:col-span-2 space-y-12">

            {/* Intro */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Expert Prior Authorization Solutions
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Prior authorization is a critical step in the healthcare
                revenue cycle. It ensures treatments, medications, and
                procedures are approved by insurance providers before
                services are delivered. However, the process can be complex
                and time-consuming for medical practices.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                SkyKorg Healthcare provides specialized prior authorization
                support that simplifies the entire process. Our experienced
                healthcare billing professionals manage documentation,
                insurance verification, and payer communication to ensure
                faster approvals and fewer treatment delays.
              </p>
            </section>

            {/* Process */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Our Prior Authorization Workflow
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Insurance eligibility verification</li>
                <li>✔ Clinical documentation collection</li>
                <li>✔ Authorization request submission</li>
                <li>✔ Insurance provider follow-ups</li>
                <li>✔ Approval tracking & reporting</li>
                <li>✔ Denial management & resubmission</li>
              </ul>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Benefits of Outsourcing Prior Authorization
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Outsourcing prior authorization services to SkyKorg Healthcare
                allows medical providers to focus more on patient care while
                our specialists handle the complex administrative processes.
              </p>

              <ul className="space-y-3 text-gray-700 mt-4">
                <li>✔ Faster approval turnaround time</li>
                <li>✔ Reduced claim denials</li>
                <li>✔ Improved operational efficiency</li>
                <li>✔ Reduced administrative workload</li>
                <li>✔ Enhanced patient satisfaction</li>
              </ul>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Comprehensive Prior Authorization Services
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Our healthcare specialists manage end-to-end prior authorization
                processes including verification, documentation, communication
                with payers, and authorization approvals across multiple
                medical specialties.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                With SkyKorg Healthcare as your outsourcing partner, you gain
                access to experienced billing professionals who ensure your
                authorizations are processed efficiently and accurately.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    How long does prior authorization take?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Authorization timelines depend on the insurance provider,
                    but our team ensures faster approvals through accurate
                    documentation and proactive follow-ups.
                  </p>
                </details>

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    Do you support all insurance payers?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Yes. We work with Medicare, Medicaid, and major commercial
                    insurance providers across the United States.
                  </p>
                </details>

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    Can you integrate with our EHR system?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Our specialists work with most major EHR and practice
                    management systems to streamline prior authorization
                    workflows.
                  </p>
                </details>

              </div>
            </section>

          </article>

          {/* SIDEBAR */}
          <aside className="space-y-8">

            {/* CTA */}
            <div className="bg-orange-500 text-white p-6 rounded-lg shadow">

              <h3 className="font-semibold text-lg mb-3">
                How Can We Help?
              </h3>

              <p className="text-sm mb-4">
                Transform your revenue cycle with expert prior authorization
                support from SkyKorg Healthcare.
              </p>

              <Link
                href="/contact"
                className="block bg-black text-white text-center py-2 rounded"
              >
                Schedule a Call
              </Link>

            </div>

            {/* Advantage */}
            <div className="bg-white p-6 rounded-lg shadow">

              <h3 className="font-semibold mb-4">
                SkyKorg Advantage
              </h3>

              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✔ 99.9% Billing Accuracy</li>
                <li>✔ 80% Operational Cost Reduction</li>
                <li>✔ Dedicated RCM Specialists</li>
                <li>✔ HIPAA Compliant Processes</li>
              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Streamline Your Prior Authorization Process
          </h2>

          <p className="mb-6">
            Partner with SkyKorg Healthcare to reduce delays, improve approval
            rates, and optimize your healthcare revenue cycle management.
          </p>

          <Link
            href="/contact"
            className="bg-black px-8 py-3 rounded"
          >
            Request Consultation
          </Link>

        </div>

      </section>

      <EnquiryForm />

    </main>
  );
}