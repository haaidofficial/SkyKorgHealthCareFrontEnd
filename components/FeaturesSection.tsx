import {
ShieldCheckIcon,
DocumentCheckIcon,
CurrencyDollarIcon,
ComputerDesktopIcon,
UserGroupIcon,
Cog6ToothIcon,
MapIcon,
UsersIcon,
DocumentTextIcon,
BanknotesIcon
} from "@heroicons/react/24/outline";

export default function WhySkyKorgFeatures() {

const features = [
{
icon: ShieldCheckIcon,
title: "Rich Payer-Side Experience"
},
{
icon: DocumentCheckIcon,
title: "99% Accuracy Rate"
},
{
icon: CurrencyDollarIcon,
title: "80% Cost Reduction"
},
{
icon: ComputerDesktopIcon,
title: "All EHR / EMR Supported"
},
{
icon: UserGroupIcon,
title: "Dedicated Full-Time Resources"
},
{
icon: Cog6ToothIcon,
title: "Free Account Manager"
},
{
icon: MapIcon,
title: "Serving Across 50 US States"
},
{
icon: UsersIcon,
title: "40+ Medical Specialties"
},
{
icon: DocumentTextIcon,
title: "No Binding Contracts"
},
{
icon: BanknotesIcon,
title: "All-Inclusive Lowest Pricing"
}
];

return (
<section className="pb-12 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}
<div className="text-center mb-8">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
SkyKorg Healthcare – 10x Better Than Others
</h2>

<div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded"></div>
</div>

{/* Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">

{features.map((feature, index) => {
const Icon = feature.icon;

return (
<div
key={index}
className="group bg-white border p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 text-center"
>

<div className="flex justify-center mb-4">
<div className="p-4 rounded-full bg-orange-50 group-hover:bg-orange-500 transition">
<Icon className="w-7 h-7 text-orange-500 group-hover:text-white" />
</div>
</div>

<h3 className="text-sm font-semibold text-gray-800 leading-relaxed">
{feature.title}
</h3>

</div>
);
})}

</div>

</div>

</section>
);
}