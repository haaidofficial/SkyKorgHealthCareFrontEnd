import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Medical Coding Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides professional medical coding services ensuring accurate ICD-10, CPT, and HCPCS coding to reduce claim denials and optimize healthcare revenue cycle management."
};

export default function MedicalCodingPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Medical Coding Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Professional Medical Coding Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg Healthcare provides accurate medical coding services to
            ensure compliance with ICD-10, CPT, and HCPCS standards while
            maximizing reimbursement and minimizing claim denials.
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
                Medical Coding Services for Healthcare Providers
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Medical coding converts healthcare diagnoses, treatments,
                and procedures into standardized codes used for billing
                and insurance reimbursement.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                Accurate coding ensures healthcare providers receive proper
                reimbursement while maintaining compliance with healthcare
                regulations and payer requirements.
              </p>
            </section>

            {/* CODING IMPORTANCE */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Why Accurate Medical Coding is Important
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Ensure accurate claim submission</li>
                <li>✔ Reduce claim denials and rejections</li>
                <li>✔ Maintain regulatory compliance</li>
                <li>✔ Improve reimbursement rates</li>
                <li>✔ Optimize healthcare revenue cycle</li>
              </ul>
            </section>

            {/* SERVICES */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Our Medical Coding Services
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ ICD-10 diagnosis coding</li>
                <li>✔ CPT procedure coding</li>
                <li>✔ HCPCS coding</li>
                <li>✔ Risk adjustment coding</li>
                <li>✔ Coding audits and compliance reviews</li>
                <li>✔ Specialty medical coding services</li>
              </ul>
            </section>

            {/* SPECIALTIES */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Specialty Medical Coding Expertise
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Our certified coding professionals support multiple
                healthcare specialties including cardiology, orthopedics,
                radiology, gastroenterology, and more.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                We ensure every coding assignment follows industry
                guidelines and payer rules to ensure maximum reimbursement
                accuracy.
              </p>
            </section>

            {/* ADVANTAGES */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Advantages of Outsourcing Medical Coding
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Reduce operational costs</li>
                <li>✔ Access certified coding professionals</li>
                <li>✔ Improve billing accuracy</li>
                <li>✔ Reduce administrative workload</li>
                <li>✔ Maintain compliance with healthcare regulations</li>
              </ul>
            </section>

            {/* PROCESS */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Our Medical Coding Workflow
              </h2>

              <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                <li>Receive patient medical documentation</li>
                <li>Review clinical records and physician notes</li>
                <li>Assign accurate ICD-10, CPT, and HCPCS codes</li>
                <li>Perform coding quality checks</li>
                <li>Submit coded data for billing and claims processing</li>
              </ol>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">
                Medical Coding FAQs
              </h2>

              <div className="space-y-4">

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    What coding systems do you support?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Our coding specialists work with ICD-10, CPT, and HCPCS
                    coding systems to ensure accurate claim submission.
                  </p>
                </details>

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    Do you provide coding audits?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Yes. We provide medical coding audits and compliance
                    reviews to identify errors and improve coding accuracy.
                  </p>
                </details>

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    Are your coders certified?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Our team includes certified professional coders with
                    extensive experience across multiple healthcare
                    specialties.
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
                Improve coding accuracy and streamline billing operations
                with SkyKorg Healthcare’s professional coding services.
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
                <li>✔ Certified coding specialists</li>
                <li>✔ 99.9% coding accuracy</li>
                <li>✔ Reduced claim denials</li>
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
            Improve Billing Accuracy with Professional Medical Coding
          </h2>

          <p className="mb-6">
            Partner with SkyKorg Healthcare to ensure accurate coding,
            faster claims processing, and optimized revenue cycle
            management.
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