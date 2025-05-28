'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white z-50">
      <div className="w-full px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo/Banner */}
          <div className="relative h-24 w-48 ml-0">
            <Image
              src="/Company.png"
              alt="Fresh Cleaning"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link 
              href="/"
              className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/contact"
              className="block px-3 py-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
