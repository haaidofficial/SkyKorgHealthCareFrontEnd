import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Healthcare Virtual Assistant Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides trained virtual medical assistants to support healthcare practices with scheduling, patient communication, billing support, and administrative tasks."
};

export default function VirtualMedicalAssistantPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Healthcare Virtual Assistant Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Healthcare Virtual Assistant Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg Healthcare provides experienced virtual medical
            assistants to support healthcare providers with administrative,
            clinical, and operational tasks.
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
                What is a Healthcare Virtual Assistant?
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Healthcare virtual assistants provide remote administrative
                and operational support for medical practices, clinics,
                and healthcare organizations.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                These trained professionals assist healthcare providers
                with scheduling, billing support, patient communication,
                documentation, and other daily tasks.
              </p>
            </section>

            {/* SERVICES */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Services Provided by Virtual Medical Assistants
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Appointment scheduling</li>
                <li>✔ Calendar management</li>
                <li>✔ Patient communication</li>
                <li>✔ Insurance verification</li>
                <li>✔ Medical billing support</li>
                <li>✔ Documentation and EHR management</li>
              </ul>
            </section>

            {/* TASKS */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Administrative Tasks We Handle
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Appointment reminders</li>
                <li>✔ Insurance eligibility verification</li>
                <li>✔ Medical record updates</li>
                <li>✔ Patient intake support</li>
                <li>✔ Claims follow-up assistance</li>
              </ul>
            </section>

            {/* BENEFITS */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Benefits of Hiring a Virtual Medical Assistant
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Reduced administrative workload</li>
                <li>✔ Improved operational efficiency</li>
                <li>✔ Better patient communication</li>
                <li>✔ Lower staffing costs</li>
                <li>✔ Increased productivity for healthcare teams</li>
              </ul>
            </section>

            {/* PATIENT EXPERIENCE */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Improving Patient Experience
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Virtual medical assistants enhance patient satisfaction
                by ensuring faster appointment scheduling, clear
                communication, and efficient administrative workflows.
              </p>
            </section>

            {/* SECURITY */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                HIPAA Compliance and Data Security
              </h2>

              <p className="text-gray-700 leading-relaxed">
                SkyKorg Healthcare follows strict HIPAA compliance
                protocols to protect patient data and ensure secure
                communication across healthcare systems.
              </p>
            </section>

            {/* TECHNOLOGY */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Technology and Security Infrastructure
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Secure healthcare data management</li>
                <li>✔ HIPAA compliant communication tools</li>
                <li>✔ EHR system integration</li>
                <li>✔ Secure cloud platforms</li>
              </ul>
            </section>

            {/* WHY SKYKORG */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Experienced virtual healthcare professionals</li>
                <li>✔ Cost-effective staffing solutions</li>
                <li>✔ Scalable workforce support</li>
                <li>✔ HIPAA compliant processes</li>
                <li>✔ Dedicated healthcare support teams</li>
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">
                Virtual Assistant FAQs
              </h2>

              <div className="space-y-4">

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    Are virtual medical assistants HIPAA compliant?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Yes. SkyKorg Healthcare ensures all virtual assistants
                    follow HIPAA compliant workflows and secure
                    communication systems.
                  </p>
                </details>

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    Can virtual assistants work with EHR systems?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Yes. Our assistants are trained to work with
                    multiple EHR systems used by healthcare providers.
                  </p>
                </details>

                <details className="bg-white p-4 rounded shadow">
                  <summary className="cursor-pointer font-medium">
                    Do you offer multilingual assistants?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Yes. SkyKorg Healthcare provides multilingual
                    healthcare assistants to support diverse patient
                    populations.
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
                Improve operational efficiency and reduce administrative
                workload with SkyKorg Healthcare’s virtual assistants.
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
                <li>✔ Cost-effective staffing</li>
                <li>✔ Experienced healthcare assistants</li>
                <li>✔ HIPAA compliant workflows</li>
                <li>✔ Scalable support teams</li>
              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Streamline Healthcare Operations with Virtual Assistants
          </h2>

          <p className="mb-6">
            Partner with SkyKorg Healthcare to improve productivity,
            reduce operational costs, and enhance patient care.
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