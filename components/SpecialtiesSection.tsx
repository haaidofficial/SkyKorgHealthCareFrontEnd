import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function MedicalPractices() {

const column1 = [
"Acute Care Billing",
"Ambulatory Services Billing",
"Anesthesiology Billing",
"Cardiology Billing",
"Cosmetic Surgery Billing",
"Dental Sleep Billing",
"Dentistry Billing",
"Dental Billing",
"Dermatology Billing",
"DME Billing",
"Emergency Medicine Billing",
"Endocrinology Billing",
"Family Practitioners Billing",
"Gastroenterology Billing"
];

const column2 = [
"General Surgery Billing",
"Genomic Labs Billing",
"Home Health Billing",
"HME Billing",
"Hospital Billing",
"Immunology Billing",
"Infusion Billing",
"Laboratory Billing",
"Mental Health Billing",
"Neurology Billing",
"Neonatology Billing",
"OBGYN Billing",
"Ophthalmology Billing",
"Oncology Billing"
];

const column3 = [
"Orthotics & Prosthetics",
"Pain Management Billing",
"Pathology Billing",
"Pediatrics Billing",
"Pharmacy Billing",
"Physiatry Billing",
"Physical Therapy Billing",
"Physician Practices Billing",
"Radiology Billing",
"Retinal Care Billing",
"Sleep Study Billing",
"SNF",
"Urgent Care Billing",
"Urology Billing"
];

const renderList = (items) => (
<ul className="space-y-3">
{items.map((item, i) => (
<li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
<CheckCircleIcon className="w-5 h-5 text-orange-500 flex-shrink-0"/>
<span>{item}</span>
</li>
))}
</ul>
);

return (
<section className="relative py-12 bg-gray-50 overflow-hidden">

{/* Background Pattern */}
<div
className="absolute inset-0 opacity-10 bg-cover bg-center"

></div>

<div className="relative max-w-7xl mx-auto px-6">

{/* Heading */}
<div className="text-center mb-8">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
Many Practices, One Solution
</h2>

<div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded"></div>

<p className="text-gray-600 mt-6 max-w-3xl mx-auto">
Our proven expertise across a wide range of healthcare specialties
positions SkyKorg HealthCare as a trusted leader in medical billing
and revenue cycle management services.
</p>
</div>

{/* Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

<div className="bg-white border p-8 rounded-xl shadow-sm hover:shadow-lg transition">
{renderList(column1)}
</div>

<div className="bg-white border p-8 rounded-xl shadow-sm hover:shadow-lg transition">
{renderList(column2)}
</div>

<div className="bg-white border p-8 rounded-xl shadow-sm hover:shadow-lg transition">
{renderList(column3)}
</div>

</div>

</div>
</section>
);
}