// NOTA: estas cifras son de ejemplo (placeholder) para mostrar el layout.
// Reemplázalas por datos reales antes de publicar, y si más adelante
// tienen testimonios o reseñas reales de usuarios, agrégalos aquí como
// tarjetas de cita — evita inventar nombres, empresas o cifras que Lupix
// no pueda respaldar.
const STATS = [
  { value: "+500", label: "rondas jugadas en pruebas" },
  { value: "0", label: "cronómetros en la app" },
  { value: "+10", label: "textos curados listos para jugar" },
];

export default function SocialProof() {
  return (
    <section className="bg-lupix-bg py-16">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-sm font-bold uppercase tracking-wide text-lupix-ink/50">
          Un juego pensado para jugarse sin afán
        </p>

        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-bold text-lupix-violet">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-lupix-ink/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
