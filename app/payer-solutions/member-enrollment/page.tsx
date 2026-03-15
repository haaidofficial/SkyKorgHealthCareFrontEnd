import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Member Enrollment and Eligibility Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides accurate member enrollment and eligibility services for healthcare payers ensuring efficient data capture and compliance."
};

export default function MemberEnrollmentPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Member Enrollment Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold max-w-3xl">
            Member Enrollment and Eligibility Services
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-8 text-gray-700">

            <p>
              SkyKorg Healthcare understands the importance of accurate
              and timely enrollment data management. Our team uses
              advanced technology and deep industry expertise to manage
              member enrollment processes efficiently.
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>
                Capture enrollment data from multiple sources including
                electronic submissions and paper forms.
              </li>

              <li>
                Streamlined enrollment workflows ensuring members and
                groups are enrolled within the agreed timeline.
              </li>

              <li>
                Accurate data management to support healthcare payer
                operations.
              </li>
            </ul>


            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Member Enrollment and Services With Eligibility
              </h2>

              <p className="mb-4">
                Our enrollment and eligibility services help payers
                maintain accurate member records and streamline their
                enrollment processes.
              </p>

              <ul className="list-disc ml-6 space-y-2">

                <li>
                  <strong>Timely Enrollment:</strong> Ensuring members and
                  groups are enrolled within agreed timelines with
                  complete verification.
                </li>

                <li>
                  <strong>ID Card Issuance:</strong> Providing members
                  with ID cards to ensure smooth healthcare access.
                </li>

                <li>
                  <strong>Terminations and Changes:</strong> Managing
                  additions, deletions, and changes to member records.
                </li>

                <li>
                  <strong>Enrollment Materials:</strong> Delivering
                  accurate enrollment documentation to members.
                </li>

              </ul>

            </div>


            <div>

              <h3 className="text-xl font-semibold mb-3">
                SkyKorg Value Proposition
              </h3>

              <p className="mb-4">
                Partnering with SkyKorg Healthcare for member enrollment
                services ensures operational efficiency, improved data
                accuracy, and seamless member management.
              </p>

              <ul className="list-disc ml-6 space-y-2">

                <li>
                  Proven expertise working with both payers and
                  providers.
                </li>

                <li>
                  Accurate eligibility data capture reducing operational
                  disruptions.
                </li>

                <li>
                  Quick turnaround times for group and member
                  installations.
                </li>

                <li>
                  Improved member satisfaction through efficient
                  enrollment workflows.
                </li>

              </ul>

            </div>

          </div>


          {/* SIDEBAR */}
          <aside>

            <div className="bg-orange-500 text-white p-8 mb-6">

              <h3 className="text-xl font-semibold mb-4">
                How Can We Help?
              </h3>

              <p className="mb-6">
                Transform your Revenue Cycle with expert healthcare
                outsourcing support.
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

                <li>✔ Competitive pricing</li>
                <li>✔ Up to 80% cost reduction</li>
                <li>✔ 99.9% accuracy</li>
                <li>✔ Trusted industry references</li>

              </ul>

            </div>

          </aside>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Are You Looking for Streamlined Medical Billing Assistance?
          </h2>

          <Link
            href="/contact"
            className="bg-black px-8 py-3 rounded"
          >
            Request a Demo
          </Link>

        </div>

      </section>


      {/* FORM */}
      <EnquiryForm />

    </main>
  );
}