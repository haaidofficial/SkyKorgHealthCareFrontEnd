import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Patient Collection Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides patient collection services that help healthcare providers recover outstanding balances while maintaining positive patient relationships and compliance with regulations."
};

export default function PatientCollectionPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Patient Collection Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Patient Collection Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg Healthcare offers patient collection services that
            help healthcare organizations recover outstanding balances
            while maintaining professional and respectful patient
            communication.
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
                Ethical and Compliant Patient Collections
              </h2>

              <p className="text-gray-700 leading-relaxed">
                SkyKorg Healthcare follows strict adherence to the Fair
                Debt Collection Practices Act (FDCPA) while handling
                patient collection services. Our approach focuses on
                respectful communication and transparent processes to
                maintain positive patient relationships.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                Our experienced collection specialists work closely with
                healthcare providers to recover outstanding balances while
                ensuring compliance with healthcare regulations.
              </p>

            </section>

            {/* COLLECTION PROCESS */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Our Patient Collection Process
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Review patient accounts accurately before outreach</li>
                <li>✔ Communicate clearly regarding outstanding balances</li>
                <li>✔ Document payment commitments and follow-ups</li>
                <li>✔ Offer flexible payment plans when applicable</li>
                <li>✔ Verify patient account details before collections</li>
                <li>✔ Provide clear explanations of billing statements</li>
                <li>✔ Track account progress and maintain regular follow-ups</li>

              </ul>

            </section>

            {/* COLLECTION STRATEGIES */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Advanced Patient Collection Strategies
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Payment trend analysis</li>
                <li>✔ Patient account history review</li>
                <li>✔ Customized communication strategies</li>
                <li>✔ Efficient dispute management</li>
                <li>✔ Third-party collection coordination</li>

              </ul>

            </section>

            {/* SERVICES */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Key Patient Collection Services
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Patient account follow-ups</li>
                <li>✔ Payment plan coordination</li>
                <li>✔ Insurance eligibility verification</li>
                <li>✔ Billing dispute resolution</li>
                <li>✔ Patient communication management</li>
                <li>✔ Third-party collections support</li>

              </ul>

            </section>

            {/* WHY SKYKORG */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ HIPAA compliant processes</li>
                <li>✔ Experienced healthcare billing specialists</li>
                <li>✔ Respectful patient communication</li>
                <li>✔ Improved revenue recovery</li>
                <li>✔ Efficient dispute resolution</li>

              </ul>

            </section>

          </article>

          {/* SIDEBAR */}
          <aside className="space-y-8">

            <div className="bg-orange-500 text-white p-6 rounded-lg shadow">

              <h3 className="font-semibold text-lg mb-3">
                How Can We Help?
              </h3>

              <p className="text-sm mb-4">
                Improve revenue recovery and streamline patient collection
                processes with SkyKorg Healthcare solutions.
              </p>

              <Link
                href="/contact"
                className="block bg-black text-white text-center py-2 rounded"
              >
                Schedule a Call
              </Link>

            </div>

            <div className="bg-white p-6 rounded-lg shadow">

              <h3 className="font-semibold mb-4">
                SkyKorg Advantage
              </h3>

              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✔ Compliance-driven collections</li>
                <li>✔ Experienced recovery specialists</li>
                <li>✔ Improved cash flow management</li>
                <li>✔ Respectful patient communication</li>
              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Improve Revenue Recovery with Patient Collection Services
          </h2>

          <p className="mb-6">
            Partner with SkyKorg Healthcare to streamline patient
            collections and improve healthcare revenue cycle management.
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