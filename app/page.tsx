"use client";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import { Zap, TrendingUp, Users, Award } from "lucide-react";

export default function Home() {
  return (
    <main style={{ background: "#0A0F1E" }}>
      <Navbar />

      {/* ─── Hero ─── */}
      <section
        className="pt-32 pb-24 px-4 text-center"
        style={{
          background: "linear-gradient(180deg, #0A0F1E 0%, #0D1117 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6"
            style={{
              background: "rgba(200,169,110,0.10)",
              border: "1px solid rgba(200,169,110,0.30)",
              color: "#c8a96e",
            }}
          >
            <Zap size={12} />
            Agenție de marketing digital · Timișoara
          </span>

          <h1
            className="text-5xl sm:text-6xl font-bold leading-tight mb-6"
            style={{ color: "#F0EDE6" }}
          >
            Creștem afaceri online.
            <br />
            <span style={{ color: "#c8a96e" }}>Cu prețuri pe care le știi</span>
            <br />
            de la început.
          </h1>

          <p
            className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(240,237,230,0.60)" }}
          >
            Vertex Media este singura agenție din Timișoara care afișează prețuri reale,
            transparente, fără &ldquo;sună-ne pentru ofertă&rdquo;. Social media, ads, SEO —
            tot ce ai nevoie, la prețul pe care îl cunoști dinainte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pachete"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all text-sm"
              style={{
                background: "#c8a96e",
                color: "#0A0F1E",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#e0c98a";
                el.style.boxShadow = "0 4px 20px rgba(200,169,110,0.40)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#c8a96e";
                el.style.boxShadow = "none";
              }}
            >
              <Zap size={16} />
              Vezi pachete și prețuri
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all text-sm"
              style={{
                background: "transparent",
                color: "#F0EDE6",
                border: "1px solid rgba(200,169,110,0.35)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#c8a96e";
                el.style.color = "#c8a96e";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(200,169,110,0.35)";
                el.style.color = "#F0EDE6";
              }}
            >
              Vorbim gratuit 30 de minute
            </a>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-12"
            style={{ borderTop: "1px solid rgba(200,169,110,0.15)" }}
          >
            {[
              { icon: TrendingUp, value: "+20%", label: "Creștere reach garantată" },
              { icon: Users, value: "50+", label: "Clienți mulțumiți" },
              { icon: Award, value: "3+", label: "Ani pe piață" },
              { icon: Zap, value: "5 zile", label: "Setup rapid" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon
                  size={20}
                  className="mx-auto mb-2"
                  style={{ color: "#c8a96e" }}
                />
                <div
                  className="text-2xl font-bold"
                  style={{ color: "#F0EDE6" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ color: "rgba(240,237,230,0.45)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <Pricing />

      {/* ─── Contact ─── */}
      <section
        id="contact"
        className="py-24 px-4 text-center"
        style={{ background: "#0D1117" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "#F0EDE6" }}
          >
            Hai să vorbim despre afacerea ta
          </h2>
          <p
            className="mb-8"
            style={{ color: "rgba(240,237,230,0.55)" }}
          >
            30 de minute gratuit. Fără presiune, fără vânzare agresivă.
            Aflăm unde ești și ce ai nevoie.
          </p>
          <a
            href="mailto:contact@vertexmedia.ro"
            className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all"
            style={{
              background: "#c8a96e",
              color: "#0A0F1E",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#e0c98a";
              el.style.boxShadow = "0 4px 24px rgba(200,169,110,0.40)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#c8a96e";
              el.style.boxShadow = "none";
            }}
          >
            <Zap size={18} />
            contact@vertexmedia.ro
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer
        className="py-8 px-4 text-center"
        style={{ borderTop: "1px solid rgba(200,169,110,0.12)" }}
      >
        <p
          className="text-sm"
          style={{ color: "rgba(240,237,230,0.35)" }}
        >
          © {new Date().getFullYear()} Vertex Media · Timișoara · Toate drepturile rezervate
        </p>
      </footer>
    </main>
  );
}
