import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Utilization Management Services | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides comprehensive utilization management services including pre-authorization, concurrent review, and retrospective review to ensure medical necessity, compliance, and cost control."
};

export default function UtilizationManagementPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/payer-solutions/payer-hero.jpg"
            alt="Utilization Management Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold max-w-3xl">
            Utilization Management Services for Improved Care and Compliance
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
              SkyKorg Healthcare provides advanced utilization management
              services designed to ensure that healthcare services are
              medically necessary, cost-effective, and compliant with payer
              guidelines. Our utilization review specialists help healthcare
              organizations manage treatment approvals, optimize resource
              utilization, and improve operational efficiency.
            </p>

            <p>
              By combining clinical expertise with operational oversight,
              SkyKorg Healthcare supports healthcare payers and providers in
              delivering quality care while controlling healthcare costs and
              maintaining regulatory compliance.
            </p>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                What is Utilization Management?
              </h2>

              <p>
                Utilization management is a proactive healthcare process that
                evaluates whether medical services and treatments are
                appropriate, necessary, and aligned with payer policies.
                These reviews ensure that patients receive the right care
                while preventing unnecessary medical procedures and costs.
              </p>

              <p className="mt-4">
                From prior authorization to concurrent and retrospective
                reviews, utilization management plays a key role in
                improving patient outcomes while maintaining financial
                accountability across healthcare systems.
              </p>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Why Utilization Management Is Important
              </h2>

              <ul className="list-disc ml-6 space-y-2">

                <li>
                  Ensures appropriate resource allocation and prevents
                  unnecessary healthcare services.
                </li>

                <li>
                  Maintains compliance with payer policies and regulatory
                  standards.
                </li>

                <li>
                  Reduces claim denials through accurate medical necessity
                  verification.
                </li>

                <li>
                  Improves patient care by ensuring treatments follow
                  evidence-based guidelines.
                </li>

                <li>
                  Helps healthcare organizations manage costs effectively.
                </li>

              </ul>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Types of Utilization Management Reviews
              </h2>

              <ul className="list-disc ml-6 space-y-3">

                <li>
                  <strong>Prospective Review:</strong> Conducted before a
                  treatment begins to verify medical necessity and obtain
                  prior authorization.
                </li>

                <li>
                  <strong>Concurrent Review:</strong> Performed during the
                  course of treatment to ensure that care remains appropriate
                  and aligned with payer guidelines.
                </li>

                <li>
                  <strong>Retrospective Review:</strong> Conducted after
                  services are provided to evaluate treatment outcomes and
                  determine claim validity.
                </li>

              </ul>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Benefits of Outsourcing Utilization Management
              </h2>

              <ul className="list-disc ml-6 space-y-2">

                <li>
                  Reduced administrative burden for healthcare providers
                  and payers.
                </li>

                <li>
                  Faster authorization approvals and improved workflow
                  efficiency.
                </li>

                <li>
                  Improved compliance with payer and regulatory guidelines.
                </li>

                <li>
                  Technology-driven review processes that improve
                  operational accuracy.
                </li>

                <li>
                  Enhanced revenue cycle management through fewer claim
                  rejections.
                </li>

              </ul>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare?
              </h2>

              <ul className="list-disc ml-6 space-y-2">

                <li>Experienced utilization management specialists.</li>

                <li>Streamlined prior authorization workflows.</li>

                <li>Advanced analytics and reporting capabilities.</li>

                <li>Compliance with healthcare payer regulations.</li>

                <li>Scalable solutions for healthcare organizations.</li>

              </ul>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Start Optimizing Your Utilization Management Process
              </h2>

              <p>
                SkyKorg Healthcare helps healthcare organizations enhance
                operational efficiency through streamlined utilization
                management services. Our experienced teams support
                authorization reviews, compliance monitoring, and
                data-driven decision-making to improve both patient
                outcomes and financial performance.
              </p>

            </div>

          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">

            <div className="bg-orange-500 p-8 text-white">

              <h3 className="text-xl font-semibold mb-4">
                Need Utilization Management Support?
              </h3>

              <p className="mb-6">
                Optimize treatment approvals and reduce administrative
                workload with SkyKorg Healthcare.
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

                <li>✔ 99%+ accuracy in review processes</li>
                <li>✔ Faster prior authorization approvals</li>
                <li>✔ Reduced operational costs</li>
                <li>✔ Regulatory compliance expertise</li>
                <li>✔ Experienced clinical reviewers</li>

              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Looking for Expert Utilization Management Services?
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