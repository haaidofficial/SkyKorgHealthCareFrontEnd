import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Medical Data Entry Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides accurate and secure medical data entry services including patient records, billing data, insurance documentation, and healthcare data management."
};

export default function MedicalDataEntryPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Medical Data Entry Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Medical Data Entry Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg Healthcare provides secure, accurate, and efficient
            medical data entry services that help healthcare providers
            maintain organized and compliant patient information systems.
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
                Precision Data Entry for Modern Healthcare
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Healthcare organizations rely heavily on accurate data to
                maintain patient records, billing information, and
                compliance documentation. Medical data entry services
                ensure healthcare providers maintain clean, accurate, and
                accessible healthcare records.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                SkyKorg Healthcare provides specialized healthcare data
                entry services that ensure accuracy, security, and
                compliance with healthcare regulations such as HIPAA.
              </p>

            </section>

            {/* WHY PARTNER */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Why Partner with SkyKorg Healthcare
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Experienced healthcare data specialists</li>
                <li>✔ HIPAA compliant data management</li>
                <li>✔ Secure data encryption protocols</li>
                <li>✔ Cost-effective data processing solutions</li>
                <li>✔ Scalable services for growing healthcare practices</li>

              </ul>

            </section>

            {/* SERVICES */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Medical Data Entry Services We Offer
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Hospital records data entry</li>
                <li>✔ Laboratory records entry</li>
                <li>✔ Patient information management</li>
                <li>✔ Medical billing data entry</li>
                <li>✔ Insurance documentation entry</li>
                <li>✔ Clinical records management</li>
                <li>✔ Medical chart documentation</li>
                <li>✔ Appointment scheduling data entry</li>
                <li>✔ Medical claim form processing</li>

              </ul>

            </section>

            {/* ACCURACY */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Why Accurate Medical Data Entry Matters
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Accurate healthcare data entry is critical for maintaining
                compliance, reducing billing errors, and ensuring smooth
                healthcare operations.
              </p>

              <ul className="space-y-3 text-gray-700 mt-4">

                <li>✔ Reduced administrative workload</li>
                <li>✔ Faster claim processing</li>
                <li>✔ Improved patient record accuracy</li>
                <li>✔ Better operational efficiency</li>

              </ul>

            </section>

            {/* INDUSTRIES */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Industries We Serve
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Hospitals and healthcare systems</li>
                <li>✔ Diagnostic labs and imaging centers</li>
                <li>✔ Nursing homes and assisted living facilities</li>
                <li>✔ Pharmaceutical companies</li>
                <li>✔ Health insurance providers</li>

              </ul>

            </section>

            {/* PROCESS */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Our Medical Data Entry Process
              </h2>

              <ol className="space-y-3 text-gray-700 list-decimal pl-5">

                <li>Understanding healthcare data requirements</li>
                <li>Organizing patient and administrative records</li>
                <li>Accurate data entry and validation</li>
                <li>Quality checks and compliance verification</li>
                <li>Secure delivery and reporting</li>

              </ol>

            </section>

            {/* CTA TEXT */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Simplify Healthcare Data Management
              </h2>

              <p className="text-gray-700 leading-relaxed">
                SkyKorg Healthcare helps healthcare organizations manage
                large volumes of healthcare data while maintaining
                security, compliance, and operational efficiency.
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
                Streamline your healthcare data entry operations with
                secure and accurate data management services.
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
                <li>✔ Secure healthcare data management</li>
                <li>✔ Experienced data specialists</li>
                <li>✔ Scalable healthcare solutions</li>
              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Improve Accuracy with Professional Medical Data Entry
          </h2>

          <p className="mb-6">
            Partner with SkyKorg Healthcare to manage healthcare data
            efficiently and improve operational workflows.
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