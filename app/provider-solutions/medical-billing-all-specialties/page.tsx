import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

const specialties = [
  "Acute Care",
  "Ambulatory Services",
  "Anesthesiology",
  "Cardiology",
  "Cosmetic Surgery",
  "Dental Sleep",
  "Dentistry",
  "Dermatology",
  "Durable Medical Equipment (DME)",
  "Emergency Medicine",
  "Endocrinology",
  "Family Practitioners",
  "Fertility",
  "Gastroenterology",
  "Genomic Labs",
  "Home Health Services",
  "Home Medical Equipment (HME)",
  "Hospitals",
  "Immunology",
  "Infusion",
  "Laboratory",
  "Mental Health",
  "Neurology",
  "Neonatology",
  "Obstetrics & Gynecology",
  "Ophthalmology",
  "Oncology",
  "Orthotics & Prosthetics",
  "Pain Management",
  "Pathology",
  "Pediatrics",
  "Pharmacy",
  "Physiatry",
  "Physical Therapy",
  "Physician Practices",
  "Radiology",
  "Retinal Care",
  "Sleep Study",
  "SNF",
  "Urgent Care",
  "Urology"
];

export default function SpecialtiesPage() {
  return (
    <main className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-24 text-white">

        <div className="absolute inset-0">
          <Image
            src="/assets/images/provider-solutions/provider-hero.jpg"
            alt="Medical billing specialties"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-4xl font-bold">
            Medical Billing Specialties
          </h1>

          <div className="w-16 h-1 bg-orange-500 mt-4"></div>

          <p className="mt-6 max-w-3xl text-gray-200">
            SkyKorg HealthCare provides specialized medical billing services
            across multiple healthcare specialties, helping providers improve
            revenue cycle performance and maximize reimbursements.
          </p>

        </div>
      </section>

      {/* SPECIALTIES GRID */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-bold">
              We Provide Top-Tier Services In
            </h2>

            <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>

          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {specialties.map((item, index) => (
              <Link
                key={index}
                href="/provider-solutions"
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex items-center gap-3"
              >

                <span className="text-orange-500 font-bold">•</span>

                <span className="text-gray-700 font-medium">
                  {item}
                </span>

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-14">

        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <h2 className="text-2xl font-semibold">
            Are you looking for streamlined medical billing assistance?
          </h2>

          <Link
            href="/contact"
            className="bg-black px-6 py-3 rounded"
          >
            Request a Demo →
          </Link>

        </div>

      </section>

      {/* CONTACT FORM */}
      <EnquiryForm />

    </main>
  );
}