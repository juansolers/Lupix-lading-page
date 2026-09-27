import Image from "next/image";

const STEPS = [
  "Lupix te muestra un texto curado y te dice la palabra que debes encontrar.",
  "Recorre el texto a tu ritmo, sin ningún cronómetro presionándote.",
  "Cuando la encuentras, se resalta al instante y sumas puntos a tu marcador.",
];

export default function Explainer() {
  return (
    <section id="como-funciona" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="order-2 overflow-hidden rounded-[2rem] border border-black/5 shadow-xl shadow-lupix-violet/10 md:order-1">
          {/*
            Reemplaza esta imagen por la que generes con el prompt
            "Explicación" del README-landing.md, guardada como:
            /public/images/lupix-explainer.png
          */}
          <Image
            src="/images/lupix-explainer.png"
            alt="Lupix guiando paso a paso una ronda: texto, palabra por encontrar y puntos ganados"
            width={640}
            height={520}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="font-heading text-3xl font-bold text-lupix-ink md:text-4xl">
            Tan simple como jugar una ronda
          </h2>
          <p className="mt-4 text-lupix-ink/70">
            Nada de configuraciones raras ni pasos extra. Lupix hace una sola
            cosa y la hace muy bien.
          </p>

          <ol className="mt-8 space-y-5">
            {STEPS.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lupix-mint/15 font-heading font-bold text-lupix-mint">
                  {i + 1}
                </span>
                <span className="pt-1 text-lupix-ink/80">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
