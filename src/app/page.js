import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-coenter">
      <div className="flex flex-col align-items items-center justify-center h-screen max-w-2xl gap-9">
        <h1 className="text-4xl font-bold">Bem-vindoa Calculadora RPV</h1>
        <h2 className="text-xl font-bold">Projeto base Next.Js + Tailwind + shadcn + Integração Backend</h2>
        <p className="leading-relaxed-text-lg text-center">
          Esse projeto foi criado para demonstrar uma calculadora de operações matematica integrando frontend moderno com backend externo, utilizando as melhores praticas deo ecossistema Reac/Next.JS
        </p>
        <Button className={"cursor-pointer"}>Calcular</Button>
      </div>
    </div>
  );
}
