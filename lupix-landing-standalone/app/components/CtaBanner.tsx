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
        <div className="mt-8">
          <a
            href="#"
            className="inline-block rounded-full bg-white px-8 py-4 text-base font-bold text-lupix-violet shadow-lg transition hover:bg-lupix-yellow"
          >
            Jugar gratis
          </a>
        </div>
      </div>
    </section>
  );
}
