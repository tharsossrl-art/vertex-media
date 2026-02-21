"use client";
import { Zap, ShieldCheck, Gem, Check } from "lucide-react";

// ─── VIZIBIL bullets (from Scribe) ───
const vizibilFeatures = [
  "Apari în fața oamenilor potriviți, constant — 12 postări + 4 Reels pe lună pe 2 platforme, fără goluri sau postări disperate de duminică seara",
  "Arăți ca un brand real, nu ca un amator cu Canva — grafică custom în culorile tale, nu template-uri pe care le-ai văzut la 50 de alte firme",
  "Nu mai pierzi timp gândindu-te ce să postezi — primești un calendar de conținut lunar, aprobat de tine în avans",
  "Știi exact ce se întâmplă cu pagina ta — raport lunar clar cu reach, engagement și creștere de urmăritori, cu explicații în română",
  "Ai pe cineva care răspunde când ai nevoie — timp de răspuns garantat de 24h, luni-vineri",
];

// ─── RELEVANT bullets (from Scribe) ───
const relevantFeatures = [
  "Reclamele tale ajung la cine trebuie, nu la toată lumea — setup și gestionare campanii Meta + Google, cu targeting precis pe audiența ta ideală",
  "Nu mai arzi bani în ads fără să știi ce se întâmplă — raport săptămânal cu ce merge, ce nu merge și ce schimbăm",
  "Ești pe toate platformele unde sunt clienții tăi — Instagram, Facebook + TikTok sau LinkedIn, 20 postări/lună + 8 Reels",
  "Ai un om dedicat care cunoaște afacerea ta — call lunar de strategie de 30 de minute cu account managerul tău",
  "Știi ce face concurența înainte să o facă — analiză lunară a competitorilor cu acțiuni concrete pentru tine",
  "Nu mai improvizezi — strategie pe 3 luni cu obiective și KPI-uri clare, ca să ai direcție, nu haos",
];

// ─── AUTORITATE bullets (from Scribe) ───
const autoritateFeatures = [
  "Ești prezent aproape zilnic — pe toate platformele relevante — 28+ postări/lună + 12 Reels, plus moderare activă la comentarii și DM-uri",
  "Video real, nu selfie-uri de pe telefon — 1 sesiune de filmare on-site/lună în Timișoara inclusă, ca să ai conținut autentic care vinde",
  "Reclamele tale fac A/B testing activ — Meta + Google + TikTok Ads cu variante testate continuu, ca bugetul tău de ads să performeze",
  "Ai control total în timp real — dashboard live cu toate metricile, fără să aștepți raportul de la finalul lunii",
  "Suntem parteneri de strategie, nu doar executanți — call bilunar de 45 de minute, plus un landing page gratuit pe trimestru",
  "Urgențele tale devin urgențele noastre — priority support cu răspuns garantat în 4h, pentru că în business există momente critice",
];

