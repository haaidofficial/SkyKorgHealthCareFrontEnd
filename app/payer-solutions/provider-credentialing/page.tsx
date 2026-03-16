import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Provider Credentialing Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides comprehensive provider credentialing and enrollment services including verification, payer enrollment, re-credentialing, and compliance management."
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

          <h1 className="text-4xl md:text-4xl font-bold max-w-3xl">
            Provider Credentialing and Enrollment Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

        </div>

      </section>

      {/* MAIN CONTENT */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10 text-gray-700">

            <p>
              Provider credentialing is a critical process that verifies the
              qualifications, experience, and professional background of
              healthcare providers before they are authorized to deliver
              medical services and submit insurance claims. Proper
              credentialing ensures compliance with payer regulations and
              improves the credibility of healthcare organizations.
            </p>

            <p>
              SkyKorg Healthcare provides comprehensive provider credentialing
              services designed to simplify enrollment with insurance payers,
              maintain regulatory compliance, and help healthcare practices
              start billing faster.
            </p>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Our Credentialing Process
              </h2>

              <ul className="list-disc ml-6 space-y-2">

                <li>
                  Collection and review of provider documentation and
                  professional credentials.
                </li>

                <li>
                  Request for additional documentation and follow-up with
                  providers when required.
                </li>

                <li>
                  Primary and secondary source verification of credentials
                  following NCQA and CMS guidelines.
                </li>

                <li>
                  Preparation of credentialing reports for approval by
                  credentialing committees.
                </li>

                <li>
                  Notification of credentialing status and enrollment
                  confirmation with payers.
                </li>

              </ul>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Comprehensive Credentialing Services
              </h2>

              <ul className="list-disc ml-6 space-y-2">

                <li>Provider enrollment with commercial and government payers.</li>

                <li>Medicare and Medicaid provider enrollment services.</li>

                <li>CAQH profile creation and maintenance.</li>

                <li>Hospital privilege applications and follow-ups.</li>

                <li>Re-credentialing and license renewals.</li>

                <li>Payer contract enrollment and network participation.</li>

              </ul>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Reporting and Compliance Support
              </h2>

              <p>
                SkyKorg Healthcare ensures that healthcare providers remain
                compliant with regulatory bodies such as CMS, NCQA, and other
                healthcare authorities. Our credentialing specialists
                maintain accurate provider records and generate detailed
                reports that support compliance and operational transparency.
              </p>

              <ul className="list-disc ml-6 mt-4 space-y-2">

                <li>Provider data maintenance and updates.</li>

                <li>Physician and facility credentialing reports.</li>

                <li>Provider ADD/TERM tracking reports.</li>

                <li>Delegated credentialing support.</li>

                <li>Custom reporting for healthcare organizations.</li>

              </ul>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare for Credentialing?
              </h2>

              <ul className="list-disc ml-6 space-y-2">

                <li>Experienced credentialing specialists.</li>

                <li>Faster payer enrollment timelines.</li>

                <li>Reduced administrative workload.</li>

                <li>Accurate documentation and verification.</li>

                <li>Full compliance with CMS and NCQA standards.</li>

              </ul>

            </div>

          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">

            <div className="bg-orange-500 p-8 text-white">

              <h3 className="text-xl font-semibold mb-4">
                Need Credentialing Support?
              </h3>

              <p className="mb-6">
                Let SkyKorg Healthcare manage provider credentialing and
                payer enrollment efficiently.
              </p>

              <Link
                href="/contact"
                className="bg-black px-6 py-3 inline-block"
              >
                Schedule a Call
              </Link>

            </div>

            <div className="bg-orange-100 border border-orange-400 p-6">

              <h3 className="font-semibold mb-4">
                The SkyKorg Advantage
              </h3>

              <ul className="space-y-2 text-sm">

                <li>✔ Faster provider enrollment</li>
                <li>✔ Experienced credentialing specialists</li>
                <li>✔ Compliance with CMS & NCQA standards</li>
                <li>✔ Accurate provider documentation</li>
                <li>✔ Reduced administrative workload</li>

              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Looking for Reliable Provider Credentialing Services?
          </h2>

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