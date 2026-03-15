import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export default function ServicePage({ service }) {

  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            {service.title}
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            {service.description}
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* MAIN */}
          <article className="lg:col-span-2 space-y-10">

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {service.title}
              </h2>

              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>✔ 99.9% billing accuracy</li>
                <li>✔ Reduced claim denials</li>
                <li>✔ Faster reimbursements</li>
                <li>✔ HIPAA compliant processes</li>
                <li>✔ Dedicated RCM specialists</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Our Services Include
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Eligibility verification</li>
                <li>✔ Medical coding</li>
                <li>✔ Charge entry</li>
                <li>✔ Claims submission</li>
                <li>✔ AR follow-ups</li>
                <li>✔ Denial management</li>
              </ul>
            </section>

          </article>

          {/* SIDEBAR */}
          <aside className="space-y-8">

            <div className="bg-orange-500 text-white p-6 rounded-lg shadow">

              <h3 className="font-semibold mb-3">
                How Can We Help?
              </h3>

              <p className="text-sm mb-4">
                Transform your revenue cycle with expert medical billing
                and healthcare outsourcing services.
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
                <li>✔ 80% Cost Reduction</li>
                <li>✔ Dedicated Account Managers</li>
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
            Optimize Your Revenue Cycle
          </h2>

          <p className="mb-6">
            Partner with SkyKorg Healthcare to streamline billing
            operations and maximize reimbursements.
          </p>

          <Link
            href="/contact"
            className="bg-black px-8 py-3 rounded"
          >
            Request Consultation
          </Link>

        </div>

      </section>

      <EnquiryForm />

    </main>
  );
}