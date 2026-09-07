"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Ideator", sublabel: "", href: "/ideator" },
  { label: "Matcher", sublabel: "", href: "/matcher" },
  { label: "Challenger", sublabel: "", href: "/challenger" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface-container-lowest/95 backdrop-blur-sm border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary-deep flex items-center justify-center">
              <span className="text-butter text-xs font-bold font-mono">L</span>
            </div>
            <span className="text-xl font-display font-semibold text-primary-deep tracking-tight">
              Linkable
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-on-surface-variant hover:text-primary-deep hover:bg-surface-container-low rounded-md transition-colors"
              >
                {link.label}
                {link.sublabel && (
                  <span className="text-outline ml-0.5 text-xs">
                    {link.sublabel}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* XP Badge */}
            {/* <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-full border border-outline-variant/40">
              <span className="text-xs font-semibold text-on-surface-variant">
                Level 3
              </span>
              <span className="text-outline-variant">|</span>
              <span className="text-xs font-bold text-verdigris">
                1,240 XP
              </span>
            </div> */}

            {/* User Avatar */}
            <div className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container text-sm font-semibold">
              K
            </div>

            {/* Join Free Button */}
            <Link
              href="/signup"
              className="px-5 py-2 bg-primary-deep text-butter text-sm font-semibold rounded-sm hover:bg-primary-elevated transition-colors"
            >
              Join Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-on-surface-variant hover:text-primary-deep"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
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

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-outline-variant/30">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-on-surface-variant hover:text-primary-deep hover:bg-surface-container-low rounded-md transition-colors"
                >
                  {link.label}
                  {link.sublabel && (
                    <span className="text-outline ml-0.5 text-xs">
                      {link.sublabel}
                    </span>
                  )}
                </Link>
              ))}
            </nav>
            <div className="mt-4 px-3 flex items-center gap-3">
              {/* <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-full border border-outline-variant/40">
                <span className="text-xs font-semibold text-on-surface-variant">
                  Level 3
                </span>
                <span className="text-outline-variant">|</span>
                <span className="text-xs font-bold text-verdigris">
                  1,240 XP
                </span>
              </div> */}
              <Link
                href="/signup"
                className="flex-1 text-center px-5 py-2.5 bg-primary-deep text-butter text-sm font-semibold rounded-sm"
              >
                Join Free
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
