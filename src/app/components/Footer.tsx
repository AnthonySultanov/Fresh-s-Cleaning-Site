import Link from 'next/link';

export function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-white">0420 928 588</p>
              </div>
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-white">freshscleaningservice@gmail.com</p>
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-white hover:text-blue-400 transition-colors">Services</Link></li>
                <li><Link href="/" className="text-white hover:text-blue-400 transition-colors">Pricing</Link></li>
                <li><Link href="/contact" className="text-white hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
  
            {/* Business Hours */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Business Hours</h3>
              <p className="mb-2 text-white">Monday - Sunday: 8am - 8pm</p>
              
            </div>
          </div>
  
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-white">&copy; {new Date().getFullYear()} Fresh Cleaning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
