export default function WhySkyKorg() {
  return (
    <section className="relative py-12 bg-gray-50 overflow-hidden">

      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/images/WhyChhose-bg.jpg')",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Why SkyKorg HealthCare
          </h2>

          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mt-8">

          {/* Image */}
          <div className="relative">
            <img
              src="assets/images/healthcare-team.jpg"
              alt="Healthcare Team"
              className="rounded-xl shadow-xl"
            />

            {/* Decorative Border */}
            
          </div>

          {/* Text Content */}
          <div>

            <h3 className="text-2xl font-semibold text-white mb-6">
              Trusted Partner in Healthcare Outsourcing
            </h3>

            <p className="leading-relaxed text-white mb-6">
              SkyKorg HealthCare is a trusted Revenue Cycle Management (RCM)
              partner providing end-to-end healthcare outsourcing solutions
              across pre-billing, mid-cycle, and post-billing operations.
            </p>

            <p className="leading-relaxed text-white mb-8">
              Our services include Prior Authorization, Medical Billing,
              Coding, Accounts Receivable follow-ups, Denial Management,
              and Virtual Medical Assistance designed to help healthcare
              providers streamline operations and maximize revenue.
            </p>

            {/* Key Points */}
            <ul className="space-y-3 mb-8 text-white">
              <li>✔ End-to-End Revenue Cycle Management</li>
              <li>✔ Faster Claims Processing & Collections</li>
              <li>✔ Experienced Medical Billing Specialists</li>
              <li>✔ Support Across Multiple EHR Systems</li>
            </ul>

            {/* Button */}
            <a
              href="#"
              className="inline-block px-7 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition duration-300"
            >
              Explore Services
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}