import { Check } from "lucide-react";
import { StoreButtons } from "@/components/ui/StoreButtons";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/config";
export function Download() {
  const available = siteConfig.googlePlayUrl || siteConfig.appStoreUrl;
  return (
    <section id="baixar" className="download-section">
      <div className="container">
        <Reveal className="download-panel">
          <div className="download-decoration" aria-hidden="true">
            <Check size={310} strokeWidth={1} />
          </div>
          <div className="eyebrow">
            <span />
            UMA VIDA MAIS LEVE COMEÇA NOS DETALHES
          </div>
          <h2>
            Comece hoje a<br />
            organizar suas contas.
          </h2>
          <p>
            Mais clareza sobre seus vencimentos,
            <br />
            menos surpresas no fim do mês.
          </p>
          <StoreButtons variant="download" />
          {!available && (
            <span className="download-note">
              Em breve na Google Play e na App Store.
              <br />
              Os links oficiais serão disponibilizados aqui.
            </span>
          )}
        </Reveal>
      </div>
    </section>
  );
}
