"use client";

import Image from "next/image";
import { useState } from "react";
import { IconChevronDown } from "./icons";

const FAQS = [
  {
    question: "¿Yo elijo el texto donde voy a buscar?",
    answer:
      "No hace falta: cada ronda trae un texto curado por el equipo de Lupix, junto con la palabra que debes encontrar en él.",
  },
  {
    question: "¿Hay un tiempo límite para encontrar la palabra?",
    answer:
      "No. Juega a tu propio ritmo, sin cronómetro — lo único que suma son los puntos por cada acierto.",
  },
  {
    question: "¿Cómo funciona el puntaje?",
    answer:
      "Cada vez que encuentras la palabra correcta, sumas puntos a tu marcador. Entre más rondas juegues, más puntos acumulas.",
  },
  {
    question: "¿Necesito crear una cuenta para jugar?",
    answer:
      "No. Puedes empezar a jugar de inmediato, sin registros ni pasos extra.",
  },
  {
    question: "¿Lupix funciona en el celular?",
    answer:
      "Sí, Lupix está pensado para verse y sentirse igual de bien en el celular que en el computador.",
  },
  {
    question: "¿Cuesta algo jugar Lupix?",
    answer:
      "Lupix tiene una versión gratuita pensada para que cualquiera pueda empezar a jugar hoy mismo.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-lupix-bg py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="font-heading text-3xl font-bold text-lupix-ink md:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-lupix-ink/70">
            ¿No encuentras la respuesta que buscas? Escríbenos.
          </p>

          <div className="mt-8 divide-y divide-black/5 rounded-3xl border border-black/5 bg-white">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="px-6">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-heading font-bold text-lupix-ink">
                      {faq.question}
                    </span>
                    <IconChevronDown
                      className={`h-5 w-5 shrink-0 text-lupix-violet transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="pb-5 text-lupix-ink/70">{faq.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* "Parte derecha": panel decorativo de acompañamiento junto al FAQ */}
        <aside className="hidden flex-col items-center justify-center rounded-3xl bg-lupix-violet/5 p-8 text-center md:flex">
          <Image
            src="/logo/lupix-icon.png"
            alt="Mascota Lupix"
            width={96}
            height={96}
            className="rounded-2xl"
          />
          <p className="mt-6 font-heading text-lg font-bold text-lupix-ink">
            ¿Aún tienes dudas?
          </p>
          <p className="mt-2 text-sm text-lupix-ink/60">
            Hmm, esa respuesta no aparece por ningún lado. ¿Probamos
            escribiéndonos?
          </p>
          <a
            href="#cta"
            className="mt-6 rounded-full bg-lupix-violet px-6 py-3 text-sm font-bold text-white"
          >
            Contactar
          </a>
        </aside>
      </div>
    </section>
  );
}
