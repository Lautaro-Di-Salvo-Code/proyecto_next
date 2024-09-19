import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnotherSection from "./anotherSection/page";
import Pagina1 from "./about/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Esto es el titulo de la apgina",
  description: "Hecho en next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
      </head>
      <body className={`flex flex-col gap-5 w-full max-w-[800px] mx-auto`}>
        <header>
          <h1 className="text-center">Cabecera de la pagina</h1>
        </header>
        <main>{children}</main>
        <footer className="text-center">Fotter de la pagina</footer>
      </body>
    </html>
  );
}
