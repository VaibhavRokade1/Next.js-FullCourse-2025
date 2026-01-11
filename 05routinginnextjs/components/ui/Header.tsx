"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          MyBrand
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/product" className="hover:text-white transition">
            Products
          </Link>
          <Link href="/services" className="hover:text-white transition">
            Service
          </Link>
          <Link href="/contacts" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm text-gray-300 hover:text-white transition">
            Sign in
          </button>
          <button className="rounded-lg bg-white text-black px-5 py-2 text-sm font-medium hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
