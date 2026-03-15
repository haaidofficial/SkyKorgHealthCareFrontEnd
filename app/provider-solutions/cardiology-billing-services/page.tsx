import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export default function CardiologyBillingPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/cardiology-billing.jpg"
            alt="Cardiology billing services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Cardiology Billing Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg HealthCare provides expert cardiology billing services
            designed to streamline revenue cycle management, ensure accurate
            coding for cardiovascular procedures, and maximize reimbursements
            for cardiology practices.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* MAIN CONTENT */}
          <article className="lg:col-span-2 space-y-12">

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Cardiology Billing Services
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Cardiology billing involves submitting and managing claims for
                cardiovascular procedures such as stress tests, angioplasty,
                echocardiograms, and cardiac catheterizations. Accurate coding,
                proper documentation, and compliance with payer requirements are
                essential for successful reimbursement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Key Components of Cardiology Billing
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Accurate CPT and ICD coding for cardiovascular procedures</li>
                <li>✔ Insurance eligibility verification</li>
                <li>✔ Charge entry and documentation review</li>
                <li>✔ Claim submission and payer follow-ups</li>
                <li>✔ Denial management and AR recovery</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Important Cardiology Procedures
              </h2>

              <div className="grid md:grid-cols-2 gap-4 text-gray-700">

                <ul className="space-y-2">
                  <li>✔ Electrocardiogram (ECG/EKG)</li>
                  <li>✔ Stress testing</li>
                  <li>✔ Echocardiography</li>
                  <li>✔ Cardiac catheterization</li>
                </ul>

                <ul className="space-y-2">
                  <li>✔ Angioplasty procedures</li>
                  <li>✔ Pacemaker implantation</li>
                  <li>✔ Heart rhythm monitoring</li>
                  <li>✔ Cardiac imaging services</li>
                </ul>

              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Common Challenges in Cardiology Billing
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Incorrect procedure coding</li>
                <li>✔ Missing documentation</li>
                <li>✔ Insurance eligibility errors</li>
                <li>✔ Claim denials and payer rejections</li>
                <li>✔ Complex modifier usage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Importance of Proper Modifiers in Cardiology Billing
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Cardiology billing often requires the use of CPT modifiers to
                indicate special circumstances related to procedures or services
                provided. Correct modifier usage ensures compliance with payer
                requirements and reduces claim denials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">
                Our Cardiology Billing Services Include
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
                Our cardiology billing specialists understand the complexities
                of cardiovascular procedures and payer guidelines. We help
                cardiology practices reduce billing errors, improve claim
                accuracy, and increase reimbursements while maintaining full
                compliance with healthcare regulations.
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
                    Why outsource cardiology billing?
                  </h3>
                  <p className="text-gray-600">
                    Outsourcing cardiology billing improves claim accuracy and
                    reduces administrative workload for cardiology practices.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    What are the most common cardiology billing errors?
                  </h3>
                  <p className="text-gray-600">
                    Incorrect CPT coding, missing modifiers, and incomplete
                    documentation are common billing challenges.
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

                <div>
                  <h3 className="font-semibold">
                    Do you support EHR/EMR systems?
                  </h3>
                  <p className="text-gray-600">
                    Our billing specialists work with multiple cardiology EHR
                    and billing platforms used by healthcare providers.
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
                Speak with our cardiology billing experts to improve claim
                accuracy and maximize reimbursements.
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
            Optimize Your Cardiology Billing Workflow
          </h2>

          <p className="mb-6">
            Partner with SkyKorg HealthCare to improve billing accuracy,
            reduce claim denials, and maximize reimbursements.
          </p>

          <Link
            href="/contact"
            className="bg-black px-8 py-3 rounded"
          >
            Get Started
          </Link>

        </div>
      </section>

      {/* CONTACT FORM */}
      <EnquiryForm />

    </main>
  );
}