
"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all ${scrolled ? "bg-black shadow-lg" : "bg-transparent"}`}>
      <div className="container-custom flex justify-between items-center py-6">
        <h1 className="text-2xl font-bold tracking-widest">SkyKorg Healthcare</h1>
        <nav className="hidden md:flex gap-10 uppercase text-sm tracking-wider">
          <a href="/" className="hover:text-orange-500">Home</a>
          <a href="/about" className="hover:text-orange-500">About</a>
          <a href="/services" className="hover:text-orange-500">Services</a>
          <a href="/products" className="hover:text-orange-500">Products</a>
          <a href="/contact" className="hover:text-orange-500">Contact</a>
        </nav>
        <a href="/contact" className="bg-orange-500 px-6 py-3 text-sm font-bold uppercase hover:bg-orange-600 transition">
          Get Quote
        </a>
      </div>
    </header>
  );
}
