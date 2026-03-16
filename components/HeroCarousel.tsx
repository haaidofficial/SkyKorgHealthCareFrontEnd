"use client";

import Slider from "react-slick";

export default function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  const slides = [
    {
      image: "/assets/images/AI-Powered-Ambient-Listening.jpg",
      heading: "AI-POWERED AMBIENT LISTENING TECHNOLOGY FOR REAL-TIME DOCUMENTATION",
      text: "Generate a wide range of clinical notes using advanced AI ambient technology that virtually listens to physician–patient consultations led by continuous professional review.",
    },
    {
      image: "/assets/images/Prior-Authorization-With-Approval.jpg",
      heading: "PRIOR AUTHORIZATIONS WITH 97% APPROVAL",
      text: "Trusted by payers & providers nationwide for 19+ years. Fast reauthorization, precise follow-ups, and HIPAA-compliant processes across 38 specialties.",
    },
    {
      image: "/assets/images/DME-Revenue-Recovery.jpg",
      heading: "15+ Years Leading DME Revenue Recovery",
      text: "From prior auth to collections, we boost revenue, cut admin work, and deliver unmatched accuracy for DME/HME providers nationwide.",
    },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden z-10">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="relative h-screen flex items-start">
              
              {/* Background Image */}
              <img
                src={slide.image}
                alt="Industrial Slide"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>
              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto">
                <div className="max-w-3xl mt-10 pl-4 md:pl-0">                  
                  <span className="text-orange-500 uppercase tracking-[5px] text-sm">
                    SkyKorg HealthCare
                  </span>

                  <h1 className="text-3xl md:text-5xl text-white md:text-4xl lg:text-4xl font-extrabold mt-2 leading-tight">
                    {slide.heading}
                  </h1>                  

                  <p className="text-white mt-8 text-lg md:text-xl">
                    {slide.text}
                  </p>

                  <div className="mt-10 flex gap-6">
                    <button className="bg-orange-500 text-white px-8 py-4 uppercase font-bold hover:bg-orange-600 transition">
                      INQUIRE NOW
                    </button>
                    
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}