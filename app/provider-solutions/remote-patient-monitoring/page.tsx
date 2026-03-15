import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Remote Patient Monitoring Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides Remote Patient Monitoring (RPM) services that help healthcare providers monitor patient vitals, improve patient outcomes, and reduce hospital readmissions."
};

export default function RemotePatientMonitoringPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Remote Patient Monitoring Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Remote Patient Monitoring Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg Healthcare provides advanced Remote Patient Monitoring
            (RPM) services that enable healthcare providers to track
            patient health data remotely and deliver timely medical
            interventions.
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
                What is Remote Patient Monitoring (RPM)?
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Remote Patient Monitoring allows healthcare providers to
                monitor patient health conditions outside traditional
                healthcare settings using digital devices and connected
                monitoring tools.
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                RPM solutions help physicians track vital signs, detect
                early health risks, and provide proactive care to improve
                patient outcomes.
              </p>

            </section>

            {/* BENEFITS */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Benefits of Remote Patient Monitoring
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Continuous patient health monitoring</li>
                <li>✔ Reduced hospital readmissions</li>
                <li>✔ Improved chronic disease management</li>
                <li>✔ Better patient engagement</li>
                <li>✔ Timely medical interventions</li>

              </ul>

            </section>

            {/* SERVICES */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Vital Signs Monitored Through RPM
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ Electrocardiogram (EKG)</li>
                <li>✔ Pulse rate</li>
                <li>✔ Blood glucose levels</li>
                <li>✔ Blood pressure</li>
                <li>✔ Oxygen saturation</li>
                <li>✔ Body temperature</li>

              </ul>

            </section>

            {/* DEVICES */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Remote Monitoring Devices
              </h2>

              <p className="text-gray-700 leading-relaxed">
                SkyKorg Healthcare provides a range of RPM devices that
                collect patient health data and securely transmit it to
                healthcare providers for review and monitoring.
              </p>

              <ul className="space-y-3 text-gray-700 mt-4">

                <li>✔ All-in-one health monitoring devices</li>
                <li>✔ Blood glucose monitors</li>
                <li>✔ Digital blood pressure monitors</li>
                <li>✔ Temperature monitoring devices</li>
                <li>✔ Pulse oximeters</li>

              </ul>

            </section>

            {/* PROCESS */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                How Our RPM Services Work
              </h2>

              <ol className="space-y-3 text-gray-700 list-decimal pl-5">

                <li>Patient enrollment into RPM program</li>
                <li>Installation of monitoring devices</li>
                <li>Continuous health data collection</li>
                <li>Secure transmission of patient vitals</li>
                <li>Clinical monitoring and alerts for physicians</li>

              </ol>

            </section>

            {/* WHY SKYKORG */}
            <section>

              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✔ HIPAA compliant monitoring solutions</li>
                <li>✔ Secure healthcare data transmission</li>
                <li>✔ Advanced monitoring technologies</li>
                <li>✔ Dedicated healthcare support teams</li>
                <li>✔ Scalable RPM solutions</li>

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
                Improve patient outcomes and streamline healthcare
                monitoring with SkyKorg Healthcare RPM services.
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
                <li>✔ HIPAA compliant RPM solutions</li>
                <li>✔ Advanced monitoring devices</li>
                <li>✔ Secure healthcare data management</li>
                <li>✔ Improved patient care delivery</li>
              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Transform Patient Care with Remote Monitoring
          </h2>

          <p className="mb-6">
            Partner with SkyKorg Healthcare to implement advanced Remote
            Patient Monitoring solutions that improve healthcare
            outcomes.
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