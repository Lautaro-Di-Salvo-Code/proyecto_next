"use client";

import Link from "next/link";

const Pagina1 = () => {
  return (
    <section className="flex gap-4">

      <Link className="bg-[#0070f3] p-2 text-[#fff]" href="/about/about-me"> About</Link>
      <div className="text-[#0070f3] font-bold">Pagina</div>
    </section>
  );
};

export default Pagina1;
