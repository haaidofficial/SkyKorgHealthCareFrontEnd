import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Insurance Eligibility Verification Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides accurate insurance eligibility verification services to reduce claim denials, improve billing accuracy, and optimize healthcare revenue cycle management."
};

export default function EligibilityVerificationPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Eligibility Verification Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Insurance Eligibility Verification Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg Healthcare helps healthcare providers verify insurance
            coverage accurately to reduce claim denials and improve
            reimbursement efficiency.
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
                What is Eligibility Verification?
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Insurance eligibility verification is the process of
                confirming a patient's active insurance coverage, benefits,
                and financial responsibilities before medical services are
                provided.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                Proper verification helps healthcare providers avoid claim
                denials, prevent billing errors, and ensure accurate patient
                billing information.
              </p>
            </section>

            {/* IMPORTANCE */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Why Eligibility Verification is Important
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Reduce claim denials and rework</li>
                <li>✔ Verify insurance coverage before treatment</li>
                <li>✔ Improve billing accuracy</li>
                <li>✔ Minimize administrative workload</li>
                <li>✔ Ensure smooth revenue cycle management</li>
              </ul>
            </section>

            {/* COMMON ISSUES */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Challenges Without Proper Eligibility Verification
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Increased claim denials</li>
                <li>✔ Delays in reimbursement</li>
                <li>✔ Billing errors and corrections</li>
                <li>✔ Patient dissatisfaction</li>
                <li>✔ Increased administrative workload</li>
              </ul>
            </section>

            {/* PROCESS */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Our Eligibility Verification Process
              </h2>

              <ol className="space-y-3 text-gray-700 list-decimal pl-5">
                <li>Collect patient demographic information</li>
                <li>Verify insurance coverage and benefits</li>
                <li>Confirm co-payments, deductibles, and coinsurance</li>
                <li>Check prior authorization requirements</li>
                <li>Document eligibility details in the system</li>
                <li>Communicate verified details to providers</li>
              </ol>
            </section>

            {/* BEST PRACTICES */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Best Practices for Accurate Eligibility Verification
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Verify insurance coverage before appointments</li>
                <li>✔ Maintain accurate patient demographic data</li>
                <li>✔ Use automated verification tools</li>
                <li>✔ Communicate coverage details to patients</li>
                <li>✔ Document verification results properly</li>
              </ul>
            </section>

            {/* CONCLUSION */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Simplify Insurance Verification with SkyKorg Healthcare
              </h2>

              <p className="text-gray-700 leading-relaxed">
                SkyKorg Healthcare provides reliable eligibility verification
                services that help healthcare providers reduce billing errors,
                improve claim acceptance rates, and maintain a healthy revenue
                cycle.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                Our specialists ensure every patient's insurance coverage is
                verified accurately so healthcare practices can focus on
                delivering quality patient care.
              </p>
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
                Improve your billing accuracy with our professional insurance
                eligibility verification services.
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
                <li>✔ 99.9% Data Accuracy</li>
                <li>✔ Reduced Claim Denials</li>
                <li>✔ Faster Insurance Verification</li>
                <li>✔ HIPAA Compliant Workflow</li>
              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Improve Your Revenue Cycle with Accurate Eligibility Verification
          </h2>

          <p className="mb-6">
            Partner with SkyKorg Healthcare to ensure accurate insurance
            verification and reduce claim denials.
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