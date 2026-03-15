import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function ClinicalDocumentationServices() {
  return (
    <main>

      {/* HERO */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/provider-banner.jpg"
            alt="Clinical Documentation Services"
            fill
            className="object-cover opacity-40"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold max-w-3xl">
            Customized Clinical Documentation Services: Sun Knowledge Inc
          </h1>

          <div className="w-16 h-1 bg-yellow-500 mt-4"></div>
        </div>
      </section>


      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-8 text-gray-700">

          <p>
            Missing medical documentation and coding issues are some of the most
            prevalent contributors to claim rejections in healthcare organizations.
            Improving clinical documentation ensures higher revenue accuracy and
            better healthcare compliance.
          </p>

          <ul className="space-y-3">
            <li className="flex gap-3">
              <CheckCircleIcon className="w-5 text-yellow-500"/>
              Challenges adapting to different EMR platforms
            </li>

            <li className="flex gap-3">
              <CheckCircleIcon className="w-5 text-yellow-500"/>
              Missing treatment information and incorrect documentation
            </li>

            <li className="flex gap-3">
              <CheckCircleIcon className="w-5 text-yellow-500"/>
              Finding experienced resources and technology expertise
            </li>
          </ul>


          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Ensure Accurate Clinical Documentation Services With Us
            </h2>

            <p>
              Our Clinical Documentation Improvement (CDI) services are designed
              to improve coding accuracy and enhance clinical data quality across
              healthcare organizations.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 text-yellow-500"/>
                DRG validation and coding accuracy improvement
              </li>

              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 text-yellow-500"/>
                Procedural and diagnosis coding optimization
              </li>

              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 text-yellow-500"/>
                Documentation of patient safety indicators
              </li>

              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 text-yellow-500"/>
                Hospital acquired conditions documentation
              </li>
            </ul>
          </div>


          {/* SERVICES */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Services Extended in Clinical Documentation
            </h3>

            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 text-yellow-500"/>
                Simultaneous review of medical records
              </li>

              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 text-yellow-500"/>
                Clarifications and corrections in coding queries
              </li>

              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 text-yellow-500"/>
                Follow-ups on delayed physician queries
              </li>

              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 text-yellow-500"/>
                Resolving DRG discrepancies
              </li>

              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 text-yellow-500"/>
                Physician education on documentation practices
              </li>
            </ul>
          </div>


          {/* BENEFITS */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Benefits of Our Clinical Documentation Integrity Services
            </h2>

            <p>
              Our services help healthcare organizations reduce operational
              expenses, streamline documentation workflows and improve
              reimbursement accuracy.
            </p>

            <ul className="mt-6 space-y-3">

              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 text-yellow-500"/>
                Improved documentation workflows
              </li>

              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 text-yellow-500"/>
                Faster reimbursement cycles
              </li>

              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 text-yellow-500"/>
                Reduced claim denials
              </li>

              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 text-yellow-500"/>
                Better regulatory compliance
              </li>

            </ul>
          </div>

        </div>


        {/* SIDEBAR */}
        <aside className="space-y-6">

          <div className="bg-yellow-400 p-6 border-2 border-black text-center">

            <h3 className="font-bold text-lg mb-4">
              The SunKnowledge Advantage
            </h3>

            <ul className="space-y-3 text-sm font-medium">
              <li>We will meet or beat any price</li>
              <li>80% Cost Reduction Guaranteed</li>
              <li>99.9% Accuracy</li>
              <li>100's of References</li>
            </ul>

          </div>

        </aside>

      </section>


      {/* CTA */}
      <section className="bg-yellow-500 py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          <h3 className="font-semibold">
            Are You Looking For Streamlined Medical Billing Assistance?
          </h3>

          <Link
            href="/contact"
            className="bg-black text-white px-6 py-3 text-sm font-semibold"
          >
            Request A Demo →
          </Link>

        </div>
      </section>


      {/* CONTACT */}
      <section className="bg-black text-white py-16">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          <div>
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>

            <p className="text-gray-300">
              Let us know about your areas of interest and connect with us
              to enhance your revenue cycle management experience.
            </p>
          </div>

          {/* FORM */}
          <form className="grid grid-cols-2 gap-4">

            <input placeholder="Name*" className="p-3 text-black"/>
            <input placeholder="How did you hear about us*" className="p-3 text-black"/>

            <input placeholder="Email*" className="p-3 text-black"/>
            <textarea placeholder="Message*" className="p-3 text-black"></textarea>

            <input placeholder="Phone Number*" className="p-3 text-black"/>

            <select className="p-3 text-black">
              <option>What are you interested in?</option>
            </select>

            <button className="bg-yellow-500 text-black px-6 py-3 font-semibold col-span-2">
              Submit →
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}