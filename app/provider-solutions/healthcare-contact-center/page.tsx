import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Healthcare Contact Center Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides healthcare contact center solutions including patient communication, appointment scheduling, insurance verification, and customer support services."
};

export default function ContactCenterPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Healthcare Contact Center Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Healthcare Contact Center Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg Healthcare provides professional healthcare contact
            center services designed to improve patient engagement,
            streamline communication, and enhance operational efficiency
            for healthcare providers.
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
                Empower Your Practice with Omnichannel Communication
              </h2>

              <p className="text-gray-700 leading-relaxed">
                SkyKorg Healthcare understands the importance of
                exceptional customer support in the healthcare industry.
                Our contact center services help healthcare organizations
                improve patient communication and deliver seamless
                support experiences.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                From appointment scheduling to patient follow-ups and
                insurance assistance, our healthcare contact center
                specialists provide reliable support that improves
                patient satisfaction and operational efficiency.
              </p>

            </section>

            {/* IMPORTANCE */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                The Importance of Healthcare Customer Support
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Effective healthcare communication plays a crucial role in
                building patient trust and improving healthcare outcomes.
                Contact center solutions allow healthcare providers to
                address patient concerns quickly while ensuring smooth
                coordination between healthcare teams and patients.
              </p>

            </section>

            {/* HIPAA */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                HIPAA Compliance & Data Security
              </h2>

              <p className="text-gray-700 leading-relaxed">
                SkyKorg Healthcare follows strict HIPAA compliant
                processes to ensure secure communication and protection
                of sensitive patient information.
              </p>

              <ul className="space-y-2 text-gray-700 mt-4">
                <li>✔ Secure data encryption</li>
                <li>✔ Compliance with healthcare regulations</li>
                <li>✔ Secure network infrastructure</li>
                <li>✔ Controlled access management</li>
                <li>✔ Regular data backups</li>
              </ul>

            </section>

            {/* BENEFITS */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Key Benefits of Healthcare Contact Center Services
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Improved patient satisfaction</li>
                <li>✔ Efficient communication between patients and providers</li>
                <li>✔ Faster appointment scheduling</li>
                <li>✔ Reduced administrative workload</li>
                <li>✔ Higher patient retention rates</li>

              </ul>

            </section>

            {/* SERVICES */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Our Healthcare Contact Center Services
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Patient appointment scheduling</li>
                <li>✔ Medical records management</li>
                <li>✔ Insurance verification support</li>
                <li>✔ Billing & payment assistance</li>
                <li>✔ Patient communication services</li>
                <li>✔ Referral coordination</li>

              </ul>

            </section>

            {/* WHY SKYKORG */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Experienced healthcare support teams</li>
                <li>✔ HIPAA compliant processes</li>
                <li>✔ 24/7 customer support availability</li>
                <li>✔ Scalable healthcare communication solutions</li>
                <li>✔ Improved patient engagement strategies</li>

              </ul>

            </section>

            {/* MULTILINGUAL */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Multilingual Support
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Our healthcare contact center services provide multilingual
                support to help healthcare organizations communicate
                effectively with diverse patient populations.
              </p>

              <ul className="space-y-2 text-gray-700 mt-4">
                <li>✔ English</li>
                <li>✔ Spanish</li>
                <li>✔ French</li>
                <li>✔ German</li>
                <li>✔ Russian</li>
              </ul>

            </section>

            {/* CTA TEXT */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Transform Your Healthcare Communication
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Partner with SkyKorg Healthcare to deliver exceptional
                patient communication and improve operational efficiency
                through advanced healthcare contact center solutions.
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
                Improve patient communication and streamline healthcare
                operations with our contact center solutions.
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
                <li>✔ Experienced healthcare support agents</li>
                <li>✔ HIPAA compliant communication</li>
                <li>✔ Scalable healthcare contact center</li>
                <li>✔ Improved patient satisfaction</li>
              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Enhance Patient Engagement with Healthcare Contact Centers
          </h2>

          <p className="mb-6">
            Partner with SkyKorg Healthcare to streamline patient
            communication and improve healthcare service delivery.
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