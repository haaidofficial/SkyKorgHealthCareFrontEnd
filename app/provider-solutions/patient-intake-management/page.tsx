import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Patient Intake Management Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides digital patient intake management solutions that streamline registration, reduce administrative workload, and improve healthcare revenue cycle efficiency."
};

export default function PatientIntakePage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Patient Intake Management Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Comprehensive Patient Intake Solutions
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            Streamline your healthcare practice with SkyKorg Healthcare’s
            advanced patient intake solutions designed to improve workflow
            efficiency, patient satisfaction, and revenue cycle performance.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* MAIN CONTENT */}
          <article className="lg:col-span-2 space-y-12">

            {/* Intro */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Modern Patient Intake Management
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Patient intake is the foundation of an efficient healthcare
                workflow. Accurate patient information, insurance details,
                and medical history must be collected before treatment begins
                to ensure smooth clinical operations and successful billing.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                SkyKorg Healthcare provides digital patient intake solutions
                that streamline administrative tasks, improve data accuracy,
                and enhance the overall patient experience.
              </p>
            </section>

            {/* Challenges */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Why Traditional Patient Intake Processes Struggle
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ Excessive paperwork and manual documentation</li>
                <li>✔ Increased chances of data entry errors</li>
                <li>✔ Long patient wait times</li>
                <li>✔ Administrative inefficiencies</li>
                <li>✔ Difficulty maintaining accurate patient records</li>
              </ul>
            </section>

            {/* Solutions */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                How Our Patient Intake Solutions Help
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Our patient intake solutions automate the registration
                process and integrate seamlessly with electronic health
                record (EHR) systems to reduce manual tasks and improve
                operational efficiency.
              </p>

              <ul className="space-y-3 text-gray-700 mt-4">
                <li>✔ Digital patient registration forms</li>
                <li>✔ Insurance eligibility verification</li>
                <li>✔ Secure patient data management</li>
                <li>✔ EHR and practice management integration</li>
                <li>✔ Automated appointment scheduling</li>
              </ul>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Benefits of Optimized Patient Intake
              </h2>

              <p className="text-gray-700 leading-relaxed">
                A streamlined patient intake system benefits healthcare
                providers, staff, and patients by improving operational
                efficiency and ensuring accurate documentation.
              </p>

              <ul className="space-y-3 text-gray-700 mt-4">
                <li>✔ Faster patient registration process</li>
                <li>✔ Reduced administrative workload</li>
                <li>✔ Improved billing accuracy</li>
                <li>✔ Better patient experience</li>
                <li>✔ Improved revenue cycle performance</li>
              </ul>
            </section>

            {/* Why Choose */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>✔ 15+ years healthcare industry experience</li>
                <li>✔ HIPAA compliant patient data management</li>
                <li>✔ Seamless EHR integration</li>
                <li>✔ Custom workflow automation</li>
                <li>✔ Dedicated support team</li>
              </ul>
            </section>

          </article>

          {/* SIDEBAR */}
          <aside className="space-y-8">

            {/* CTA */}
            <div className="bg-orange-500 text-white p-6 rounded-lg shadow">

              <h3 className="font-semibold text-lg mb-3">
                How Can We Help?
              </h3>

              <p className="text-sm mb-4">
                Improve your practice workflow with our advanced patient
                intake management solutions.
              </p>

              <Link
                href="/contact"
                className="block bg-black text-white text-center py-2 rounded"
              >
                Schedule a Call
              </Link>

            </div>

            {/* Advantage */}
            <div className="bg-white p-6 rounded-lg shadow">

              <h3 className="font-semibold mb-4">
                SkyKorg Advantage
              </h3>

              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✔ 99.9% Data Accuracy</li>
                <li>✔ HIPAA Compliant Systems</li>
                <li>✔ Dedicated Support</li>
                <li>✔ Seamless EHR Integration</li>
              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Streamline Patient Intake and Improve Workflow
          </h2>

          <p className="mb-6">
            Partner with SkyKorg Healthcare to implement efficient patient
            intake solutions that enhance operational efficiency and
            improve patient satisfaction.
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