import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Lupix — Encuentra la palabra. Encuentra la magia.",
  description:
    "Lupix te da una palabra y un texto curado: encuéntrala a tu ritmo, sin cronómetro, y suma puntos por cada acierto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} ${nunito.variable} bg-lupix-bg text-lupix-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
