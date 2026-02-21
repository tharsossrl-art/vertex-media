"use client";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { href: "#servicii", label: "Servicii" },
  { href: "#pachete", label: "Pachete & Prețuri" },
  { href: "#despre", label: "Despre noi" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-xl text-gray-900">
          <span className="text-blue-600">Vertex</span>
          <span>Media</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Desktop */}
        <a
          href="#pachete"
          className="hidden md:inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Zap size={14} />
          Începe acum
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Meniu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pachete"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors justify-center"
          >
            <Zap size={14} />
            Începe acum
          </a>
        </div>
      )}
    </header>
  );
}
