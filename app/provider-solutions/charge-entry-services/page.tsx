import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Charge Entry Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides accurate medical charge entry services to improve billing accuracy, reduce claim denials, and optimize healthcare revenue cycle management."
};

export default function ChargeEntryPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Charge Entry Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            State-of-the-Art Charge Entry Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg Healthcare offers professional charge entry services
            that ensure accurate medical billing, minimize claim denials,
            and accelerate reimbursements.
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
                What is Medical Charge Entry?
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Charge entry is one of the most important steps in the
                medical billing process. It involves entering detailed
                information about services provided to patients, including
                procedures, diagnosis codes, modifiers, and provider data.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                Accurate charge entry ensures that medical claims are
                submitted correctly, reducing the chances of claim rejections
                and improving reimbursement timelines.
              </p>
            </section>

            {/* IMPORTANCE */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Why Accurate Charge Entry Matters
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Prevent billing errors and claim denials</li>
                <li>✔ Improve claim acceptance rates</li>
                <li>✔ Ensure accurate coding and documentation</li>
                <li>✔ Accelerate insurance reimbursements</li>
                <li>✔ Improve revenue cycle efficiency</li>
              </ul>
            </section>

            {/* PROCESS */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Our Charge Entry Workflow
              </h2>

              <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                <li>Receive encounter or charge sheet documentation</li>
                <li>Verify patient demographics and provider details</li>
                <li>Enter CPT, ICD-10, and HCPCS codes accurately</li>
                <li>Validate modifiers and billing rules</li>
                <li>Perform internal quality checks</li>
                <li>Submit finalized claims for billing</li>
              </ol>
            </section>

            {/* BENEFITS */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Benefits of Outsourcing Charge Entry
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Reduce operational costs</li>
                <li>✔ Improve billing accuracy</li>
                <li>✔ Faster claim processing</li>
                <li>✔ Reduced administrative workload</li>
                <li>✔ Improved revenue cycle management</li>
              </ul>
            </section>

            {/* SKYKORG ADVANTAGE */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Certified billing and coding specialists</li>
                <li>✔ 99.9% data accuracy</li>
                <li>✔ HIPAA compliant workflow</li>
                <li>✔ Dedicated account managers</li>
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
                Improve billing accuracy and accelerate reimbursements
                with SkyKorg Healthcare’s professional charge entry services.
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
                <li>✔ 99.9% Billing Accuracy</li>
                <li>✔ Reduced Claim Denials</li>
                <li>✔ Faster Claim Processing</li>
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
            Improve Billing Accuracy with Expert Charge Entry
          </h2>

          <p className="mb-6">
            Partner with SkyKorg Healthcare to streamline your medical
            billing process and optimize revenue cycle management.
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