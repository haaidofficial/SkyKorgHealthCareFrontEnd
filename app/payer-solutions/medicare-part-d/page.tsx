import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Medicare Part D Services for Healthcare Payers | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides Medicare Part D support services including claims evaluation, prescription drug coverage validation, compliance review, and payer-side adjudication assistance."
};

export default function MedicarePartDPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/payer-solutions/payer-hero.jpg"
            alt="Medicare Part D Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold max-w-3xl">
            Medicare Part D Services for Healthcare Payers
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
              Medicare Part D provides prescription drug coverage for
              Medicare beneficiaries and plays a crucial role in ensuring
              patients receive affordable medications. SkyKorg Healthcare
              offers specialized Medicare Part D support services to help
              healthcare payers manage claims efficiently, maintain
              regulatory compliance, and improve operational efficiency.
            </p>

            <p>
              Our experienced teams help evaluate prescription drug claims,
              verify coverage eligibility, and ensure claims are processed
              accurately according to Medicare regulations and payer
              guidelines.
            </p>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Key Facts About Medicare Part D
              </h2>

              <ul className="list-disc ml-6 space-y-2">

                <li>
                  Medicare Part D provides prescription drug coverage for
                  eligible Medicare beneficiaries.
                </li>

                <li>
                  Coverage is typically offered through private insurance
                  plans approved by Medicare.
                </li>

                <li>
                  Beneficiaries must enroll in a Medicare Part D plan to
                  receive prescription drug benefits.
                </li>

                <li>
                  Coverage varies depending on the plan formulary and
                  approved medications list.
                </li>

                <li>
                  Enrollment periods are regulated and typically occur
                  annually.
                </li>

              </ul>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Categories of Drugs Covered Under Medicare Part D
              </h2>

              <ul className="list-disc ml-6 space-y-2">

                <li>HIV medications</li>

                <li>Antidepressants</li>

                <li>Cancer treatment medications</li>

                <li>Immunosuppressants</li>

                <li>Anticonvulsants</li>

                <li>Antipsychotics</li>

              </ul>

              <p className="mt-4">
                Coverage lists may change depending on the formulary updates,
                introduction of new medications, or availability of generic
                alternatives.
              </p>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Prescription Drugs Not Covered by Medicare Part D
              </h2>

              <p>
                Certain over-the-counter medications and non-essential
                treatments are generally excluded from Medicare Part D
                coverage.
              </p>

              <ul className="list-disc ml-6 space-y-2 mt-3">

                <li>Dietary supplements</li>

                <li>Vitamins</li>

                <li>Weight-loss medications</li>

                <li>Cosmetic-related medications</li>

              </ul>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Medicare Part D Claims Evaluation Services
              </h2>

              <p>
                SkyKorg Healthcare assists healthcare payers in reviewing
                Medicare Part D claims to ensure compliance with CMS
                guidelines. Our specialists carefully evaluate prescription
                drug claims to confirm accuracy, validate patient
                information, and ensure appropriate billing codes are used.
              </p>

              <p className="mt-4">
                During claims evaluation, we verify the claim details and
                determine the appropriate outcome based on payer policies.
              </p>

              <ul className="list-disc ml-6 space-y-2 mt-4">

                <li>Approve the claim for payment</li>

                <li>Adjust the reimbursement amount</li>

                <li>Deny claims that do not meet eligibility criteria</li>

              </ul>

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Why Choose SkyKorg Healthcare?
              </h2>

              <ul className="list-disc ml-6 space-y-2">

                <li>Experienced Medicare claims processing specialists.</li>

                <li>Compliance with CMS and Medicare regulations.</li>

                <li>Accurate prescription claim evaluation.</li>

                <li>Improved operational efficiency for healthcare payers.</li>

                <li>Scalable support for high claim volumes.</li>

              </ul>

            </div>

          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">

            <div className="bg-orange-500 p-8 text-white">

              <h3 className="text-xl font-semibold mb-4">
                Need Medicare Part D Support?
              </h3>

              <p className="mb-6">
                Streamline prescription drug claims processing with
                SkyKorg Healthcare.
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

                <li>✔ Medicare compliance expertise</li>
                <li>✔ Accurate claims review</li>
                <li>✔ Faster claim adjudication</li>
                <li>✔ Reduced operational costs</li>
                <li>✔ Experienced healthcare specialists</li>

              </ul>

            </div>

          </aside>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            Looking for Medicare Part D Claims Support?
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