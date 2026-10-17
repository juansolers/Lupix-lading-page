"use client";

import Script from "next/script";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export default function CtaBanner() {
  return (
    <section id="cta" className="bg-lupix-violet py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
          ¿Listo para tu primera ronda?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Juega gratis hoy: te damos el texto y la palabra, tú pones los
          puntos.
        </p>
        <a
          id="btn-cta-principal"
          href="#form-inscripcion"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: "clic_cta_principal_custom",
                cta_text: "Inscribirme",
                cta_location: "banner_principal",
              });
            }
          }}
          className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-base font-bold text-lupix-violet shadow-lg transition hover:bg-lupix-yellow"
        >
          Inscribirme
        </a>
        <div
          id="form-inscripcion"
          className="mt-8 rounded-2xl bg-white p-6 text-left shadow-xl md:p-8"
        >
          <div
            className="hs-form-frame"
            data-region="na1"
            data-form-id="400fd01b-e6b2-4771-917d-23867c283180"
            data-portal-id="52180194"
          />
        </div>
      </div>
      <Script
        src="https://js.hsforms.net/forms/embed/52180194.js"
        strategy="afterInteractive"
      />
    </section>
  );
}
