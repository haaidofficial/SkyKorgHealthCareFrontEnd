'use client';
import Link from 'next/link';
import { useState } from 'react';
import content from '@/data/content.json';
import products from '@/data/products.json';
import { useQuoteDrawer } from './QuoteDrawerContext';
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { openQuote } = useQuoteDrawer();

  return (
    <div className="bg-[#05152f] text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-2">
            <i className="fas fa-paper-plane text-orange-500"></i>
            <a href="mailto:info@skykorghealthcare.com" className="md:flex sm:items-center gap-1 hover:text-orange-500 transition">
             <EnvelopeIcon className="w-4 h-4 text-white" /> info@skykorghealthcare.com
            </a>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-orange-500"></i>
            <span className='flex item-center gap-1'><MapPinIcon className="w-4 h-4 text-white" />42 Thatcher drive, Postal Code - R3T2L3</span>
          </div>

        </div>
      </div>
    </div>
  );
}
