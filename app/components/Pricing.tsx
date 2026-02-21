"use client";
import { Zap, ShieldCheck, Gem, Check } from "lucide-react";

// ─── VIZIBIL bullets ───
const vizibilFeatures = [
  "Apari în fața oamenilor potriviți, constant — 12 postări + 4 Reels pe lună pe 2 platforme, fără goluri sau postări disperate de duminică seara",
  "Arăți ca un brand real, nu ca un amator cu Canva — grafică custom în culorile tale, nu template-uri pe care le-ai văzut la 50 de alte firme",
  "Nu mai pierzi timp gândindu-te ce să postezi — primești un calendar de conținut lunar, aprobat de tine în avans",
  "Știi exact ce se întâmplă cu pagina ta — raport lunar clar cu reach, engagement și creștere de urmăritori, cu explicații în română",
  "Ai pe cineva care răspunde când ai nevoie — timp de răspuns garantat de 24h, luni-vineri",
];

// ─── RELEVANT bullets ───
const relevantFeatures = [
  "Reclamele tale ajung la cine trebuie, nu la toată lumea — setup și gestionare campanii Meta + Google, cu targeting precis pe audiența ta ideală",
  "Nu mai arzi bani în ads fără să știi ce se întâmplă — raport săptămânal cu ce merge, ce nu merge și ce schimbăm",
  "Ești pe toate platformele unde sunt clienții tăi — Instagram, Facebook + TikTok sau LinkedIn, 20 postări/lună + 8 Reels",
  "Ai un om dedicat care cunoaște afacerea ta — call lunar de strategie de 30 de minute cu account managerul tău",
  "Știi ce face concurența înainte să o facă — analiză lunară a competitorilor cu acțiuni concrete pentru tine",
  "Nu mai improvizezi — strategie pe 3 luni cu obiective și KPI-uri clare, ca să ai direcție, nu haos",
];

