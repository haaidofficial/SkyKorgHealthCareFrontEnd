import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export default function InfusionBillingPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/infusion-billing.jpg"
            alt="Infusion billing services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Infusion Billing Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg HealthCare provides specialized infusion billing services
            designed to simplify complex coding requirements, ensure accurate
            claims submission, and maximize reimbursements for infusion therapy
            providers.
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
                Infusion Billing 101
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Infusion therapy billing involves accurate reporting of
                injections, infusions, hydration therapy, and medication
                administration. Due to the complexity of infusion coding and
                hierarchy rules, providers must ensure proper documentation
                and CPT coding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose Us for Infusion Billing
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Certified infusion billing specialists</li>
                <li>✔ Accurate CPT and HCPCS coding</li>
                <li>✔ Reduced claim denials</li>
                <li>✔ Faster reimbursement cycles</li>
                <li>✔ Full revenue cycle management support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Understanding Infusion Therapy
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Infusion therapy involves delivering medication through
                intravenous methods to treat infections, chronic diseases,
                pain management, and other medical conditions. Proper billing
                requires understanding infusion hierarchy rules.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">
                Where Infusion Therapy is Used
              </h2>

              <div className="grid md:grid-cols-2 gap-4 text-gray-700">

                <ul className="space-y-2">
                  <li>✔ Oncology treatments</li>
                  <li>✔ Pain management</li>
                  <li>✔ Rheumatology therapies</li>
                  <li>✔ Antibiotic infusion</li>
                </ul>

                <ul className="space-y-2">
                  <li>✔ Dehydration treatment</li>
                  <li>✔ Nutritional therapy</li>
                  <li>✔ Immunotherapy</li>
                  <li>✔ Chronic disease management</li>
                </ul>

              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Benefits of Outsourcing Infusion Billing
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Reduced operational costs</li>
                <li>✔ Improved claim accuracy</li>
                <li>✔ Faster claim processing</li>
                <li>✔ Better compliance with payer rules</li>
                <li>✔ Increased revenue collection</li>
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">
                FAQ's on Infusion Billing
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <h3 className="font-semibold">
                    What is infusion therapy billing?
                  </h3>
                  <p className="text-gray-600">
                    Infusion therapy billing involves submitting claims
                    for IV medication administration and related services.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Why outsource infusion billing?
                  </h3>
                  <p className="text-gray-600">
                    Outsourcing improves claim accuracy and reduces
                    administrative workload for healthcare providers.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Do you support multiple insurance payers?
                  </h3>
                  <p className="text-gray-600">
                    Yes. Our billing specialists work with Medicare,
                    Medicaid, and commercial insurance providers.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Do you support EHR integrations?
                  </h3>
                  <p className="text-gray-600">
                    Yes. We support multiple infusion therapy billing
                    platforms and healthcare software systems.
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
                Improve infusion therapy billing accuracy and streamline
                your revenue cycle with SkyKorg HealthCare experts.
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
            Optimize Your Infusion Billing Workflow
          </h2>

          <p className="mb-6">
            Partner with SkyKorg HealthCare to streamline infusion billing
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