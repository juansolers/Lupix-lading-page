import Image from "next/image";
import { IconSpark } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-lupix-bg pt-16 pb-20 md:pt-24 md:pb-28"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-lupix-yellow/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-lupix-mint/20 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-lupix-violet/10 px-4 py-1.5 text-sm font-bold text-lupix-violet">
            <IconSpark className="h-4 w-4" />
            Encuentra la palabra. Encuentra la magia.
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-lupix-ink md:text-5xl">
            Te damos la palabra.{" "}
            <span className="text-lupix-violet">Encuéntrala tú</span>
          </h1>

          <p className="mt-6 max-w-md text-lg text-lupix-ink/70">
            Lupix te muestra un texto y te reta a encontrar la palabra
            escondida en él. Sin cronómetro encima: juega a tu ritmo y suma
            puntos por cada acierto.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="rounded-full bg-lupix-violet px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-lupix-violet/30 transition hover:bg-lupix-violet-dark"
            >
              Jugar gratis
            </a>
            <a
              href="#como-funciona"
              className="text-base font-bold text-lupix-ink/70 underline decoration-lupix-coral decoration-2 underline-offset-4 transition hover:text-lupix-ink"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-lupix-violet/10" />
          <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-2xl shadow-lupix-violet/10">
            {/*
              Reemplaza esta imagen por la que generes con el prompt
              "Hero" del README-landing.md, guardada como:
              /public/images/hero-lupix.png
            */}
            <Image
              src="/images/hero-lupix.png"
              alt="Lupix resaltando la palabra encontrada dentro de un texto, con puntos ganados"
              width={640}
              height={640}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
