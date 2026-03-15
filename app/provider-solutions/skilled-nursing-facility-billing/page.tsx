import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export default function SNFBillingPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/snf-billing.jpg"
            alt="Skilled nursing facility billing services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Skilled Nursing Facility Billing Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg HealthCare provides specialized billing services for
            Skilled Nursing Facilities (SNF), helping providers manage
            complex Medicare and insurance billing requirements while
            improving revenue cycle efficiency.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <article className="lg:col-span-2 space-y-12">

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                What is Skilled Nursing Facility Billing?
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Skilled Nursing Facility billing involves processing claims
                for post-acute care services provided to patients recovering
                from illness, surgery, or injury. These services include
                rehabilitation therapy, nursing care, and long-term medical
                treatment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Challenges in Skilled Nursing Facility Billing
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Complex Medicare billing regulations</li>
                <li>✔ Detailed documentation requirements</li>
                <li>✔ Frequent policy updates</li>
                <li>✔ Coding errors and claim denials</li>
                <li>✔ Insurance verification challenges</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Our Skilled Nursing Billing Services
              </h2>

              <div className="grid md:grid-cols-2 gap-4 text-gray-700">

                <ul className="space-y-2">
                  <li>✔ Patient eligibility verification</li>
                  <li>✔ Medicare billing support</li>
                  <li>✔ Charge entry</li>
                  <li>✔ Claims submission</li>
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
                Our Approach to SNF Billing
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Our billing specialists implement efficient revenue cycle
                management strategies to ensure accurate claims processing
                and faster reimbursements. We work closely with skilled
                nursing facilities to optimize billing workflows and reduce
                claim denials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Benefits of Outsourcing SNF Billing
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Reduced operational costs</li>
                <li>✔ Improved claim approval rates</li>
                <li>✔ Faster reimbursements</li>
                <li>✔ Dedicated billing specialists</li>
                <li>✔ Full compliance with healthcare regulations</li>
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">
                FAQ's on Skilled Nursing Billing
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <h3 className="font-semibold">
                    Why outsource skilled nursing facility billing?
                  </h3>
                  <p className="text-gray-600">
                    Outsourcing improves claim accuracy and allows SNF
                    providers to focus on delivering patient care.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Do you support Medicare billing?
                  </h3>
                  <p className="text-gray-600">
                    Yes, our billing specialists manage Medicare, Medicaid,
                    and commercial insurance billing processes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    How secure is patient data?
                  </h3>
                  <p className="text-gray-600">
                    Our billing processes follow HIPAA compliant standards
                    to ensure complete patient data security.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Do you provide reporting and analytics?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we provide detailed financial reports and billing
                    performance analytics.
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
                Improve skilled nursing facility billing efficiency
                and maximize reimbursements with our RCM experts.
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
                <li>✔ Reduced Claim Denials</li>
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
            Optimize Your Skilled Nursing Billing Workflow
          </h2>

          <p className="mb-6">
            Partner with SkyKorg HealthCare to streamline SNF billing
            operations and maximize reimbursements.
          </p>

          <Link
            href="/contact"
            className="bg-black px-8 py-3 rounded"
          >
            Get Started
          </Link>

        </div>
      </section>

      <EnquiryForm />

    </main>
  );
}