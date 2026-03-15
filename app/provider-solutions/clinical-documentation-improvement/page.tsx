import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Clinical Documentation Improvement Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides clinical documentation improvement services to enhance coding accuracy, ensure compliance, and maximize healthcare reimbursements."
};

export default function ClinicalDocumentationPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Clinical Documentation Improvement Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Clinical Documentation Improvement Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg Healthcare helps healthcare providers improve clinical
            documentation accuracy, enhance coding quality, and maximize
            reimbursements through advanced CDI solutions.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* MAIN CONTENT */}
          <article className="lg:col-span-2 space-y-12">

            {/* INTRO */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                What is Clinical Documentation Improvement?
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Clinical Documentation Improvement (CDI) focuses on ensuring
                that patient medical records accurately reflect diagnoses,
                treatments, and services provided.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                Proper documentation supports accurate coding, improves
                reimbursement rates, and ensures compliance with healthcare
                regulatory standards.
              </p>
            </section>

            {/* CHALLENGES */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Common Documentation Challenges
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Missing or incomplete patient documentation</li>
                <li>✔ Incorrect diagnosis or procedure coding</li>
                <li>✔ Lack of documentation clarity</li>
                <li>✔ Compliance and regulatory risks</li>
                <li>✔ Delays in reimbursement due to documentation errors</li>
              </ul>
            </section>

            {/* SERVICES */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Our Clinical Documentation Services
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Medical record documentation review</li>
                <li>✔ Physician documentation queries</li>
                <li>✔ Coding validation and compliance checks</li>
                <li>✔ Clinical documentation audits</li>
                <li>✔ Documentation improvement training</li>
              </ul>
            </section>

            {/* PROCESS */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Our CDI Process
              </h2>

              <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                <li>Review clinical documentation and patient records</li>
                <li>Identify gaps or incomplete information</li>
                <li>Coordinate with physicians for clarification</li>
                <li>Ensure accurate coding and documentation</li>
                <li>Improve compliance and reimbursement accuracy</li>
              </ol>
            </section>

            {/* BENEFITS */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Benefits of Clinical Documentation Improvement
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Improved coding accuracy</li>
                <li>✔ Higher reimbursement rates</li>
                <li>✔ Reduced claim denials</li>
                <li>✔ Stronger regulatory compliance</li>
                <li>✔ Improved healthcare revenue cycle management</li>
              </ul>
            </section>

            {/* SKYKORG */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Experienced CDI specialists</li>
                <li>✔ 99.9% documentation accuracy</li>
                <li>✔ HIPAA compliant processes</li>
                <li>✔ Advanced clinical documentation tools</li>
                <li>✔ End-to-end revenue cycle support</li>
              </ul>
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
                Improve documentation accuracy and maximize reimbursements
                with SkyKorg Healthcare’s CDI services.
              </p>

              <Link
                href="/contact"
                className="block bg-black text-white text-center py-2 rounded"
              >
                Schedule a Call
              </Link>

            </div>

            {/* ADVANTAGE */}
            <div className="bg-white p-6 rounded-lg shadow">

              <h3 className="font-semibold mb-4">
                SkyKorg Advantage
              </h3>

              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✔ 99.9% Documentation Accuracy</li>
                <li>✔ Reduced Claim Denials</li>
                <li>✔ Certified RCM Specialists</li>
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
            Improve Clinical Documentation Accuracy
          </h2>

          <p className="mb-6">
            Partner with SkyKorg Healthcare to improve documentation quality
            and optimize your healthcare revenue cycle.
          </p>

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