export default function Pricing() {
  return (
    <section
      id="pachete"
      className="py-24 px-4"
      style={{ background: "#F8FAFC" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* ─── Trust Badge ─── */}
        <div className="flex justify-center mb-6">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600"
            style={{
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(16,185,129,0.08) 100%)",
              border: "1px solid rgba(37,99,235,0.20)",
            }}
          >
            <Zap size={13} />
            Primii din România cu prețuri transparente publice
          </span>
        </div>

        {/* ─── Section Heading ─── */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-3">
            Știi exact ce primești.
            <br />
            Știi exact cât plătești. Fără surprize.
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed">
            Singurii din Timișoara cu prețuri afișate direct.
            <br />
            Fără &ldquo;contactează-ne pentru ofertă&rdquo;.
          </p>
          <p className="text-gray-400 text-sm mt-3">
            Alege nivelul potrivit pentru unde ești acum. Nu există răspuns greșit — există doar punctul tău de pornire.
          </p>
        </div>

        {/* ─── Cards Grid ─── */}
        <div className="pricing-grid">
          {/* ───────────── VIZIBIL ───────────── */}
          <div
            className="pricing-card-vizibil rounded-xl transition-all duration-300 hover:-translate-y-1 relative"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              padding: "32px 28px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 4px 12px rgba(0,0,0,0.08)";
              (e.currentTarget as HTMLDivElement).style.borderColor = "#D1D5DB";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 1px 3px rgba(0,0,0,0.08)";
              (e.currentTarget as HTMLDivElement).style.borderColor = "#E5E7EB";
            }}
          >
            {/* Tier label */}
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "#6B7280" }}
            >
              Vizibil
            </p>

            {/* Price */}
            <div className="flex items-end gap-1 mb-1">
              <span
                className="font-bold leading-none"
                style={{ fontSize: "42px", color: "#2563EB" }}
              >
                1.999
              </span>
              <span className="text-sm text-gray-400 mb-2">RON/lună</span>
            </div>

            {/* Tagline */}
            <p className="text-sm text-gray-500 italic mb-5 leading-relaxed">
              Prezență online care nu te face de rușine.
            </p>

            {/* Divider */}
            <hr className="border-gray-100 mb-5" />

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {vizibilFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check
                    size={15}
                    className="text-emerald-500 mt-0.5 flex-shrink-0"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className="w-full block text-center text-sm font-semibold rounded-lg transition-colors"
              style={{
                background: "transparent",
                color: "#2563EB",
                border: "2px solid #2563EB",
                padding: "12px 24px",
                minHeight: "48px",
                lineHeight: "24px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#EFF6FF";
                el.style.borderColor = "#1D4ED8";
                el.style.color = "#1D4ED8";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "transparent";
                el.style.borderColor = "#2563EB";
                el.style.color = "#2563EB";
              }}
            >
              Vreau să fiu VIZIBIL — hai să vorbim
            </a>
          </div>

          {/* ───────────── RELEVANT ───────────── */}
          <div
            className="pricing-card-relevant rounded-xl transition-all duration-300 hover:-translate-y-1.5 relative"
            style={{
              background: "#FFFFFF",
              backgroundImage:
                "linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(135deg, #2563EB 0%, #10B981 100%)",
              backgroundOrigin: "padding-box, border-box",
              backgroundClip: "padding-box, border-box",
              border: "2px solid transparent",
              padding: "40px 28px",
              marginTop: "-16px",
              borderRadius: "14px",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.08), 0 0 0 4px rgba(37,99,235,0.06), 0 12px 32px rgba(37,99,235,0.12)",
              zIndex: 1,
            }}
          >
            {/* Popular badge */}
            <span
              className="absolute text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full"
              style={{
                top: "-14px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "linear-gradient(135deg, #2563EB 0%, #10B981 100%)",
                boxShadow: "0 2px 8px rgba(37,99,235,0.30)",
                whiteSpace: "nowrap",
              }}
            >
              ★ Cel mai ales ★
            </span>

            {/* Tier label */}
            <p
              className="text-sm font-bold uppercase tracking-wider mb-4"
              style={{ color: "#2563EB" }}
            >
              Relevant
            </p>

            {/* Price */}
            <div className="flex items-end gap-1 mb-1">
              <span
                className="font-bold leading-none"
                style={{
                  fontSize: "48px",
                  background: "linear-gradient(135deg, #2563EB 0%, #10B981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                3.499
              </span>
              <span className="text-sm text-gray-400 mb-2">RON/lună</span>
            </div>

            {/* Tagline */}
            <p className="text-sm text-gray-500 italic mb-5 leading-relaxed">
              Ajungi la oamenii care cumpără, nu doar la urmăritori.
            </p>

            {/* Divider */}
            <hr className="border-gray-100 mb-5" />

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {relevantFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check
                    size={15}
                    className="text-emerald-500 mt-0.5 flex-shrink-0"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Ads note */}
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              💡 <strong>Bugetul de reclame nu e inclus</strong> — îl controlezi tu complet. Noi gestionăm campaniile.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="w-full block text-center text-white text-sm font-semibold rounded-lg transition-all"
              style={{
                background: "#2563EB",
                border: "none",
                padding: "14px 24px",
                minHeight: "52px",
                lineHeight: "24px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#1D4ED8";
                el.style.boxShadow = "0 4px 12px rgba(37,99,235,0.35)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#2563EB";
                el.style.boxShadow = "none";
              }}
            >
              Vreau să devin RELEVANT — hai să construim
            </a>

            {/* Offer caption */}
            <p className="text-xs text-emerald-500 text-center mt-3 font-medium">
              ⚡ Cel mai ales de clienții noștri
            </p>
          </div>

          {/* ───────────── AUTORITATE ───────────── */}
          <div
            className="pricing-card-autoritate rounded-xl transition-all duration-300 hover:-translate-y-1 relative"
            style={{
              background: "#111827",
              border: "1px solid rgba(212,175,55,0.30)",
              padding: "32px 28px",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.30), 0 0 32px rgba(212,175,55,0.08)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(212,175,55,0.55)";
              el.style.boxShadow =
                "0 20px 48px rgba(0,0,0,0.40), 0 0 48px rgba(212,175,55,0.15)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(212,175,55,0.30)";
              el.style.boxShadow =
                "0 4px 12px rgba(0,0,0,0.30), 0 0 32px rgba(212,175,55,0.08)";
            }}
          >
            {/* Tier label */}
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-4 flex items-center gap-2"
              style={{ color: "#D4AF37" }}
            >
              <Gem size={14} style={{ color: "#D4AF37" }} />
              Autoritate
            </p>

            {/* Price */}
            <div className="flex items-end gap-1 mb-1">
              <span
                className="font-bold leading-none"
                style={{ fontSize: "42px", color: "#D4AF37" }}
              >
                5.999
              </span>
              <span className="text-sm mb-2" style={{ color: "#9CA3AF" }}>
                RON/lună
              </span>
            </div>

            {/* Tagline */}
            <p
              className="text-sm italic mb-5 leading-relaxed"
              style={{ color: "#D1D5DB" }}
            >
              Primul brand la care se gândesc. Înaintea concurenței.
            </p>

            {/* Divider */}
            <hr className="mb-5" style={{ borderColor: "#374151" }} />

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {autoritateFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#E5E7EB" }}>
                  <span
                    className="font-bold flex-shrink-0 mt-0.5"
                    style={{ color: "#D4AF37", fontSize: "14px" }}
                  >
                    ◈
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Ads note */}
            <p className="text-xs mb-4 leading-relaxed" style={{ color: "#6B7280" }}>
              💡 <strong style={{ color: "#9CA3AF" }}>Bugetul de reclame nu e inclus</strong> — îl controlezi tu complet. Noi gestionăm campaniile.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="w-full block text-center text-sm font-semibold rounded-lg transition-all"
              style={{
                background: "transparent",
                color: "#D4AF37",
                border: "2px solid #D4AF37",
                padding: "12px 24px",
                minHeight: "48px",
                lineHeight: "24px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "rgba(212,175,55,0.15)";
                el.style.borderColor = "#F0D080";
                el.style.color = "#F0D080";
                el.style.boxShadow = "0 0 16px rgba(212,175,55,0.20)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "transparent";
                el.style.borderColor = "#D4AF37";
                el.style.color = "#D4AF37";
                el.style.boxShadow = "none";
              }}
            >
              Vreau să fiu AUTORITATE — hai să dominăm
            </a>

            {/* Scarcity */}
            <p
              className="text-xs text-center mt-3 font-medium"
              style={{ color: "#D4AF37", opacity: 0.85 }}
            >
              ◈ Locuri limitate: 5 clienți / lună
            </p>
          </div>
        </div>

        {/* ─── Guarantee Block ─── */}
        <div
          className="max-w-2xl mx-auto mt-12 rounded-2xl text-center relative overflow-hidden"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            padding: "48px 40px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}
        >
          {/* Green top accent */}
          <div
            className="absolute top-0 left-0 right-0"
            style={{
              height: "3px",
              background: "linear-gradient(90deg, #10B981 0%, #059669 100%)",
              borderRadius: "16px 16px 0 0",
            }}
          />

          {/* Shield icon */}
          <div className="flex justify-center mb-5">
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: "72px",
                height: "72px",
                background: "rgba(16,185,129,0.10)",
              }}
            >
              <ShieldCheck
                size={40}
                style={{ color: "#10B981" }}
                strokeWidth={1.5}
              />
            </div>
          </div>

          <h4 className="text-xl font-semibold text-gray-900 mb-3">
            Dacă nu livrăm, plătești mai puțin. Simplu.
          </h4>

          <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-lg mx-auto">
            <strong className="text-gray-700">Creștere garantată:</strong> Dacă reach-ul organic nu crește cu 20% în primele 60 de zile, luna 3 e gratuită — automat, fără să ceri.
            <br className="mb-2" />
            <strong className="text-gray-700">Livrare garantată:</strong> Dacă întârziem cu conținutul, primești 10% reducere pe luna respectivă — automat, fără discuții.
            <br className="mb-2" />
            <strong className="text-gray-700">Libertate garantată:</strong> Fără contracte pe 12 luni. Anulezi cu 30 de zile preaviz, oricând. Nicio penalizare.
          </p>

          <ul className="flex flex-col items-center gap-2">
            {[
              "Fără contracte pe termen lung",
              "Poți opri oricând",
              "Setup fee: 0 RON",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-gray-800"
              >
                <span className="text-emerald-500 font-bold text-base">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ─── Transparency note ─── */}
        <p className="text-center text-xs text-gray-400 mt-6">
          💡 <strong>Bugetul de reclame nu e inclus în prețul pachetului</strong> — îl controlezi tu complet. Noi gestionăm campaniile; tu decizi cât investești în ads.
        </p>
      </div>

    </section>
  );
}
