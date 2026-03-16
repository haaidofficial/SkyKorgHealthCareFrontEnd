'use client';
import TopBar from '@/components/TopBar';
import Link from 'next/link';
import { useState } from 'react';
import content from '@/data/content.json';
import products from '@/data/products.json';
import { useQuoteDrawer } from './QuoteDrawerContext';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { openQuote } = useQuoteDrawer();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <TopBar />
      <header className="bg-white sticky top-0 z-50 shadow">

        <div className="container-responsive max-w-7xl mx-auto">
          <div className="flex items-center justify-between border-b pl-4 md:pl-0">
            <Link href="/" className="text-lg font-semibold hover:text-brand-700">
              <Image src="/assets/images/logo.png" alt='Logo' width={200} height={60} />
            </Link>
            <div className="inline-flex items-center px-4 py-3 gap-4">

              <div className="w-12 h-12 flex items-center justify-center border-2 border-green-600">
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C11.85 21 3 12.15 3 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
                </svg>
              </div>

              <div className="hidden md:block leading-tight text-right">
                <p className="text-gray-700 text-sm">
                  Call us for detail
                </p>
                <p className="text-orange-500 font-semibold text-lg">
                  +1 (888) 370 5125
                </p>
              </div>

            </div>
          </div>
          <div className="flex items-center justify-between py-3">
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="nav-link">{content.nav.home}</Link>
              {/* PROVIDER SOLUTIONS */}
              <div className="group relative">

                <Link
                  href={`/${content.providersolutions.canonical}`}
                  className="nav-link flex items-center gap-1"
                >
                  {content.nav.providersolution}
                  <ChevronDownIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                <div className="mega-menu">

                  {/* SPECIALTIES */}
                  <div>
                    <h4 className="mega-title">SPECIALTIES</h4>
                    <ul>
                      {Object.entries(
                        content.providersolutions.categories.specialties.items
                      ).map(([key, item]) => (
                        <li key={key}>
                          <Link
                            href={`/${content.providersolutions.canonical}/${item.canonical}`}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* REVENUE CYCLE */}
                  <div>
                    <h4 className="mega-title">REVENUE CYCLE</h4>
                    <ul>
                      {Object.entries(
                        content.providersolutions.categories.revenuecycle.items
                      ).map(([key, item]) => (
                        <li key={key}>
                          <Link
                            href={`/${content.providersolutions.canonical}/${item.canonical}`}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* VIRTUAL ASSISTANTS */}
                  <div>
                    <h4 className="mega-title">VIRTUAL ASSISTANTS</h4>
                    <ul>
                      {Object.entries(
                        content.providersolutions.categories.virtualassistants.items
                      ).map(([key, item]) => (
                        <li key={key}>
                          <Link
                            href={`/${content.providersolutions.canonical}/${item.canonical}`}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>


                  {/* OTHER SERVICES */}
                  <div>
                    <h4 className="mega-title">OTHER SERVICES</h4>
                    <ul>
                      {Object.entries(
                        content.providersolutions.categories.otherservices.items
                      ).map(([key, item]) => (
                        <li key={key}>
                          <Link
                            href={`/${content.providersolutions.canonical}/${item.canonical}`}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>


              {/* PAYER SOLUTIONS */}

              <div className="group relative">

                <Link
                  href={`/${content.payersolutions.canonical}`}
                  className="nav-link flex items-center gap-1"
                >
                  {content.nav.payersolutions}
                  <ChevronDownIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                <div className="mega-menu single-column">

                  <ul>
                    {Object.entries(content.payersolutions.items).map(([key, item]) => (
                      <li key={key}>
                        <Link
                          href={`/${content.payersolutions.canonical}/${item.canonical}`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>


              <Link href="/provider-solutions/dme-billing-services" className="nav-link">
                {content.nav.dmebilling}
              </Link>

              <Link href="/provider-solutions/prior-authorization-services" className="nav-link">
                {content.nav.priorauth}
              </Link>

              <Link href="/compliance" className="nav-link">
                {content.nav.compliance}
              </Link>


              {/* RESOURCES */}

              {/* <div className="group relative">

                <button className="nav-link">
                  {content.nav.resources}
                  <ChevronDownIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                <div className="mega-menu single-column">
                  <ul>
                    {Object.entries(content.resources.items).map(([key, item]) => (
                      <li key={key}>
                        <Link
                          href={`/${content.resources.canonical}/${item.canonical}`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                </div>
              </div> */}
              <Link href="/about" className="nav-link">{content.nav.about}</Link>
              <Link href="/contact" className="nav-link">{content.nav.contact}</Link>
            </nav>

            <div className="relative ml-auto">

              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-700 hover:text-orange-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
                </svg>
              </button>

              {searchOpen && (
                <div className="absolute right-0 top-full mt-3 w-[320px] bg-gray-200 shadow-lg p-3 z-50">
                  <div className="flex">

                    <input
                      type="text"
                      placeholder="Search..."
                      className="flex-1 px-4 py-2 outline-none text-gray-700 bg-gray-100"
                    />

                    <button className="bg-orange-500 px-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
                      </svg>
                    </button>

                  </div>
                </div>
              )}

            </div>

            <button
              className="md:hidden p-2 rounded hover:bg-gray-100"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" /></svg>
            </button>

          </div>

        </div>

        {mobileOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="container-responsive flex flex-col py-3 gap-2">
              <Link href="/" onClick={() => setMobileOpen(false)} className="py-2">{content.nav.home}</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="py-2">{content.nav.about}</Link>


              <Link href="/contact" onClick={() => setMobileOpen(false)} className="py-2">{content.nav.contact}</Link>

            </div>
          </div>
        )}
      </header>
    </>

  );
}
