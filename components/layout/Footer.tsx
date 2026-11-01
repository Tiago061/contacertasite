import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
import { Brand } from "@/components/ui/Brand";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Brand />
          <p>
            Mais clareza nas contas.
            <br />
            Mais espaço para viver.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <span>EXPLORE</span>
            <Link href="/#funcionalidades">Funcionalidades</Link>
            <Link href="/#como-funciona">Como funciona</Link>
            <Link href="/#perguntas">Perguntas frequentes</Link>
          </div>
          <div>
            <span>CONTACERTA</span>
            <Link href="/politica-de-privacidade/">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso/">Termos de Uso</Link>
            <Link href="/contato/">
              Contato
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} ContaCerta. Todos os direitos reservados.
        </span>
        <span>
          Organização para uma vida mais leve.
          <Heart size={12} />
        </span>
      </div>
    </footer>
  );
}
