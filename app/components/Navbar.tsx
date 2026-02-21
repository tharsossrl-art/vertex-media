"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#servicii", label: "Servicii" },
  { href: "#pachete", label: "Pachete & Prețuri" },
  { href: "#despre", label: "Despre noi" },
  { href: "#contact", label: "Contact" },
];

// Diamond + V chevron logo in gold
function LogoIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      {/* Diamond / rhombus shape */}
      <polygon
        points="17,2 32,17 17,32 2,17"
        fill="#c8a96e"
      />
      {/* V chevron pointing down, in dark ink */}
      <polyline
        points="10,12 17,22 24,12"
        stroke="#0A0F1E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        background: "rgba(10,15,30,0.92)",
        borderBottom: "1px solid rgba(200,169,110,0.15)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <LogoIcon />
          <span
            className="font-bold text-xl tracking-tight"
            style={{ color: "#F0EDE6" }}
          >
            Vertex{" "}
            <span style={{ color: "#c8a96e" }}>Media</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors"
              style={{ color: "rgba(240,237,230,0.65)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#c8a96e")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(240,237,230,0.65)")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Desktop */}
        <a
          href="#pachete"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-lg transition-all"
          style={{
            background: "#c8a96e",
            color: "#0A0F1E",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "#e0c98a";
            el.style.boxShadow = "0 4px 16px rgba(200,169,110,0.35)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "#c8a96e";
            el.style.boxShadow = "none";
          }}
        >
          Începe acum
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2"
          style={{ color: "#c8a96e" }}
          onClick={() => setOpen(!open)}
          aria-label="Meniu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-4 py-4 flex flex-col gap-4"
          style={{
            background: "rgba(10,15,30,0.98)",
            borderTop: "1px solid rgba(200,169,110,0.15)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium"
              style={{ color: "rgba(240,237,230,0.75)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pachete"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-3 rounded-lg"
            style={{ background: "#c8a96e", color: "#0A0F1E" }}
          >
            Începe acum
          </a>
        </div>
      )}
    </header>
  );
}
