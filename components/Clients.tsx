"use client";

import { useEffect, useState } from "react";



export default function SoftwareSlider() {

const logos = [
  "/assets/images/clientele/advancedmd.jpg",
  "/assets/images/clientele/allscripts.jpg",
  "/assets/images/clientele/apex.jpg",
  "/assets/images/clientele/brightree.jpg",
  "/assets/images/clientele/curemd.jpg",
  "/assets/images/clientele/eClinicalworks.jpg",
  "/assets/images/clientele/kareo.jpg",
  "/assets/images/clientele/opie.jpg",
];

  return (
    <section className="relative bg-[#F4F3FF] py-12 md:mt-8 overflow-hidden">

      {/* Background Image */}
      
      

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          YOUR SOFTWARE, OUR SERVICES
        </h2>

        <div className="w-16 h-1 bg-orange-500 mx-auto my-5 rounded"></div>

        {/* Logo Marquee */}
        <div className="overflow-hidden mt-8">

          <div className="flex gap-8 animate-marquee whitespace-nowrap">

            {logos.map((logo, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-[4px] px-10 py-6 flex items-center justify-center min-w-[220px]"
              >
                <img
                  src={logo}
                  alt="software logo"
                  className="h-10 object-contain"
                />
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}