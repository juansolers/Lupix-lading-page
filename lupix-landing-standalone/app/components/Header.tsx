"use client";

import Image from "next/image";
import { useState } from "react";
import { IconClose, IconMenu } from "./icons";

const NAV_LINKS = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#faq", label: "Preguntas" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/logo/lupix-icon.png"
            alt="Lupix"
            width={36}
            height={36}
            className="rounded-xl"
          />
          <span className="font-heading text-xl font-bold text-lupix-ink">
            Lup<span className="text-lupix-violet">ix</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-lupix-ink/70 transition hover:text-lupix-violet"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="rounded-full bg-lupix-violet px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-lupix-violet/30 transition hover:bg-lupix-violet-dark"
          >
            Probar gratis
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-lupix-ink md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-lupix-ink/80"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="rounded-full bg-lupix-violet px-5 py-2.5 text-center text-sm font-bold text-white"
            >
              Probar gratis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
