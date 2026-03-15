import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Virtual Medical Assistant Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides virtual medical assistants and remote practice management support including appointment scheduling, patient communication, billing assistance, and administrative healthcare services."
};

export default function VirtualMedicalAssistancePage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Virtual Medical Assistant Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Virtual Medical Assistance & Remote Practice Management
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg Healthcare offers highly trained virtual medical
            assistants who support healthcare providers with clinical,
            administrative, and operational tasks remotely.
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
                What Are Healthcare Virtual Assistant Services?
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Healthcare virtual assistants provide remote operational
                and administrative support to medical practices. These
                professionals help healthcare organizations streamline
                workflows, improve patient communication, and manage
                administrative tasks efficiently.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                Virtual assistants allow healthcare providers to focus on
                patient care while reducing administrative burden and
                operational costs.
              </p>
            </section>

            {/* SERVICES */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Key Services Offered by Virtual Medical Assistants
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Appointment scheduling</li>
                <li>✔ Calendar management</li>
                <li>✔ Patient follow-ups and communication</li>
                <li>✔ Medical billing assistance</li>
                <li>✔ Insurance claims processing support</li>
                <li>✔ Patient intake and documentation</li>
              </ul>
            </section>

            {/* ADMIN TASKS */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Administrative Tasks Managed
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Patient appointment reminders</li>
                <li>✔ Insurance verification</li>
                <li>✔ Medical record updates</li>
                <li>✔ Documentation management</li>
                <li>✔ Claims follow-up support</li>
              </ul>
            </section>

            {/* PATIENT EXPERIENCE */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Enhancing Patient Experience
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Virtual assistants improve patient satisfaction by ensuring
                quick appointment scheduling, effective communication,
                timely reminders, and efficient practice management.
              </p>
            </section>

            {/* SECURITY */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                HIPAA Compliance and Data Security
              </h2>

              <p className="text-gray-700 leading-relaxed">
                SkyKorg Healthcare follows strict HIPAA compliance
                protocols to ensure secure communication and patient
                data protection across healthcare systems.
              </p>

              <ul className="space-y-3 text-gray-700 mt-4">
                <li>✔ Encrypted communication</li>
                <li>✔ Secure data storage</li>
                <li>✔ HIPAA compliant workflows</li>
                <li>✔ Secure access management</li>
              </ul>
            </section>

            {/* TECHNOLOGY */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Technology and Security Infrastructure
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ EHR system integration</li>
                <li>✔ Secure healthcare platforms</li>
                <li>✔ Advanced patient data protection</li>
                <li>✔ Secure cloud infrastructure</li>
              </ul>
            </section>

            {/* BENEFITS */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Benefits of Hiring Virtual Medical Assistants
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Reduced operational costs</li>
                <li>✔ Improved administrative efficiency</li>
                <li>✔ Better patient communication</li>
                <li>✔ Increased practice productivity</li>
                <li>✔ Scalable workforce solutions</li>
              </ul>
            </section>

            {/* WHY SKYKORG */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Experienced healthcare professionals</li>
                <li>✔ Cost-effective staffing solutions</li>
                <li>✔ HIPAA compliant workflows</li>
                <li>✔ Dedicated healthcare support teams</li>
                <li>✔ Scalable remote workforce</li>
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
                    Do virtual assistants follow HIPAA compliance?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Yes. All SkyKorg Healthcare assistants follow strict
                    HIPAA compliant processes to protect patient data.
                  </p>
                </details>

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    Can virtual assistants work with EHR systems?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Yes. Our assistants are trained to work with various
                    electronic health record systems used by healthcare
                    providers.
                  </p>
                </details>

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    Do you offer multilingual assistants?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Yes. SkyKorg Healthcare provides multilingual virtual
                    assistants to support diverse patient populations.
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
                Streamline your healthcare operations with experienced
                virtual medical assistants from SkyKorg Healthcare.
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
                <li>✔ Experienced healthcare assistants</li>
                <li>✔ Cost-effective staffing</li>
                <li>✔ HIPAA compliant workflows</li>
                <li>✔ Scalable workforce solutions</li>
              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Optimize Your Healthcare Practice with Virtual Assistants
          </h2>

          <p className="mb-6">
            Partner with SkyKorg Healthcare to improve efficiency,
            reduce administrative workload, and enhance patient care.
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