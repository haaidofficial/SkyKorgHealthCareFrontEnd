import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Out-of-Network (OON) Collections | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare helps providers recover out-of-network reimbursements through negotiation, arbitration, and payer dispute resolution."
};

export default function OONCollectionsPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Out of Network Collections"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Out-of-Network (OON) Collections
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg Healthcare helps providers recover fair reimbursement
            from out-of-network claims through strategic negotiation,
            dispute resolution, and arbitration support.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* MAIN CONTENT */}
          <article className="lg:col-span-2 space-y-12">

            {/* INTRODUCTION */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Introduction
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Out-of-network claims often lead to reimbursement disputes
                between providers and payers. Regulations such as the
                No Surprises Act aim to protect patients while establishing
                fair payment processes between healthcare providers and insurers.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                SkyKorg Healthcare assists providers through the full OON
                dispute process, helping ensure fair compensation for
                services rendered.
              </p>

            </section>

            {/* HOW WE HELP */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                How We Help
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Many healthcare providers struggle to recover full payment
                from out-of-network claims due to complex payer negotiations.
                Our specialists analyze claims and negotiate reimbursements
                to help providers maximize their revenue.
              </p>

            </section>

            {/* WHAT WE DO */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Our OON Collection Services
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ OON claim analysis and reimbursement evaluation</li>
                <li>✔ Billing and coding review to optimize reimbursement</li>
                <li>✔ Negotiation with payers for fair settlement</li>
                <li>✔ Independent dispute resolution (IDR) support</li>
                <li>✔ Documentation preparation and submission</li>
                <li>✔ Arbitration follow-up and outcome monitoring</li>

              </ul>

            </section>

            {/* SPECIALTIES */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Specialties We Serve
              </h2>

              <p className="text-gray-700 mb-4">
                Our OON collection services support a wide range of
                medical specialties including:
              </p>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Emergency Medicine</li>
                <li>✔ Trauma Surgery</li>
                <li>✔ Cardiology</li>
                <li>✔ Neurology</li>
                <li>✔ Anesthesiology</li>
                <li>✔ Radiology</li>
                <li>✔ Orthopedics</li>
                <li>✔ Plastic Surgery</li>
                <li>✔ Behavioral Health</li>

              </ul>

            </section>

            {/* WHY CHOOSE SKYKORG */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Extensive RCM expertise</li>
                <li>✔ Experienced payer negotiation specialists</li>
                <li>✔ HIPAA compliant operations</li>
                <li>✔ Proven success in reimbursement recovery</li>
                <li>✔ Dedicated account management</li>

              </ul>

            </section>

            {/* CTA TEXT */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Recover the Revenue You Deserve
              </h2>

              <p className="text-gray-700 leading-relaxed">
                SkyKorg Healthcare helps providers navigate the complex
                out-of-network reimbursement landscape and maximize
                revenue recovery through expert negotiation and
                dispute resolution.
              </p>

            </section>

          </article>

          {/* SIDEBAR */}
          <aside className="space-y-8">

            <div className="bg-orange-500 text-white p-6 rounded-lg shadow">

              <h3 className="font-semibold text-lg mb-3">
                How Can We Help?
              </h3>

              <p className="text-sm mb-4">
                Recover more revenue from out-of-network claims with
                SkyKorg Healthcare’s expert negotiation services.
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
                <li>✔ Experienced RCM experts</li>
                <li>✔ Proven OON recovery success</li>
                <li>✔ HIPAA compliant operations</li>
                <li>✔ Dedicated revenue specialists</li>
              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Maximize Your Out-of-Network Reimbursements
          </h2>

          <p className="mb-6">
            Partner with SkyKorg Healthcare to recover the revenue you
            deserve from out-of-network claims.
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