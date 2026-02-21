import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import { Zap, TrendingUp, Users, Award } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-24 px-4 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-6"
            style={{
              background: "rgba(37,99,235,0.08)",
              border: "1px solid rgba(37,99,235,0.20)",
            }}
          >
            <Zap size={12} />
            Agenție de marketing digital · Timișoara
          </span>

          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Creștem afaceri online.
            <br />
            <span className="text-blue-600">Cu prețuri pe care le știi</span>
            <br />
            de la început.
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Vertex Media este singura agenție din Timișoara care afișează prețuri reale,
            transparente, fără &ldquo;sună-ne pentru ofertă&rdquo;. Social media, ads, SEO —
            tot ce ai nevoie, la prețul pe care îl cunoști dinainte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pachete"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <Zap size={16} />
              Vezi pachete și prețuri
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-gray-700 font-semibold px-6 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
            >
              Vorbim gratuit 30 de minute
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-100">
            {[
              { icon: TrendingUp, value: "+20%", label: "Creștere reach garantată" },
              { icon: Users, value: "50+", label: "Clienți mulțumiți" },
              { icon: Award, value: "3+", label: "Ani pe piață" },
              { icon: Zap, value: "5 zile", label: "Setup rapid" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon size={20} className="text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <Pricing />

      {/* ─── Contact placeholder ─── */}
      <section id="contact" className="py-24 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Hai să vorbim despre afacerea ta
          </h2>
          <p className="text-gray-500 mb-8">
            30 de minute gratuit. Fără presiune, fără vânzare agresivă.
            Aflăm unde ești și ce ai nevoie.
          </p>
          <a
            href="mailto:contact@vertexmedia.ro"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors"
          >
            <Zap size={18} />
            contact@vertexmedia.ro
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-8 px-4 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Vertex Media · Timișoara · Toate drepturile rezervate
        </p>
      </footer>
    </main>
  );
}
