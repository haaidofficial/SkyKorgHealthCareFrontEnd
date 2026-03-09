'use client';
import React, { createContext, useContext, useMemo, useState, ReactNode } from 'react';

export type QuoteProduct = {
  name: string;
  sku?: string;
  category?: string;
};

type QuoteDrawerState = {
  isOpen: boolean;
  selectedProduct: QuoteProduct | null;
  openQuote: (product?: QuoteProduct | null) => void;
  closeQuote: () => void;
};

const QuoteDrawerContext = createContext<QuoteDrawerState | undefined>(undefined);

export function QuoteDrawerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<QuoteProduct | null>(null);

  const openQuote = (product?: QuoteProduct | null) => {
    setSelectedProduct(product ?? null);
    setOpen(true);
  };

  const closeQuote = () => setOpen(false);

  const value = useMemo(() => ({ isOpen, selectedProduct, openQuote, closeQuote }), [isOpen, selectedProduct]);

  return (
    <QuoteDrawerContext.Provider value={value}>
      {children}
    </QuoteDrawerContext.Provider>
  );
}

export function useQuoteDrawer() {
  const ctx = useContext(QuoteDrawerContext);
  if (!ctx) throw new Error('useQuoteDrawer must be used within QuoteDrawerProvider');
  return ctx;
}
