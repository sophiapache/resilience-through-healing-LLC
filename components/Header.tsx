"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[oklch(0.35_0.06_50)]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="
                relative inline-flex items-center justify-center rounded-md p-2 
                text-[oklch(0.7_0.06_50)] 
                hover:bg-[oklch(0.27_0.07_50)] hover:text-[oklch(0.9_0.06_50)] 
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[oklch(0.9_0.06_50)]
              "
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo + Nav Links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Image
                className="h-8 w-auto"
                src="/swirlHeroAI.png"
                alt="Your Company"
                width={32}
                height={32}
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="
                    bg-[oklch(0.35_0.06_50)] 
                    text-[oklch(0.9_0.06_50)] 
                    px-3 py-2 rounded-md text-sm font-medium
                    cursor-default
                  "
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  href="/aboutMe"
                  className="
                    text-[oklch(0.7_0.06_50)] 
                    hover:bg-[oklch(0.27_0.07_50)] 
                    hover:text-[oklch(0.9_0.06_50)] 
                    px-3 py-2 rounded-md text-sm font-medium
                    transition-colors duration-200
                  "
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="
                    text-[oklch(0.7_0.06_50)] 
                    hover:bg-[oklch(0.27_0.07_50)] 
                    hover:text-[oklch(0.9_0.06_50)] 
                    px-3 py-2 rounded-md text-sm font-medium
                    transition-colors duration-200
                  "
                >
                  Services
                </Link>
                <Link
                  href="/testimonials"
                  className="
                    text-[oklch(0.7_0.06_50)] 
                    hover:bg-[oklch(0.27_0.07_50)] 
                    hover:text-[oklch(0.9_0.06_50)] 
                    px-3 py-2 rounded-md text-sm font-medium
                    transition-colors duration-200
                  "
                >
                  Testimonials
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <Link href="/contact" passHref>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="
                  relative rounded-full 
                  bg-[oklch(0.27_0.07_50)] 
                  p-1 
                  text-[oklch(0.7_0.06_50)] 
                  hover:text-[oklch(0.9_0.06_50)] 
                  focus:outline-none focus:ring-2 focus:ring-[oklch(0.9_0.06_50)] focus:ring-offset-2 focus:ring-offset-[oklch(0.35_0.06_50)]
                  transition-colors duration-200
                "
              >
                <span className="sr-only">Contact</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5M3.75 5.25v13.5h16.5V5.25M3.75 5.25l8.25 6.75 8.25-6.75"
                  />
                </svg>
              </button>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              href="/"
              className="
                bg-[oklch(0.35_0.06_50)] 
                text-[oklch(0.9_0.06_50)] 
                block px-3 py-2 rounded-md text-base font-medium
                cursor-default
              "
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href="/aboutMe"
              className="
                text-[oklch(0.7_0.06_50)] 
                hover:bg-[oklch(0.27_0.07_50)] 
                hover:text-[oklch(0.9_0.06_50)] 
                block px-3 py-2 rounded-md text-base font-medium
                transition-colors duration-200
              "
            >
              About
            </Link>
            <Link
              href="/services"
              className="
                text-[oklch(0.7_0.06_50)] 
                hover:bg-[oklch(0.27_0.07_50)] 
                hover:text-[oklch(0.9_0.06_50)] 
                block px-3 py-2 rounded-md text-base font-medium
                transition-colors duration-200
              "
            >
              Services
            </Link>
            <Link
              href="/testimonials"
              className="
                text-[oklch(0.7_0.06_50)] 
                hover:bg-[oklch(0.27_0.07_50)] 
                hover:text-[oklch(0.9_0.06_50)] 
                block px-3 py-2 rounded-md text-base font-medium
                transition-colors duration-200
              "
            >
              Testimonials
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
