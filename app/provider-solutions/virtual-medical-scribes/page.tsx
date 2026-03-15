import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Virtual Scribe Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides virtual medical scribe services to help physicians reduce documentation workload, improve efficiency, and enhance patient care."
};

export default function VirtualScribePage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Virtual Scribe Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Virtual Scribe Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg Healthcare offers professional virtual scribe services
            that help physicians streamline medical documentation while
            focusing more on patient care.
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
                Why Virtual Medical Scribes?
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Physicians today face increasing documentation requirements
                that reduce time spent with patients. Virtual medical
                scribes assist by documenting patient encounters,
                allowing physicians to focus on delivering quality care.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                SkyKorg Healthcare virtual scribes ensure accurate,
                real-time documentation that integrates seamlessly with
                electronic health record systems.
              </p>
            </section>

            {/* DIFFERENCE */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                The Virtual Scribe Difference
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Virtual scribes assist healthcare providers by documenting
                patient interactions during consultations, ensuring that
                medical notes are accurate, complete, and compliant with
                healthcare documentation standards.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                This support helps physicians reduce administrative burden
                while improving operational efficiency and patient
                satisfaction.
              </p>
            </section>

            {/* BENEFITS */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Benefits of Virtual Medical Scribes
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Reduce physician burnout</li>
                <li>✔ Improve clinical documentation accuracy</li>
                <li>✔ Increase physician productivity</li>
                <li>✔ Improve patient satisfaction</li>
                <li>✔ Reduce documentation errors</li>
              </ul>
            </section>

            {/* ADVANTAGES */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                The SkyKorg Advantage
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Experienced healthcare documentation specialists</li>
                <li>✔ HIPAA compliant processes</li>
                <li>✔ Seamless EHR integration</li>
                <li>✔ Scalable remote workforce</li>
                <li>✔ Dedicated account management</li>
              </ul>
            </section>

            {/* FEATURES */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Key Features of Our Virtual Scribe Services
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Real-time medical documentation</li>
                <li>✔ EHR documentation support</li>
                <li>✔ Medical transcription assistance</li>
                <li>✔ Patient encounter documentation</li>
                <li>✔ Healthcare compliance adherence</li>
              </ul>
            </section>

            {/* WHY SKYKORG */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare
              </h2>

              <p className="text-gray-700 leading-relaxed">
                SkyKorg Healthcare provides reliable virtual scribe
                solutions designed to improve physician productivity and
                healthcare documentation accuracy while reducing
                administrative workload.
              </p>

              <ul className="space-y-3 text-gray-700 mt-4">
                <li>✔ 99.9% documentation accuracy</li>
                <li>✔ Cost-effective solutions</li>
                <li>✔ Dedicated healthcare support teams</li>
                <li>✔ Secure data handling</li>
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">
                FAQs
              </h2>

              <div className="space-y-4">

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    Do virtual scribes work with EHR systems?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Yes. SkyKorg Healthcare scribes are trained to work
                    with multiple EHR systems used by healthcare providers.
                  </p>
                </details>

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    Are virtual scribes HIPAA compliant?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Yes. Our documentation processes follow strict HIPAA
                    compliance standards to protect patient data.
                  </p>
                </details>

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    Can scribes reduce physician workload?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Yes. Virtual scribes reduce administrative burden,
                    allowing physicians to spend more time with patients.
                  </p>
                </details>

              </div>

            </section>

          </article>

          {/* SIDEBAR */}
          <aside className="space-y-8">

            <div className="bg-orange-500 text-white p-6 rounded-lg shadow">

              <h3 className="font-semibold text-lg mb-3">
                How Can We Help?
              </h3>

              <p className="text-sm mb-4">
                Improve clinical documentation and physician productivity
                with SkyKorg Healthcare virtual scribe services.
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
                <li>✔ HIPAA compliant workflows</li>
                <li>✔ Experienced documentation specialists</li>
                <li>✔ Accurate clinical documentation</li>
                <li>✔ Scalable remote workforce</li>
              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Improve Physician Productivity with Virtual Scribes
          </h2>

          <p className="mb-6">
            Partner with SkyKorg Healthcare to reduce documentation
            workload and enhance healthcare efficiency.
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