import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export default function FertilityBillingPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/fertility-billing.jpg"
            alt="Fertility clinic billing services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Fertility Clinic Billing Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg HealthCare provides specialized fertility clinic billing
            services designed to simplify complex reproductive healthcare
            billing processes while improving reimbursements and operational
            efficiency.
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
                Fertility Clinic Billing Services
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Fertility clinic billing involves managing claims for complex
                reproductive treatments such as IVF, embryo transfer, genetic
                testing, fertility preservation, and hormonal therapy.
                Accurate coding and documentation are essential to ensure
                successful reimbursements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Challenges in Fertility Clinic Billing
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Multiple treatment cycles and procedures</li>
                <li>✔ Insurance policy limitations</li>
                <li>✔ Complex coding requirements</li>
                <li>✔ Coverage variations among payers</li>
                <li>✔ Extensive documentation requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Supporting Fertility Experts
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Fertility specialists face increasing administrative and billing
                challenges. Our revenue cycle management team supports fertility
                clinics by streamlining billing processes and improving claim
                accuracy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">
                Our Fertility Billing Services Include
              </h2>

              <div className="grid md:grid-cols-2 gap-4 text-gray-700">

                <ul className="space-y-2">
                  <li>✔ Patient eligibility verification</li>
                  <li>✔ IVF and fertility treatment billing</li>
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
                Why Choose SkyKorg HealthCare
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Up to 80% reduction in operational costs</li>
                <li>✔ Dedicated billing specialists</li>
                <li>✔ Advanced RCM technology support</li>
                <li>✔ Transparent reporting</li>
                <li>✔ HIPAA compliant billing processes</li>
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">
                Frequently Asked Questions
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <h3 className="font-semibold">
                    What is fertility clinic billing?
                  </h3>
                  <p className="text-gray-600">
                    Fertility billing includes processing claims for IVF,
                    fertility treatments, reproductive medicine procedures,
                    and related services.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Why outsource fertility billing?
                  </h3>
                  <p className="text-gray-600">
                    Outsourcing helps fertility clinics reduce administrative
                    costs and improve claim approval rates.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Do you support fertility software platforms?
                  </h3>
                  <p className="text-gray-600">
                    Yes. Our team works with multiple EHR and billing
                    platforms used by fertility clinics.
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
                Streamline fertility clinic billing and maximize
                reimbursements with SkyKorg HealthCare.
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
                <li>✔ Dedicated RCM Experts</li>
                <li>✔ Nationwide Provider Support</li>
              </ul>
            </div>

          </aside>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Improve Your Fertility Clinic Revenue Cycle
          </h2>

          <p className="mb-6">
            Partner with SkyKorg HealthCare to streamline fertility clinic
            billing and maximize reimbursements.
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