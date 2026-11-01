import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
export default function NotFound() {
  return (
    <section className="container not-found">
      <span className="feature-icon blue">
        <Compass size={28} />
      </span>
      <span className="eyebrow">PÁGINA NÃO ENCONTRADA</span>
      <h1>
        Vamos voltar
        <br />
        ao que importa?
      </h1>
      <p>
        Esse endereço não está disponível. A página inicial pode ajudar você a
        encontrar o que procura.
      </p>
      <Link className="button" href="/">
        <ArrowLeft size={17} />
        Voltar ao início
      </Link>
    </section>
  );
}
