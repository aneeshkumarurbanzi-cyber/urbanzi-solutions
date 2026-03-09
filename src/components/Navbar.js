"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">

      {/* NAV CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* LOGO */}
        <div className="text-white text-base md:text-xl font-semibold leading-tight">
          URBANZI <span className="hidden sm:inline">SOLUTIONS</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 text-sm">

          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-white transition">
            About Us
          </Link>

          {/* SERVICES */}
          <div className="relative group">

            <Link
              href="/services"
              className="flex items-center gap-1 hover:text-white transition"
            >
              Services
              <ChevronDown
                size={16}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </Link>

            {/* Hover bridge */}
            <div className="absolute left-0 right-0 top-full h-3"></div>

            {/* Dropdown */}
            <div
              className="
              absolute left-1/2 -translate-x-1/2 top-10
              bg-[#0b1220]
              border border-white/10
              rounded-xl
              w-56
              opacity-0 invisible
              translate-y-2
              group-hover:opacity-100
              group-hover:visible
              group-hover:translate-y-0
              transition-all duration-300
              shadow-xl
              "
            >

              <Link href="/software-development" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-t-xl">
                Software Development
              </Link>

              <Link href="/web-development" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5">
                Web Development
              </Link>

              <Link href="/app-development" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5">
                App Development
              </Link>

              <Link href="/seo" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5">
                SEO Services
              </Link>

              <Link href="/graphics-animation" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-b-xl">
                Graphic Design & Animation
              </Link>

            </div>

          </div>

          <Link href="/clients" className="hover:text-white transition">
            Clients
          </Link>

          <Link href="/careers" className="hover:text-white transition">
            Careers
          </Link>

          <Link href="/blogs" className="hover:text-white transition">
            Blogs
          </Link>

        </div>

        {/* DESKTOP BUTTON */}
        <button className="hidden md:block bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">
          Let’s Talk
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0b1220] transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* MOBILE HEADER */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">

          <div className="text-white text-lg font-semibold">
            URBANZI SOLUTIONS
          </div>

          <button onClick={() => setOpen(false)} className="text-white">
            <X size={28} />
          </button>

        </div>

        {/* MOBILE LINKS */}
        <div className="flex flex-col px-6 py-8 space-y-6 text-gray-300 text-lg">

          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/about" onClick={closeMenu}>About Us</Link>

          {/* SERVICES MOBILE */}
          <div>

            <div className="flex items-center justify-between">

              <Link href="/services" onClick={closeMenu}>
                Services
              </Link>

              <button onClick={() => setServicesOpen(!servicesOpen)}>
                <ChevronDown
                  className={`transition ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

            </div>

            <div
              className={`flex flex-col ml-4 mt-4 space-y-4 text-base text-gray-400 overflow-hidden transition-all duration-300 ${
                servicesOpen ? "max-h-96" : "max-h-0"
              }`}
            >

              <Link href="/software-development" onClick={closeMenu}>
                Software Development
              </Link>

              <Link href="/web-development" onClick={closeMenu}>
                Web Development
              </Link>

              <Link href="/app-development" onClick={closeMenu}>
                App Development
              </Link>

              <Link href="/seo" onClick={closeMenu}>
                SEO Services
              </Link>

              <Link href="/graphics-animation" onClick={closeMenu}>
                Graphic Design
              </Link>

            </div>

          </div>

          <Link href="/clients" onClick={closeMenu}>Clients</Link>
          <Link href="/careers" onClick={closeMenu}>Careers</Link>
          <Link href="/blogs" onClick={closeMenu}>Blogs</Link>

          <button className="mt-6 bg-white text-black py-3 rounded-full font-medium">
            Let’s Talk
          </button>

        </div>

      </div>

    </nav>
  );
}