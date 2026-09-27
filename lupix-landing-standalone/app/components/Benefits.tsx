import { IconBolt, IconSmile, IconTarget } from "./icons";

const BENEFITS = [
  {
    icon: IconTarget,
    title: "Retos curados para ti",
    description:
      "Cada partida trae un texto elegido por el equipo de Lupix y una palabra por encontrar. No tienes que buscar ni pegar nada: solo abrir y jugar.",
  },
  {
    icon: IconSmile,
    title: "Sin reloj en contra",
    description:
      "Aquí no hay cronómetro presionándote. Recorre el texto con calma, a tu propio ritmo, hasta dar con la palabra.",
  },
  {
    icon: IconBolt,
    title: "Suma puntos con cada acierto",
    description:
      "Cada palabra encontrada suma a tu puntaje, para que siempre quieras jugar una ronda más.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-3xl font-bold text-lupix-ink md:text-4xl">
            Un juego pensado para jugarse relajado
          </h2>
          <p className="mt-4 text-lupix-ink/70">
            Nada de presión ni cronómetros. Solo tú, un texto y la palabra que
            te toca encontrar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-3xl border border-black/5 bg-lupix-bg p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lupix-violet/10 text-lupix-violet">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-heading text-xl font-bold text-lupix-ink">
                {title}
              </h3>
              <p className="mt-3 text-lupix-ink/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
