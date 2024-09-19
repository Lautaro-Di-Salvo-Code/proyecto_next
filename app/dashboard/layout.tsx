import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layout",
  description: "Layout de la pagina",
};


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#879dcc] w-full max-w-[800px] mx-auto p-4 m-3">
      <header className="text-center"> Header de la pagina layout</header>
      <h1 className="text-center">Formulaio del layout</h1>
      {children}
      <form className="flex flex-col gap-2 w-[200px] mx-auto">
        <input type="text" name="" id="" />
        <input type="password" name="" id="" />
        <button className="bg-[#0070f3] hover:bg-[#388ef0] p-1" type="submit" >Enviar</button>
      </form>
      <footer className="text-center">Fotter de la pagina layout</footer>
    </div>
  );
};

export default layout;
