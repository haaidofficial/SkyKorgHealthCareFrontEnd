import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Healthcare Customer Support Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides dedicated healthcare customer support services including patient communication, appointment scheduling, billing support, and medical records assistance."
};

export default function CustomerSupportPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Healthcare Customer Support Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold max-w-3xl">
            Healthcare Customer Support Services for Better Patient Engagement
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
              SkyKorg Healthcare offers comprehensive healthcare customer
              support services designed to improve patient engagement and
              operational efficiency for healthcare providers. Our dedicated
              support teams help medical practices manage patient
              communications, administrative tasks, and service coordination
              while ensuring a high level of patient satisfaction.
            </p>

            <p>
              As healthcare organizations continue to grow, managing patient
              inquiries and administrative responsibilities can become
              challenging. SkyKorg Healthcare provides scalable customer
              support solutions that allow healthcare providers to focus on
              delivering quality care while we handle operational support.
            </p>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                The Importance of Healthcare Customer Support
              </h2>

              <p>
                Effective customer support is essential for building strong
                relationships with patients. From handling appointment
                requests to addressing billing questions, responsive
                communication improves patient trust and satisfaction.
              </p>

              <p className="mt-4">
                A patient-centered support system ensures that healthcare
                organizations can maintain consistent service quality while
                improving operational efficiency and reputation.
              </p>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Key Benefits of Healthcare Customer Support
              </h2>

              <ul className="list-disc ml-6 space-y-2">

                <li>
                  Improved patient satisfaction through responsive and
                  professional communication.
                </li>

                <li>
                  Reduced administrative workload for healthcare staff.
                </li>

                <li>
                  Faster patient query resolution and appointment
                  management.
                </li>

                <li>
                  Better patient retention and long-term engagement.
                </li>

                <li>
                  Efficient coordination between patients and healthcare
                  providers.
                </li>

              </ul>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare Customer Support?
              </h2>

              <ul className="list-disc ml-6 space-y-2">

                <li>
                  Patient-centric communication handled by trained support
                  professionals.
                </li>

                <li>
                  Deep expertise in healthcare workflows and patient
                  engagement.
                </li>

                <li>
                  24/7 support availability for patient assistance.
                </li>

                <li>
                  Seamless integration with healthcare practice
                  management systems.
                </li>

                <li>
                  Secure processes that comply with healthcare data
                  protection standards.
                </li>

              </ul>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Our Healthcare Customer Support Services
              </h2>

              <ul className="list-disc ml-6 space-y-2">

                <li>Patient appointment scheduling and coordination.</li>

                <li>Patient communication via phone, email, and chat.</li>

                <li>Billing and insurance inquiry assistance.</li>

                <li>Medical records management and documentation support.</li>

                <li>Prior authorization coordination.</li>

                <li>Telehealth scheduling and support.</li>

                <li>Patient follow-ups and reminder calls.</li>

                <li>Medical documentation and chart preparation.</li>

              </ul>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                HIPAA-Compliant Customer Support Services
              </h2>

              <p>
                SkyKorg Healthcare strictly follows HIPAA compliance
                standards to ensure the privacy and security of patient
                data. Our support teams are trained in healthcare data
                protection protocols, ensuring that patient information
                is handled securely and responsibly at all times.
              </p>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Transform Your Healthcare Customer Experience
              </h2>

              <p>
                Partner with SkyKorg Healthcare to deliver exceptional
                patient support services. Our experienced teams help
                healthcare organizations streamline operations,
                improve patient communication, and create a more
                patient-centered care environment.
              </p>

            </div>

          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">

            <div className="bg-orange-500 p-8 text-white">

              <h3 className="text-xl font-semibold mb-4">
                Need Healthcare Support Services?
              </h3>

              <p className="mb-6">
                Improve patient engagement and streamline operations
                with SkyKorg Healthcare.
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

                <li>✔ 24/7 patient support services</li>
                <li>✔ Trained healthcare support teams</li>
                <li>✔ Improved patient satisfaction</li>
                <li>✔ HIPAA compliant operations</li>
                <li>✔ Scalable support solutions</li>

              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Looking for Reliable Healthcare Customer Support Services?
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