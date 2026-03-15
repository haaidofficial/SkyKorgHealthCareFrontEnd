import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Telephone & Message Triage Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides telephone and message triage services that help healthcare providers manage patient communication efficiently while improving patient care and operational efficiency."
};

export default function TelephoneTriagePage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Telephone and Message Triage Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Telephone & Message Triage Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg Healthcare provides professional telephone and
            message triage services that help healthcare providers
            respond to patient inquiries quickly and efficiently.
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
                Improve Patient Communication with Triage Services
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Effective patient communication is essential for
                delivering high-quality healthcare services. Telephone
                and message triage services help healthcare providers
                manage patient inquiries, assess symptoms, and prioritize
                care based on urgency.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                SkyKorg Healthcare offers structured triage solutions
                designed to streamline patient communication while
                improving patient satisfaction and healthcare outcomes.
              </p>

            </section>

            {/* TELEPHONE TRIAGE */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Understanding Telephone Triage
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Telephone triage involves assessing patient symptoms
                over phone calls and determining the urgency of medical
                care required. This helps healthcare providers deliver
                timely guidance and prioritize medical attention.
              </p>

              <ul className="space-y-3 text-gray-700 mt-4">

                <li>✔ Symptom assessment and prioritization</li>
                <li>✔ Patient guidance and decision support</li>
                <li>✔ Appointment scheduling assistance</li>
                <li>✔ Emergency escalation protocols</li>

              </ul>

            </section>

            {/* MESSAGE TRIAGE */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Understanding Message Triage
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Message triage focuses on managing patient messages
                received through digital platforms such as portals,
                emails, and messaging systems.
              </p>

              <ul className="space-y-3 text-gray-700 mt-4">

                <li>✔ Prioritization of patient inquiries</li>
                <li>✔ Secure patient communication management</li>
                <li>✔ Timely response coordination</li>
                <li>✔ HIPAA-compliant messaging processes</li>

              </ul>

            </section>

            {/* BENEFITS */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Benefits of Telephone & Message Triage
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Improved patient satisfaction</li>
                <li>✔ Reduced administrative workload</li>
                <li>✔ Faster patient response times</li>
                <li>✔ Better patient care coordination</li>
                <li>✔ Enhanced healthcare operational efficiency</li>

              </ul>

            </section>

            {/* WHY SKYKORG */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Experienced healthcare communication teams</li>
                <li>✔ HIPAA compliant communication systems</li>
                <li>✔ Secure patient data handling</li>
                <li>✔ Scalable triage solutions for healthcare providers</li>
                <li>✔ Improved patient engagement</li>

              </ul>

            </section>

            {/* CTA TEXT */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Streamline Patient Communication Today
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Partner with SkyKorg Healthcare to improve patient
                communication and enhance healthcare operational
                efficiency through advanced triage solutions.
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
                Improve patient communication and reduce administrative
                workload with professional triage services.
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
                <li>✔ HIPAA compliant communication</li>
                <li>✔ Experienced healthcare support teams</li>
                <li>✔ Secure patient messaging</li>
                <li>✔ Scalable triage services</li>
              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Enhance Patient Care with Triage Services
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