"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4 md:py-6">
          <div className="flex items-center">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
              Gaming World
            </h1>
          </div>

          <nav className="hidden md:flex space-x-2 sm:space-x-3 lg:space-x-4 xl:space-x-8">
            <a
              href="/about"
              className="text-white hover:text-blue-200 px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 hover:bg-white/10"
            >
              Нүүр
            </a>
            <a
              href="/contact"
              className="text-white hover:text-blue-200 px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 hover:bg-white/10"
            >
              Холбоо барих
            </a>
            <a
              href="/dashboard"
              className="text-white hover:text-blue-200 px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 hover:bg-white/10"
            >
              Мэдээллийн самбар
            </a>
            <a
              href="/export"
              className="text-white hover:text-blue-200 px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 hover:bg-white/10"
            >
              Хувийн мэдээлэл
            </a>
            <a
              href="/"
              className="text-white hover:text-blue-200 px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 hover:bg-white/10"
            >
              Гарах
            </a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-200 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/about"
                className="text-white hover:text-blue-200 block px-3 py-3 rounded-md text-sm sm:text-base font-medium hover:bg-white/10 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Нүүр
              </a>
              <a
                href="/contact"
                className="text-white hover:text-blue-200 block px-3 py-3 rounded-md text-sm sm:text-base font-medium hover:bg-white/10 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Холбоо барих
              </a>
              <a
                href="/dashboard"
                className="text-white hover:text-blue-200 block px-3 py-3 rounded-md text-sm sm:text-base font-medium hover:bg-white/10 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Мэдээллийн самбар
              </a>
              <a
                href="/export"
                className="text-white hover:text-blue-200 block px-3 py-3 rounded-md text-sm sm:text-base font-medium hover:bg-white/10 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Хувийн мэдээлэл
              </a>
              <a
                href="/"
                className="text-white hover:text-blue-200 block px-3 py-3 rounded-md text-sm sm:text-base font-medium hover:bg-white/10 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Гарах
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
