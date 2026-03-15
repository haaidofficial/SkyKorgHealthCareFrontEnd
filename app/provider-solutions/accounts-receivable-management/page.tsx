import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Accounts Receivable Management Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides healthcare accounts receivable management services to reduce outstanding balances, improve cash flow, and optimize revenue cycle performance."
};

export default function AccountsReceivablePage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Accounts Receivable Management"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Healthcare Accounts Receivable Management
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg Healthcare helps healthcare providers optimize their
            accounts receivable processes, reduce outstanding balances,
            and improve cash flow through expert AR management solutions.
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
                What is Accounts Receivable Management?
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Accounts receivable management focuses on tracking and
                collecting outstanding payments owed to healthcare
                providers by insurance companies and patients.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                Efficient AR management improves financial stability by
                reducing aging receivables and accelerating reimbursements.
              </p>
            </section>

            {/* BENCHMARKS */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Healthcare AR Benchmarks
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Average AR days</li>
                <li>✔ Percentage of claims denied at first submission</li>
                <li>✔ Aging accounts receivable ratios</li>
                <li>✔ Insurance and patient collection rates</li>
              </ul>
            </section>

            {/* TERMS */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Key Accounts Receivable Management Terms
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li><strong>AR Days:</strong> Average time required to collect payments.</li>
                <li><strong>AR Follow-Up:</strong> Tracking unpaid claims with payers.</li>
                <li><strong>Denial Management:</strong> Resolving denied claims.</li>
                <li><strong>Aging Report:</strong> Categorizing outstanding balances.</li>
              </ul>
            </section>

            {/* CAUSES */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Reasons for Delayed Payments
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Insurance eligibility verification errors</li>
                <li>✔ Incorrect coding or documentation</li>
                <li>✔ Delayed claim submissions</li>
                <li>✔ Claim denials or rejections</li>
                <li>✔ Inefficient billing workflows</li>
              </ul>
            </section>

            {/* STRATEGIES */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Strategies to Improve Accounts Receivable
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Accurate claim submission</li>
                <li>✔ Regular AR follow-up</li>
                <li>✔ Insurance verification before service</li>
                <li>✔ Automated billing workflows</li>
                <li>✔ Effective denial management</li>
              </ul>
            </section>

            {/* SKYKORG */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare for AR Management
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Experienced AR specialists</li>
                <li>✔ Advanced revenue cycle analytics</li>
                <li>✔ Faster payment recovery</li>
                <li>✔ Reduced AR aging</li>
                <li>✔ HIPAA compliant processes</li>
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">
                Accounts Receivable FAQs
              </h2>

              <div className="space-y-4">

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    What is the ideal AR days benchmark?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Most healthcare organizations aim to keep AR days below
                    40–45 days to maintain healthy cash flow.
                  </p>
                </details>

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    How does AR follow-up improve revenue?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    AR follow-up helps track unpaid claims, resolve payer
                    issues, and recover outstanding reimbursements.
                  </p>
                </details>

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    Can AR management reduce claim denials?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Yes. Proper AR management identifies billing errors,
                    corrects claims, and prevents repeated denials.
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
                Improve cash flow and reduce outstanding balances with
                SkyKorg Healthcare’s AR management solutions.
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
                <li>✔ Reduced AR aging</li>
                <li>✔ Faster reimbursements</li>
                <li>✔ Dedicated RCM specialists</li>
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
            Improve Healthcare Cash Flow with AR Management
          </h2>

          <p className="mb-6">
            Partner with SkyKorg Healthcare to streamline your accounts
            receivable processes and accelerate reimbursements.
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