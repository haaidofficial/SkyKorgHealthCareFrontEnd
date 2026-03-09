import HeroCarousel from '@/components/HeroCarousel';
import USP from '@/components/USP';
import Clients from '@/components/Clients';
import HealthSpecialties from '@/components/HealthSpecialties';
import WhyChooseUs from '@/components/WhyChooseUs';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import FeaturesSection from '@/components/FeaturesSection';
import Testimonial from '@/components/Testimonial';
import Image from 'next/image';
import { PhoneIcon } from "@heroicons/react/24/solid";
import {
  UserGroupIcon,
  BuildingOffice2Icon,
  ShieldCheckIcon,
  HeartIcon
} from "@heroicons/react/24/outline";
export default function HomePage() {
  return (
    <main>
      <HeroCarousel />
      <USP />
      <section className="py-16 z-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center">
          {/* LEFT IMAGE AREA */}
          <div className="relative w-fit">
            {/* Border Frame */}
            <div className="absolute -top-6 -right-6 w-[420px] h-[520px] border-4 border-green-600"></div>
            {/* Main Image */}
            <div className="relative z-10 w-[420px]">
              <Image
                src="/assets/images/about-us.jpg"
                alt="Healthcare"
                width={420}
                height={520}
                className="object-cover h-[520px]"
              />
            </div>

            {/* Small Video Thumbnail */}
            <div className="absolute -bottom-12 right-[-80px] w-[220px] shadow-2xl z-20">
              <Image
                src="/assets/images/about-thumb.jpg"
                alt="Video"
                width={220}
                height={150}
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className='w-full'>
            <span className="text-orange-500 uppercase text-sm tracking-widest text-gray-400">
              ABOUT TO SKYKORG HEALTHCARE
            </span>
            <h2 className="text-4xl font-bold mt-2 leading-tight">
              Trusted Partner in Healthcare Revenue Cycle Management
            </h2>
            <p className="mt-6 leading-relaxed">
              SkyKorg HealthCare is a trusted healthcare outsourcing partner and a leading provider of Revenue Cycle Management (RCM) services delivering end-to-end solutions across pre-billing, mid-cycle and post-billing operations.
            </p>
            {/* Feature List */}
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 bg-green-600 rounded-full"></span>
                <span>Pre-Billing Services: Prior Authorization, Insurance Verification</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 bg-green-600 rounded-full"></span>
                <span>Medical Billing & Coding: Accurate claim submission</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 bg-green-600 rounded-full"></span>
                <span>Accounts Receivable (AR) Management</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 bg-green-600 rounded-full"></span>
                <span>Denial Management & Payment Posting</span>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-10 flex items-center gap-8">
              <a href="#"
                className="font-bold border px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white transition"
              >
                Know More About Us
              </a>

              <div className="flex items-center gap-4">

                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5 text-green-600" />
                </div>

                <div>
                  <div className="text-sm text-gray-800">Or Call us</div>

                  <div className="text-orange-600 font-bold text-lg">
                    <a href="tel:+1 (888) 370 5125">+1 (888) 370 5125</a>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
      <Clients />
      <HealthSpecialties />
      <WhyChooseUs />
      <SpecialtiesSection />
      <FeaturesSection />
      <Testimonial />
    </main>
  );
}
