import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Medical Transcription Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare offers accurate and secure medical transcription services with fast turnaround time, HIPAA compliance, and dedicated transcription specialists."
};

export default function MedicalTranscriptionPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Medical Transcription Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Medical Transcription Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg Healthcare provides reliable and accurate medical
            transcription services designed to support healthcare
            providers with secure documentation and faster clinical
            workflows.
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
                Accurate Medical Transcription Services
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Medical transcription plays a vital role in healthcare
                documentation by converting physician dictations into
                accurate patient records. At SkyKorg Healthcare, we
                combine experienced transcription professionals with
                advanced technologies to deliver precise and reliable
                medical documentation.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                Our transcription services are built around speed,
                accuracy, and compliance to ensure healthcare providers
                receive high-quality documentation support.
              </p>

            </section>

            {/* FEATURES */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Key Features of Our Medical Transcription Services
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Affordable transcription solutions</li>
                <li>✔ Dedicated account managers</li>
                <li>✔ 24-hour turnaround time</li>
                <li>✔ HIPAA compliant security protocols</li>
                <li>✔ Continuous quality assurance audits</li>
                <li>✔ Highly experienced transcription specialists</li>

              </ul>

            </section>

            {/* EMR SECTION */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Medical Transcription with EMR Integration
              </h2>

              <p className="text-gray-700 leading-relaxed">
                SkyKorg Healthcare integrates transcription services
                directly into your Electronic Medical Record (EMR)
                system. Physicians can simply dictate notes, and our
                transcription team converts them into structured
                documentation ready for your EMR platform.
              </p>

            </section>

            {/* WITHOUT EMR */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Medical Transcription Without EMR
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Even if your healthcare organization does not use an EMR
                system, our secure document management platform allows
                easy access to transcripts. Physicians can review,
                edit, and share documentation securely anytime.
              </p>

            </section>

            {/* ONLINE ACCESS */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Access Your Transcripts Anytime
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Our cloud-based system enables healthcare providers to
                access medical transcripts online from any device,
                including desktops, tablets, or smartphones. This
                ensures seamless documentation access from clinics,
                hospitals, or home offices.
              </p>

            </section>

            {/* WHY SKYKORG */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Experienced transcription specialists</li>
                <li>✔ HIPAA compliant data protection</li>
                <li>✔ Fast turnaround times</li>
                <li>✔ Scalable transcription services</li>
                <li>✔ Dedicated customer support</li>

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
                Improve your clinical documentation accuracy with
                SkyKorg Healthcare transcription solutions.
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
                <li>✔ HIPAA compliant processes</li>
                <li>✔ Experienced transcription experts</li>
                <li>✔ Fast turnaround time</li>
                <li>✔ Accurate medical documentation</li>
              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Streamline Clinical Documentation
          </h2>

          <p className="mb-6">
            Partner with SkyKorg Healthcare to enhance your healthcare
            documentation workflows with professional transcription
            services.
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