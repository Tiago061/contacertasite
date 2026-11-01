import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Database,
  FileDown,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
export function Privacy() {
  return (
    <section className="section privacy-section">
      <div className="container privacy-grid">
        <Reveal className="privacy-art">
          <div className="privacy-orbit orbit-one" />
          <div className="privacy-orbit orbit-two" />
          <div className="privacy-orbit orbit-three" />
          <div className="privacy-art-center">
            <ShieldCheck size={72} strokeWidth={1.2} />
            <span>
              <Check size={17} />
            </span>
          </div>
          <span className="privacy-art-node node-one">
            <Smartphone size={21} />
          </span>
          <span className="privacy-art-node node-two">
            <Database size={21} />
          </span>
          <span className="privacy-art-node node-three">
            <FileDown size={21} />
          </span>
          <div className="privacy-art-caption">
            <span />
            No seu dispositivo. Sob seu controle.
          </div>
        </Reveal>
        <Reveal className="privacy-copy">
          <span className="eyebrow">PRIVACIDADE, SEM LETRAS MIÚDAS</span>
          <h2>
            Suas informações
            <br />
            <span>merecem cuidado.</span>
          </h2>
          <p>
            Suas contas e pagamentos ficam armazenados no próprio dispositivo. O
            ContaCerta não se conecta ao seu banco e não sincroniza seus
            registros com a nuvem.
          </p>
          <p>
            Você pode exportar um backup e excluir seus dados quando quiser. Se
            desinstalar o app ou limpar o armazenamento, os registros podem ser
            apagados — por isso, guarde seus backups.
          </p>
          <Link className="text-link" href="/politica-de-privacidade/">
            Conheça nossa política de privacidade
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
