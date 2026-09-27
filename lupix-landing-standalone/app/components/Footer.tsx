import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-lupix-ink/60 md:flex-row">
        <div className="flex items-center gap-2">
          <Image
            src="/logo/lupix-icon-mono.png"
            alt="Lupix"
            width={28}
            height={28}
            className="opacity-70"
          />
          <span className="font-heading font-bold text-lupix-ink">Lupix</span>
        </div>
        <p>Encuentra la palabra. Encuentra la magia.</p>
        <p>© {new Date().getFullYear()} Lupix. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
