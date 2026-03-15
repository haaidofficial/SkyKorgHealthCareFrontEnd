import Image from "next/image";
import {
  BriefcaseIcon,
  LinkIcon,
  DocumentCheckIcon,
  UsersIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata = {
  title: "Contact SkyKorg Healthcare",
  description:
    "Get started with SkyKorg Healthcare solutions. Contact our team for healthcare outsourcing, RCM services, and medical billing solutions."
};

export default function ContactPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/contact-hero.jpg"
            alt="Contact SkyKorg Healthcare"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Get Started Here
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

        </div>

      </section>

      {/* TRUST FEATURES */}
      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-8 text-center">

          <div>
            <BriefcaseIcon className="w-10 h-10 mx-auto text-orange-500 mb-2" />
            <p className="font-semibold">30+ Specialties</p>
          </div>

          <div>
            <LinkIcon className="w-10 h-10 mx-auto text-orange-500 mb-2" />
            <p className="font-semibold">Free 30-Day Transition</p>
          </div>

          <div>
            <DocumentCheckIcon className="w-10 h-10 mx-auto text-orange-500 mb-2" />
            <p className="font-semibold">No Binding Contracts</p>
          </div>

          <div>
            <UsersIcon className="w-10 h-10 mx-auto text-orange-500 mb-2" />
            <p className="font-semibold">Top References</p>
          </div>

          <div>
            <CurrencyDollarIcon className="w-10 h-10 mx-auto text-orange-500 mb-2" />
            <p className="font-semibold">$7 per Hour</p>
          </div>

        </div>

      </section>

      {/* MAIN CONTENT */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* LEFT CONTENT */}
          <div>

            <h2 className="text-2xl font-semibold mb-4">
              We Are Glad To See You Here!
            </h2>

            <p className="text-gray-600 mb-6">
              A comprehensive range of solutions in practice management
              awaits you at SkyKorg Healthcare. Let us help you reduce
              denials, increase collections, and streamline your
              healthcare operations.
            </p>

            {/* TESTIMONIAL */}
            <div className="bg-gray-100 p-8 border-l-4 border-orange-500">

              <div className="flex items-center gap-4 mb-4">

                <Image
                  src="/assets/images/testimonial/kevin.jpg"
                  width={60}
                  height={60}
                  alt="David Collins"
                  className="rounded-full"
                />

                <div>
                  <p className="font-semibold">
                    David Collins
                  </p>

                  <p className="text-sm text-gray-500">
                    Director of Revenue Cycle Management
                  </p>
                </div>

              </div>

              <p className="text-gray-600 italic">
                "SkyKorg Healthcare combines advanced healthcare
                technology with powerful revenue cycle management
                services."
              </p>

            </div>

            {/* CONTACT INFO */}
            <div className="mt-12">

              <h3 className="text-xl font-semibold mb-4">
                Reach Out To Us
              </h3>

              <div className="space-y-4 text-gray-600">

                <div className="flex gap-3">
                  <MapPinIcon className="w-5 text-orange-500" />
                  <p>
                    42 Thatcher drive, Postal code - R3T2L3
                  </p>
                </div>

                <div className="flex gap-3">
                  <PhoneIcon className="w-5 text-orange-500" />
                  <p>+1 (888) 370 5125</p>
                </div>

                <div className="flex gap-3">
                  <EnvelopeIcon className="w-5 text-orange-500" />
                  <p><Link href="mailto: info@skykorghealthcare.com">info@skykorghealthcare.com</Link></p>
                </div>

              </div>

            </div>

          </div>

          {/* CONTACT FORM */}
          <div className="bg-gray-100 p-8">

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Name"
                className="w-full border p-3"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border p-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border p-3"
              />

              <select className="w-full border p-3">
                <option>What are you interested in?</option>
                <option>Medical Billing</option>
                <option>RCM Services</option>
                <option>Virtual Medical Assistant</option>
              </select>

              <textarea
                placeholder="Message"
                rows={5}
                className="w-full border p-3"
              />

              <button
                type="submit"
                className="bg-black text-white px-6 py-3"
              >
                Submit
              </button>

            </form>

          </div>

        </div>

      </section>

     

    </main>
  );
}