// ─── AUTORITATE bullets ───
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
      style={{ background: "#0D1117" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* ─── Trust Badge ─── */}
        <div className="flex justify-center mb-6">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
            style={{
              background: "rgba(200,169,110,0.10)",
              border: "1px solid rgba(200,169,110,0.30)",
              color: "#c8a96e",
            }}
          >
            <Zap size={13} />
            Primii din România cu prețuri transparente publice
          </span>
        </div>

        {/* ─── Section Heading ─── */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl font-bold leading-tight mb-3"
            style={{ color: "#F0EDE6" }}
          >
            Știi exact ce primești.
            <br />
            Știi exact cât plătești.{" "}
            <span style={{ color: "#c8a96e" }}>Fără surprize.</span>
          </h2>
          <p
            className="text-base max-w-lg mx-auto leading-relaxed"
            style={{ color: "rgba(240,237,230,0.55)" }}
          >
            Singurii din Timișoara cu prețuri afișate direct.
            <br />
            Fără &ldquo;contactează-ne pentru ofertă&rdquo;.
          </p>
          <p
            className="text-sm mt-3"
            style={{ color: "rgba(240,237,230,0.35)" }}
          >
            Alege nivelul potrivit pentru unde ești acum. Nu există răspuns greșit — există doar punctul tău de pornire.
          </p>
        </div>

        {/* ─── Cards Grid ─── */}
        <div className="pricing-grid">
          {/* ───────────── VIZIBIL ───────────── */}
          <div
            className="pricing-card-vizibil rounded-xl transition-all duration-300 hover:-translate-y-1 relative"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(200,169,110,0.18)",
              padding: "32px 28px",
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.30)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(200,169,110,0.45)";
              el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.40), 0 0 24px rgba(200,169,110,0.08)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(200,169,110,0.18)";
              el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.30)";
            }}
          >
            {/* Tier label */}
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: "rgba(200,169,110,0.70)" }}
            >
              Vizibil
            </p>

            {/* Price */}
            <div className="flex items-end gap-1 mb-1">
              <span
                className="font-bold leading-none"
                style={{ fontSize: "42px", color: "#c8a96e" }}
              >
                1.999
              </span>
              <span
                className="text-sm mb-2"
                style={{ color: "rgba(240,237,230,0.45)" }}
              >
                RON/lună
              </span>
            </div>

            {/* Tagline */}
            <p
              className="text-sm italic mb-5 leading-relaxed"
              style={{ color: "rgba(240,237,230,0.55)" }}
            >
              Prezență online care nu te face de rușine.
            </p>

            {/* Divider */}
            <hr
              className="mb-5"
              style={{ borderColor: "rgba(200,169,110,0.12)" }}
            />

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {vizibilFeatures.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "rgba(240,237,230,0.75)" }}
                >
                  <Check
                    size={15}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "#c8a96e" }}
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className="w-full block text-center text-sm font-semibold rounded-lg transition-all"
              style={{
                background: "transparent",
                color: "#c8a96e",
                border: "2px solid #c8a96e",
                padding: "12px 24px",
                minHeight: "48px",
                lineHeight: "24px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "rgba(200,169,110,0.12)";
                el.style.borderColor = "#e0c98a";
                el.style.color = "#e0c98a";
                el.style.boxShadow = "0 0 16px rgba(200,169,110,0.18)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "transparent";
                el.style.borderColor = "#c8a96e";
                el.style.color = "#c8a96e";
                el.style.boxShadow = "none";
              }}
            >
              Vreau să fiu VIZIBIL — hai să vorbim
            </a>
          </div>

          {/* ───────────── RELEVANT ───────────── */}
          <div
            className="pricing-card-relevant rounded-xl transition-all duration-300 hover:-translate-y-1.5 relative"
            style={{
              background: "rgba(200,169,110,0.07)",
              backgroundImage:
                "linear-gradient(rgba(200,169,110,0.07), rgba(200,169,110,0.04)), linear-gradient(135deg, #c8a96e 0%, #e0c98a 100%)",
              backgroundOrigin: "padding-box, border-box",
              backgroundClip: "padding-box, border-box",
              border: "2px solid transparent",
              padding: "40px 28px",
              marginTop: "-16px",
              borderRadius: "14px",
              backdropFilter: "blur(12px)",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.50), 0 0 0 4px rgba(200,169,110,0.08), 0 16px 48px rgba(200,169,110,0.15)",
              zIndex: 1,
            }}
          >
            {/* Popular badge */}
            <span
              className="absolute text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full"
              style={{
                top: "-14px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "linear-gradient(135deg, #c8a96e 0%, #e0c98a 100%)",
                color: "#0A0F1E",
                boxShadow: "0 2px 12px rgba(200,169,110,0.40)",
                whiteSpace: "nowrap",
              }}
            >
              ★ Cel mai ales ★
            </span>

            {/* Tier label */}
            <p
              className="text-sm font-bold uppercase tracking-wider mb-4"
              style={{ color: "#c8a96e" }}
            >
              Relevant
            </p>

            {/* Price */}
            <div className="flex items-end gap-1 mb-1">
              <span
                className="font-bold leading-none"
                style={{
                  fontSize: "48px",
                  background: "linear-gradient(135deg, #c8a96e 0%, #e0c98a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                3.499
              </span>
              <span
                className="text-sm mb-2"
                style={{ color: "rgba(240,237,230,0.50)" }}
              >
                RON/lună
              </span>
            </div>

            {/* Tagline */}
            <p
              className="text-sm italic mb-5 leading-relaxed"
              style={{ color: "rgba(240,237,230,0.65)" }}
            >
              Ajungi la oamenii care cumpără, nu doar la urmăritori.
            </p>

            {/* Divider */}
            <hr
              className="mb-5"
              style={{ borderColor: "rgba(200,169,110,0.20)" }}
            />

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {relevantFeatures.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "rgba(240,237,230,0.80)" }}
                >
                  <Check
                    size={15}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "#c8a96e" }}
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Ads note */}
            <p
              className="text-xs mb-4 leading-relaxed"
              style={{ color: "rgba(200,169,110,0.60)" }}
            >
              💡{" "}
              <strong style={{ color: "rgba(200,169,110,0.85)" }}>
                Bugetul de reclame nu e inclus
              </strong>{" "}
              — îl controlezi tu complet. Noi gestionăm campaniile.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="w-full block text-center text-sm font-semibold rounded-lg transition-all"
              style={{
                background: "#c8a96e",
                color: "#0A0F1E",
                border: "none",
                padding: "14px 24px",
                minHeight: "52px",
                lineHeight: "24px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#e0c98a";
                el.style.boxShadow = "0 4px 20px rgba(200,169,110,0.45)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#c8a96e";
                el.style.boxShadow = "none";
              }}
            >
              Vreau să devin RELEVANT — hai să construim
            </a>

            {/* Caption */}
            <p
              className="text-xs text-center mt-3 font-medium"
              style={{ color: "rgba(200,169,110,0.70)" }}
            >
              ⚡ Cel mai ales de clienții noștri
            </p>
          </div>

          {/* ───────────── AUTORITATE ───────────── */}
          <div
            className="pricing-card-autoritate rounded-xl transition-all duration-300 hover:-translate-y-1 relative"
            style={{
              background: "rgba(10,15,30,0.70)",
              border: "1px solid rgba(200,169,110,0.30)",
              padding: "32px 28px",
              backdropFilter: "blur(8px)",
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.50), 0 0 48px rgba(200,169,110,0.06)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(200,169,110,0.55)";
              el.style.boxShadow =
                "0 20px 60px rgba(0,0,0,0.60), 0 0 64px rgba(200,169,110,0.14)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(200,169,110,0.30)";
              el.style.boxShadow =
                "0 4px 24px rgba(0,0,0,0.50), 0 0 48px rgba(200,169,110,0.06)";
            }}
          >
            {/* Tier label */}
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-4 flex items-center gap-2"
              style={{ color: "#c8a96e" }}
            >
              <Gem size={14} style={{ color: "#c8a96e" }} />
              Autoritate
            </p>

            {/* Price */}
            <div className="flex items-end gap-1 mb-1">
              <span
                className="font-bold leading-none"
                style={{ fontSize: "42px", color: "#c8a96e" }}
              >
                5.999
              </span>
              <span
                className="text-sm mb-2"
                style={{ color: "rgba(240,237,230,0.45)" }}
              >
                RON/lună
              </span>
            </div>

            {/* Tagline */}
            <p
              className="text-sm italic mb-5 leading-relaxed"
              style={{ color: "rgba(240,237,230,0.65)" }}
            >
              Primul brand la care se gândesc. Înaintea concurenței.
            </p>

            {/* Divider */}
            <hr
              className="mb-5"
              style={{ borderColor: "rgba(200,169,110,0.15)" }}
            />

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {autoritateFeatures.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "rgba(240,237,230,0.75)" }}
                >
                  <span
                    className="font-bold flex-shrink-0 mt-0.5"
                    style={{ color: "#c8a96e", fontSize: "14px" }}
                  >
                    ◈
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Ads note */}
            <p
              className="text-xs mb-4 leading-relaxed"
              style={{ color: "rgba(240,237,230,0.40)" }}
            >
              💡{" "}
              <strong style={{ color: "rgba(240,237,230,0.60)" }}>
                Bugetul de reclame nu e inclus
              </strong>{" "}
              — îl controlezi tu complet. Noi gestionăm campaniile.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="w-full block text-center text-sm font-semibold rounded-lg transition-all"
              style={{
                background: "transparent",
                color: "#c8a96e",
                border: "2px solid #c8a96e",
                padding: "12px 24px",
                minHeight: "48px",
                lineHeight: "24px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "rgba(200,169,110,0.15)";
                el.style.borderColor = "#e0c98a";
                el.style.color = "#e0c98a";
                el.style.boxShadow = "0 0 24px rgba(200,169,110,0.22)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "transparent";
                el.style.borderColor = "#c8a96e";
                el.style.color = "#c8a96e";
                el.style.boxShadow = "none";
              }}
            >
              Vreau să fiu AUTORITATE — hai să dominăm
            </a>

            {/* Scarcity */}
            <p
              className="text-xs text-center mt-3 font-medium"
              style={{ color: "#c8a96e", opacity: 0.80 }}
            >
              ◈ Locuri limitate: 5 clienți / lună
            </p>
          </div>
        </div>

        {/* ─── Guarantee Block ─── */}
        <div
          className="max-w-2xl mx-auto mt-12 rounded-2xl text-center relative overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(200,169,110,0.20)",
            padding: "48px 40px",
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.30)",
          }}
        >
          {/* Gold top accent */}
          <div
            className="absolute top-0 left-0 right-0"
            style={{
              height: "3px",
              background: "linear-gradient(90deg, #c8a96e 0%, #e0c98a 50%, #c8a96e 100%)",
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
                background: "rgba(200,169,110,0.10)",
              }}
            >
              <ShieldCheck
                size={40}
                style={{ color: "#c8a96e" }}
                strokeWidth={1.5}
              />
            </div>
          </div>

          <h4
            className="text-xl font-semibold mb-3"
            style={{ color: "#F0EDE6" }}
          >
            Dacă nu livrăm, plătești mai puțin. Simplu.
          </h4>

          <p
            className="text-sm leading-relaxed mb-6 max-w-lg mx-auto"
            style={{ color: "rgba(240,237,230,0.55)" }}
          >
            <strong style={{ color: "rgba(240,237,230,0.80)" }}>Creștere garantată:</strong>{" "}
            Dacă reach-ul organic nu crește cu 20% în primele 60 de zile, luna 3 e gratuită — automat, fără să ceri.
            <br className="mb-2" />
            <strong style={{ color: "rgba(240,237,230,0.80)" }}>Livrare garantată:</strong>{" "}
            Dacă întârziem cu conținutul, primești 10% reducere pe luna respectivă — automat, fără discuții.
            <br className="mb-2" />
            <strong style={{ color: "rgba(240,237,230,0.80)" }}>Libertate garantată:</strong>{" "}
            Fără contracte pe 12 luni. Anulezi cu 30 de zile preaviz, oricând. Nicio penalizare.
          </p>

          <ul className="flex flex-col items-center gap-2">
            {[
              "Fără contracte pe termen lung",
              "Poți opri oricând",
              "Setup fee: 0 RON",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm"
                style={{ color: "rgba(240,237,230,0.80)" }}
              >
                <span
                  className="font-bold text-base"
                  style={{ color: "#c8a96e" }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ─── Transparency note ─── */}
        <p
          className="text-center text-xs mt-6"
          style={{ color: "rgba(240,237,230,0.35)" }}
        >
          💡{" "}
          <strong style={{ color: "rgba(240,237,230,0.50)" }}>
            Bugetul de reclame nu e inclus în prețul pachetului
          </strong>{" "}
          — îl controlezi tu complet. Noi gestionăm campaniile; tu decizi cât investești în ads.
        </p>
      </div>
    </section>
  );
}
