import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Healthcare Data Analytics and Management Solutions | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare offers actionable healthcare data analytics and management solutions to help payers optimize performance and improve financial outcomes."
};

export default function DataAnalyticsPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Healthcare Data Analytics Solutions"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold max-w-3xl">
            Actionable Healthcare Data Analytics and Management Solutions
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

        </div>

      </section>


      {/* CONTENT */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-8 text-gray-700">

            <p>
              Improving patient outcomes and provider experience requires
              optimized healthcare data analytics and management
              processes. By leveraging powerful data analytics tools,
              payers gain valuable insights into patient populations and
              operational performance.
            </p>

            <p>
              SkyKorg Healthcare provides comprehensive data analytics
              and management solutions designed to help payers analyze,
              organize, and optimize their healthcare data.
            </p>


            {/* BENEFITS */}
            <div>

              <h2 className="text-2xl font-semibold mb-4">
                The Benefits of Healthcare Data Management and Analytics
              </h2>

              <ul className="list-disc ml-6 space-y-2">

                <li>
                  Creating personalized healthcare opportunities
                </li>

                <li>
                  Improving care management quality
                </li>

                <li>
                  Supporting healthier populations through data insights
                </li>

                <li>
                  Better understanding member needs
                </li>

                <li>
                  Identifying automation opportunities to reduce costs
                </li>

              </ul>

            </div>


            <p>
              SkyKorg Healthcare helps payers automate and optimize data
              management processes, ensuring better operational
              efficiency and improved decision-making.
            </p>


            {/* PERFORMANCE */}
            <div>

              <h2 className="text-2xl font-semibold mb-4">
                Optimize Your Data Analytics and Management Performance
              </h2>

              <p className="mb-4">
                Our experts manage multiple forms of healthcare data,
                including:
              </p>

              <ul className="list-disc ml-6 space-y-2">

                <li>Clinical Data</li>

                <li>Financial Data</li>

                <li>Socioeconomic Data</li>

              </ul>

              <p className="mt-4">
                Using advanced analytics, we help payers reduce risk,
                improve operational performance, and enhance customer
                satisfaction.
              </p>


              <ul className="list-disc ml-6 space-y-2 mt-4">

                <li>Data content management</li>

                <li>Quality assurance</li>

                <li>Data ownership governance</li>

                <li>Security and provisioning</li>

              </ul>

            </div>


            <p>
              Our healthcare analytics solutions provide measurable
              improvements in payer performance and support better
              decision-making for member care and operational efficiency.
            </p>

          </div>


          {/* SIDEBAR */}
          <aside className="space-y-6">

            <div className="bg-orange-500 text-white p-8">

              <h3 className="text-xl font-semibold mb-4">
                How Can We Help?
              </h3>

              <p className="mb-6">
                Transform your Revenue Cycle with our expert healthcare
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


      {/* ENQUIRY FORM */}
      <EnquiryForm />

    </main>
  );
}