'use client';
import { useState } from 'react';
import content from '@/data/content.json';
import { useQuoteDrawer } from './QuoteDrawerContext';

export default function QuoteDrawer() {
  const { isOpen, selectedProduct, closeQuote } = useQuoteDrawer();
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (selectedProduct) {
      formData.set('productName', selectedProduct.name);
      if (selectedProduct.sku) formData.set('sku', selectedProduct.sku);
      if (selectedProduct.category) formData.set('category', selectedProduct.category);
    }
    await fetch('/api/quote', { method: 'POST', body: formData });
    setStatus('sent');
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeQuote}
      />
      <aside
        className={`fixed right-0 top-0 z-50 w-full max-w-md max-w-xl 
  bg-gradient-to-b from-[#0f1115] to-[#161a21] text-white 
  shadow-2xl transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
          <h2 className="text-3xl font-bold tracking-wide">
            Get a Quote
          </h2>

          <button
            onClick={closeQuote}
            className="text-gray-400 hover:text-white transition"
          >
            ✕
          </button>
        </div>

        {/* Form Container */}
        <div className="px-8 pb-12 pt-6 overflow-y-auto h-[calc(100%-90px)]">

          <form onSubmit={onSubmit} className="space-y-8">

            {/* Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Name
              </label>
              <input
                name="name"
                required
                className="w-full bg-transparent border-b border-gray-700 
                     focus:border-orange-500 focus:outline-none 
                     py-2 transition duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full bg-transparent border-b border-gray-700 
                     focus:border-orange-500 focus:outline-none 
                     py-2 transition duration-300"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Subject
              </label>
              <input
                name="subject"
                className="w-full bg-transparent border-b border-gray-700 
                     focus:border-orange-500 focus:outline-none 
                     py-2 transition duration-300"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={2}
                className="w-full bg-transparent border-b border-gray-700 
                     focus:border-orange-500 focus:outline-none 
                     py-2 transition duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="relative w-full border border-gray-600 py-4 
                     text-gray-300 hover:text-white 
                     hover:border-orange-500 transition duration-300"
              >
                Send Message

                {/* Triangle Accent */}
                <span className="absolute bottom-0 right-0 w-0 h-0 
                           border-l-[20px] border-l-transparent
                           border-t-[20px] border-t-orange-500">
                </span>
              </button>
            </div>

          </form>
        </div>
      </aside>
    </>
  );
}
