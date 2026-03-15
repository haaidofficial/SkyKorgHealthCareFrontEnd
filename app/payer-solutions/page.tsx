import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

import {
  DocumentTextIcon,
  UserGroupIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  PhoneIcon,
  LightBulbIcon,
  IdentificationIcon
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Payor Solutions | SkyKorg Healthcare",
  description:
    "SkyKorg Healthcare provides payor solutions including claim processing, adjudication, member enrollment, analytics, and utilization management."
};

const services = [
  {
    title: "Claim Processing",
    icon: Cog6ToothIcon,
    desc: "Efficient insurance claim processing solutions designed to improve operational workflows."
  },
  {
    title: "Claim Adjudication",
    icon: DocumentTextIcon,
    desc: "Accurate claim adjudication services ensuring streamlined payer operations."
  },
  {
    title: "Member Enrollment",
    icon: UserGroupIcon,
    desc: "Efficient enrollment services that enhance member experience and satisfaction."
  },
  {
    title: "Data Management & Analytics",
    icon: ChartBarIcon,
    desc: "Advanced healthcare analytics providing insights for better decision making."
  },
  {
    title: "Documentation",
    icon: ClipboardDocumentListIcon,
    desc: "Comprehensive documentation solutions that improve operational efficiency."
  },
  {
    title: "Billing & Collections",
    icon: CurrencyDollarIcon,
    desc: "Reliable billing and collections services that optimize financial outcomes."
  },
  {
    title: "Provider Credentialing",
    icon: IdentificationIcon,
    desc: "Credentialing services that ensure providers meet healthcare industry standards."
  },
  {
    title: "Utilization Management",
    icon: ShieldCheckIcon,
    desc: "Optimized utilization management solutions that improve healthcare efficiency."
  },
  {
    title: "Customer Care",
    icon: PhoneIcon,
    desc: "Dedicated healthcare customer support delivering seamless service experiences."
  },
  {
    title: "Other Payor Solutions",
    icon: LightBulbIcon,
    desc: "Tailored payer services designed to improve engagement and operational efficiency."
  }
];

export default function payersolutions() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Payor Solutions"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Payor Solutions
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

        </div>

      </section>

      {/* INTRO */}
      <section className="py-16">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-gray-700 leading-relaxed">
            SkyKorg Healthcare offers comprehensive payor solutions
            designed to streamline healthcare insurance processes,
            improve efficiency, and deliver accurate claim processing
            and member management services.
          </p>

        </div>

      </section>

      {/* SERVICES GRID */}
      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl font-semibold text-center mb-14">
            Services That We Cater
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition p-8 text-center"
                >

                  <div className="flex justify-center mb-4">
                    <Icon className="w-10 h-10 text-orange-500" />
                  </div>

                  <h3 className="font-semibold text-lg mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {service.desc}
                  </p>

                </div>
              );
            })}

          </div>

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

      <EnquiryForm />

    </main>
  );
}