import {
  UserGroupIcon,
  BuildingOffice2Icon,
  ShieldCheckIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";

export default function HealthcareHighlights() {
  const items = [
    {
      icon: UserGroupIcon,
      title: "SOLUTIONS FOR PROVIDERS",
      desc: "Discover comprehensive Revenue Cycle Management services including Prior Authorization, Medical Coding, Claims Management, and Accounts Receivable follow-ups to maximize provider revenue."
    },
    {
      icon: BuildingOffice2Icon,
      title: "SOLUTIONS FOR FACILITIES",
      desc: "Reduce operational costs and improve efficiency with trained Virtual Medical Assistants and healthcare back-office support tailored for clinics, medical centers, and hospitals."
    },
    {
      icon: ShieldCheckIcon,
      title: "SOLUTIONS FOR PAYERS",
      desc: "Our payer solutions include Claims Adjudication, Document Management, Credentialing, and healthcare customer support designed to streamline payer operations."
    },
    {
      icon: MapPinIcon,
      title: "FACILITIES WE CATER TO",
      desc: "SkyKorg HealthCare supports Independent Practices, Specialty Clinics, Medical Centers, Nursing Homes, and Hospitals with scalable healthcare outsourcing solutions."
    }
  ];

  return (
    <section className="mt-4 md:-mt-[200px] z-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group p-4 bg-white shadow-sm text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-orange-50 group-hover:bg-orange-500 transition">
                    <Icon className="w-8 h-8 text-orange-500 group-hover:text-white" />
                  </div>
                </div>

                <h3 className="text-lg font-bold tracking-wide text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-6">
                  <a
                    href="#"
                    className="text-blue-600 text-sm font-semibold hover:underline"
                  >
                    read more →
                  </a>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}