import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export default function GastroBillingPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO (Reusable Landing Hero) */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/gastroenterology-billing.jpg"
            alt="Gastroenterology billing services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Gastroenterology Billing Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg HealthCare provides specialized gastroenterology billing
            services designed to improve coding accuracy, reduce claim denials,
            and maximize reimbursements for gastroenterology practices.
          </p>

        </div>

      </section>

      {/* MAIN CONTENT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* CONTENT */}
          <article className="lg:col-span-2 space-y-12">

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Gastroenterology Billing Services
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Gastroenterology billing requires specialized knowledge of
                digestive system procedures, endoscopic services, and
                diagnostic treatments. Accurate coding, documentation, and
                compliance with payer requirements are essential to ensure
                proper reimbursement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Key Components of Gastroenterology Billing
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Accurate CPT and ICD coding</li>
                <li>✔ Proper documentation and clinical records</li>
                <li>✔ Insurance eligibility verification</li>
                <li>✔ Claims submission and payer follow-ups</li>
                <li>✔ Denial management and AR recovery</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Accurate Coding in Gastroenterology
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Gastroenterology procedures such as colonoscopies, endoscopies,
                and diagnostic imaging require precise CPT coding and correct
                modifiers. Accurate coding ensures that claims are processed
                quickly and reimbursements are received without delays.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Common Challenges in Gastroenterology Billing
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Incorrect procedure coding</li>
                <li>✔ Missing or incomplete documentation</li>
                <li>✔ Insurance eligibility errors</li>
                <li>✔ Delayed claim submissions</li>
                <li>✔ Claim denials and payer rejections</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Outsource Gastroenterology Billing Services
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Outsourcing gastroenterology billing allows practices to focus
                on patient care while experienced revenue cycle management
                specialists handle claims processing, coding compliance, and
                reimbursement optimization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">
                Our Gastroenterology Billing Services Include
              </h2>

              <div className="grid md:grid-cols-2 gap-4 text-gray-700">

                <ul className="space-y-2">
                  <li>✔ Patient eligibility verification</li>
                  <li>✔ Medical coding and documentation</li>
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
                Our gastroenterology billing specialists understand the
                complexities of digestive system procedures and payer
                guidelines. We help healthcare providers reduce billing
                errors, improve reimbursements, and maintain compliance
                with healthcare regulations.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">
                FAQ's on Gastroenterology Billing
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <h3 className="font-semibold">
                    What does a gastroenterologist do?
                  </h3>
                  <p className="text-gray-600">
                    Gastroenterologists diagnose and treat conditions related
                    to the digestive system including stomach, liver, and
                    intestinal disorders.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Why outsource gastroenterology billing?
                  </h3>
                  <p className="text-gray-600">
                    Outsourcing improves billing accuracy, reduces claim
                    denials, and increases revenue cycle efficiency.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    What are the common billing errors?
                  </h3>
                  <p className="text-gray-600">
                    Incorrect coding, missing documentation, and eligibility
                    verification errors are the most common issues.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Do you support multiple insurance payers?
                  </h3>
                  <p className="text-gray-600">
                    Yes. We work with Medicare, Medicaid, and commercial
                    insurance providers across the United States.
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
                Speak with our gastroenterology billing experts to improve
                claim accuracy and increase reimbursements.
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
                <li>✔ Faster Claim Processing</li>
                <li>✔ Dedicated Billing Experts</li>
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
            Improve Your Gastroenterology Billing Performance
          </h2>

          <p className="mb-6">
            Partner with SkyKorg HealthCare to streamline billing operations
            and maximize reimbursements.
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