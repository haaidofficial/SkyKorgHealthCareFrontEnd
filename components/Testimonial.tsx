"use client";

import Slider from "react-slick";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

export default function Testimonials() {

const testimonials = [
{
text: "SkyKorg Healthcare has been a trusted partner for our authorization process. Their team is highly professional and always delivers with accuracy and efficiency.",
author: "Manager",
company: "Leading Virginia Physicians Group"
},
{
text: "Their eligibility and authorization support allowed our staff to focus on patient care while improving operational efficiency and workflow management.",
author: "Operations Head",
company: "Regional Healthcare Network"
},
{
text: "We highly recommend SkyKorg Healthcare for medical billing and eligibility services. Their team is responsive, knowledgeable, and reliable.",
author: "COO",
company: "Medical Billing & Credentialing Firm"
}
];

const settings = {
dots: true,
infinite: true,
autoplay: true,
speed: 600,
autoplaySpeed: 4000,
slidesToShow: 1,
slidesToScroll: 1,
responsive: [
{
breakpoint: 1024,
settings: { slidesToShow: 2 }
},
{
breakpoint: 640,
settings: { slidesToShow: 1 }
}
]
};

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
<Slider {...settings}>

{testimonials.map((item, index) => (

<div key={index} className="px-4">

<div className="relative bg-white/5 backdrop-blur-md border rounded-xl p-8 h-full hover:border-orange-500 transition">

{/* Quote Icon */}
<ChatBubbleLeftRightIcon className="w-8 h-8 text-orange-400 mb-6"/>

<p className="leading-relaxed mb-6">
{item.text}
</p>

<div>
<h4 className="text-white font-semibold">
{item.author}
</h4>

<span className="text-sm text-gray-500">
{item.company}
</span>
</div>

{/* Decorative Quote */}
<span className="absolute bottom-6 right-6 text-orange-500 text-5xl">
“
</span>

</div>

</div>

))}

</Slider>

</div>

</section>
);
}