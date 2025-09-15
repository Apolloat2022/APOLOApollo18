import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400">Apollo Academy</h3>
            <p className="text-gray-300 text-sm">
              Inspiring musical excellence through personalized instruction and AI-powered learning experiences.
            </p>
            <div className="text-gray-300 text-sm">
              <p>📍 123 Music Street</p>
              <p>Apollo City, AC 12345</p>
              <p>📞 (555) 123-MUSIC</p>
              <p>✉️ info@apollotunes.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/lessons" className="text-gray-300 hover:text-white transition-colors">
                  Lessons
                </Link>
              </li>
              <li>
                <Link href="/teachers" className="text-gray-300 hover:text-white transition-colors">
                  Teachers
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Students</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/portal" className="text-gray-300 hover:text-white transition-colors">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-300 hover:text-white transition-colors">
                  Schedule Lesson
                </Link>
              </li>
              <li>
                <Link href="/trial" className="text-gray-300 hover:text-white transition-colors">
                  Free Trial
                </Link>
              </li>
              <li>
                <Link href="/policies" className="text-gray-300 hover:text-white transition-colors">
                  Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                📺
              </a>
            </div>
            <div className="text-sm text-gray-300">
              <p>🕒 Hours:</p>
              <p>Mon-Fri: 9 AM - 8 PM</p>
              <p>Sat: 9 AM - 6 PM</p>
              <p>Sun: 12 PM - 5 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 Apollo Performing Arts Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}