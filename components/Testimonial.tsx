"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

export default function Testimonials() {

const testimonials = [
{
name: "Practice Administrator",
company: "Multi-Specialty Medical Group",
text: "SkyKorg HealthCare has significantly improved our revenue cycle efficiency. Their team handles prior authorizations and billing with great accuracy, allowing our staff to focus more on patient care."
},
{
name: "Medical Director",
company: "Regional Healthcare Network",
text: "Working with SkyKorg has streamlined our entire billing process. Claims are submitted faster, denials are handled efficiently, and our reimbursements have noticeably improved."
},
{
name: "Operations Manager",
company: "Urgent Care Center",
text: "The SkyKorg team has been extremely professional and reliable. Their expertise in eligibility verification and patient data management has helped us reduce administrative workload."
},
{
name: "Revenue Cycle Manager",
company: "Specialty Clinic",
text: "SkyKorg HealthCare delivers exactly what they promise. Their knowledge of complex billing workflows and payer requirements has helped us maintain a consistent revenue flow."
},
{
name: "Chief Financial Officer",
company: "Private Hospital Network",
text: "Partnering with SkyKorg has reduced our billing errors and improved our financial outcomes. Their team is responsive, knowledgeable, and always ready to assist."
},
{
name: "Practice Owner",
company: "Family Medicine Practice",
text: "SkyKorg’s RCM services have transformed how we manage claims and collections. Their support has allowed our practice to grow without worrying about billing challenges."
},
{
name: "Clinic Manager",
company: "Orthopedic Medical Center",
text: "From coding accuracy to accounts receivable follow-ups, SkyKorg HealthCare has proven to be a dependable partner for our practice."
},
{
name: "Healthcare Consultant",
company: "Medical Billing Consultancy",
text: "SkyKorg stands out for their deep industry knowledge and commitment to quality. Their team ensures that billing processes remain compliant and efficient."
}
];

return (
<section className="relative py-16 overflow-hidden">

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}
<div className="text-center mb-8">
<h2 className="text-3xl md:text-4xl font-bold">
What Our Clients Say
</h2>

<div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded"></div>
</div>

{/* Slider */}
<Swiper
modules={[Autoplay, Pagination]}
spaceBetween={30}
loop={true}
autoplay={{ delay: 4000 }}
pagination={{ clickable: true }}
breakpoints={{
640: { slidesPerView: 1 },
768: { slidesPerView: 2 },
1024: { slidesPerView: 3 }
}}
>

{testimonials.map((item, index) => (
<SwiperSlide key={index}>

<div className="relative p-8 rounded-xl border hover:border-orange-500 transition">

<ChatBubbleLeftRightIcon className="absolute -top-4 left-6 w-8 h-8 text-orange-500" />

<p className="text-gray-900 leading-relaxed mb-6">
{item.text}
</p>

<div className="border-t border-gray-700 pt-4">

<h4 className="font-semibold">
{item.name}
</h4>

<p className="text-sm text-gray-400">
{item.company}
</p>

</div>

</div>

</SwiperSlide>
))}

</Swiper>

</div>
</section>
);
}