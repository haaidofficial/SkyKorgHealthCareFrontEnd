import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Provider Credentialing Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare offers provider credentialing services including verification, enrollment, and compliance management to help healthcare organizations maintain regulatory standards."
};

export default function CredentialingPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Provider Credentialing Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Provider Credentialing Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg Healthcare provides comprehensive credentialing
            services that ensure healthcare providers meet regulatory,
            compliance, and payer enrollment requirements.
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
                What is Provider Credentialing?
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Credentialing is the process of verifying the professional
                qualifications of healthcare providers. This process
                confirms that providers meet the required standards and
                regulatory requirements to deliver healthcare services.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                SkyKorg Healthcare offers credentialing services designed
                to streamline provider enrollment, verify credentials,
                and ensure compliance with healthcare regulations.
              </p>

            </section>

            {/* PROCESS */}
            <section>

              <h2 className="text-2xl font-semibold mb-6">
                Our Credentialing Process
              </h2>

              <div className="space-y-6">

                <div className="bg-orange-500 text-white p-5 rounded shadow">
                  Review documents received from providers
                </div>

                <div className="bg-orange-500 text-white p-5 rounded shadow">
                  Request additional documents and follow-ups
                </div>

                <div className="bg-orange-500 text-white p-5 rounded shadow">
                  Verify credentials through primary and secondary sources
                </div>

                <div className="bg-orange-500 text-white p-5 rounded shadow">
                  Generate credentialing report for approval or denial
                </div>

                <div className="bg-orange-500 text-white p-5 rounded shadow">
                  Notify providers regarding committee decision
                </div>

              </div>

            </section>

            {/* HIGHLIGHTS */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Credentialing Service Highlights
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Full credentialing and re-credentialing services</li>
                <li>✔ Provider enrollment and verification</li>
                <li>✔ Regular updates to provider information</li>
                <li>✔ Comprehensive credentialing reports</li>
                <li>✔ Delegated credentialing management</li>

              </ul>

            </section>

            {/* REPORTS */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Reporting and Documentation
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ HSD reports</li>
                <li>✔ Physician and facility reports</li>
                <li>✔ Weekly provider add/termination reports</li>
                <li>✔ Delegated credentialing reports</li>
                <li>✔ Custom credentialing reports</li>

              </ul>

            </section>

            {/* WHY SKYKORG */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Our experienced credentialing specialists ensure
                healthcare providers meet compliance standards while
                simplifying credential verification and enrollment
                processes.
              </p>

              <ul className="space-y-3 text-gray-700 mt-4">

                <li>✔ Experienced credentialing specialists</li>
                <li>✔ Compliance with NCQA and CMS standards</li>
                <li>✔ Accurate provider data management</li>
                <li>✔ Streamlined credential verification</li>

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
                Simplify provider credentialing and ensure compliance
                with healthcare regulations using SkyKorg Healthcare
                credentialing solutions.
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
                <li>✔ Credentialing experts</li>
                <li>✔ Compliance management</li>
                <li>✔ Accurate provider verification</li>
                <li>✔ Faster provider enrollment</li>
              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Simplify Provider Credentialing Processes
          </h2>

          <p className="mb-6">
            Partner with SkyKorg Healthcare to streamline provider
            credentialing, improve compliance, and enhance operational
            efficiency.
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