import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export default function RadiologyBillingPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/radiology-billing.jpg"
            alt="Radiology billing services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Radiology Billing Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg HealthCare provides comprehensive radiology billing
            services designed to streamline imaging center operations,
            ensure accurate coding, and maximize reimbursements for
            radiology practices.
          </p>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <article className="lg:col-span-2 space-y-12">

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Radiology Billing Services
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Radiology billing involves processing claims for diagnostic
                imaging services such as X-rays, MRIs, CT scans, ultrasound,
                and interventional radiology procedures. Accurate coding and
                documentation are essential to ensure timely reimbursements
                and avoid claim denials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Why Outsource Radiology Billing
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Outsourcing radiology billing allows imaging centers to focus
                on patient care while experienced billing specialists handle
                complex coding requirements, insurance verification, and
                claim submissions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Our Radiology Billing Services
              </h2>

              <div className="grid md:grid-cols-2 gap-4 text-gray-700">

                <ul className="space-y-2">
                  <li>✔ Patient eligibility verification</li>
                  <li>✔ Prior authorization services</li>
                  <li>✔ Radiology coding services</li>
                  <li>✔ Charge entry</li>
                </ul>

                <ul className="space-y-2">
                  <li>✔ Claim submission</li>
                  <li>✔ Payment posting</li>
                  <li>✔ AR follow-ups</li>
                  <li>✔ Denial management</li>
                </ul>

              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Imaging Modalities We Support
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>✔ MRI (Magnetic Resonance Imaging)</li>
                <li>✔ CT Scan</li>
                <li>✔ Ultrasound</li>
                <li>✔ X-Ray</li>
                <li>✔ Nuclear Medicine</li>
                <li>✔ Interventional Radiology</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Highlights of Our Radiology Billing Services
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Customized reporting dashboards</li>
                <li>✔ HIPAA compliant billing processes</li>
                <li>✔ Reduced operational costs</li>
                <li>✔ Faster reimbursement cycles</li>
                <li>✔ Dedicated account managers</li>
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">
                FAQ's on Radiology Billing
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <h3 className="font-semibold">
                    How do you offer radiology billing services?
                  </h3>
                  <p className="text-gray-600">
                    Our billing specialists handle end-to-end revenue cycle
                    management including coding, claims submission, and AR
                    follow-ups.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    How long does it take to get paid?
                  </h3>
                  <p className="text-gray-600">
                    Payment timelines depend on payer policies, but optimized
                    billing workflows significantly reduce reimbursement time.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    What format do you accept patient data?
                  </h3>
                  <p className="text-gray-600">
                    We support multiple EHR systems, billing software, and
                    secure file transfer methods.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Do you send invoices directly to clients?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we provide flexible billing options depending on the
                    provider’s billing workflow.
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
                Improve radiology billing efficiency and maximize
                reimbursements with SkyKorg HealthCare experts.
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
                <li>✔ Dedicated Billing Specialists</li>
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
            Optimize Your Radiology Billing Workflow
          </h2>

          <p className="mb-6">
            Partner with SkyKorg HealthCare to streamline radiology billing
            operations and improve reimbursement performance.
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