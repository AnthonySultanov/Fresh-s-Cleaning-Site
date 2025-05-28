'use client';
import { useState, useEffect } from 'react';

export function QuoteModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [quote, setQuote] = useState({
    bedrooms: 1,
    windows: 0,
  });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculatePrice();
  }, [quote]);

  const calculatePrice = () => {
    // Cleaning prices based on number of bedrooms
    const cleaningPrices: { [key: number]: number } = {
      1: 169,
      2: 189,
      3: 250,
      4: 290,
      5: 315,
      6: 365,
    };

    // Calculate window price
    const windowPrice = quote.windows * 12;

    // Calculate total price
    const cleaningPrice = cleaningPrices[quote.bedrooms] || 365; // Default to 6-bedroom price if out of range
    const total = cleaningPrice + windowPrice;
    
    setTotalPrice(total);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Get a Quote</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          {/* Estimated Price Display */}
          <div className="text-right">
            <p className="text-sm text-gray-600">Estimated Price</p>
            <p className="text-2xl font-bold text-blue-600">${totalPrice}</p>
          </div>

          {/* Number of Bedrooms */}
          <div>
            <p className="mb-3 text-gray-900 font-medium">Number of bedrooms:</p>
            <div className="flex items-center space-x-4">
              <button
                className="p-2 border rounded-lg text-gray-900 w-10 h-10"
                onClick={() => setQuote({ ...quote, bedrooms: Math.max(1, quote.bedrooms - 1) })}
              >
                -
              </button>
              <span className="text-xl text-gray-900 font-medium">{quote.bedrooms}</span>
              <button
                className="p-2 border rounded-lg text-gray-900 w-10 h-10"
                onClick={() => setQuote({ ...quote, bedrooms: Math.min(6, quote.bedrooms + 1) })}
              >
                +
              </button>
            </div>
          </div>

          {/* Number of Windows */}
          <div>
            <p className="mb-3 text-gray-900 font-medium">Number of windows:</p>
            <div className="flex items-center space-x-4">
              <button
                className="p-2 border rounded-lg text-gray-900 w-10 h-10"
                onClick={() => setQuote({ ...quote, windows: Math.max(0, quote.windows - 1) })}
              >
                -
              </button>
              <span className="text-xl text-gray-900 font-medium">{quote.windows}</span>
              <button
                className="p-2 border rounded-lg text-gray-900 w-10 h-10"
                onClick={() => setQuote({ ...quote, windows: quote.windows + 1 })}
              >
                +
              </button>
            </div>
          </div>

          {/* Get Quote Button */}
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium"
            onClick={() => {
              console.log('Quote submitted:', quote);
              onClose();
            }}
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}