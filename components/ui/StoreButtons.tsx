import { ArrowUpRight, Smartphone, Play } from "lucide-react";
import { siteConfig } from "@/lib/config";
export function StoreButtons({
  variant = "hero",
}: {
  variant?: "hero" | "download";
}) {
  return (
    <div className={`store-buttons store-${variant}`}>
      {[
        {
          platform: "Android",
          label: variant === "hero" ? "Baixar para Android" : "Google Play",
          url: siteConfig.googlePlayUrl,
          Icon: Play,
        },
        {
          platform: "iPhone",
          label: variant === "hero" ? "Baixar para iPhone" : "App Store",
          url: siteConfig.appStoreUrl,
          Icon: Smartphone,
        },
      ].map(({ platform, label, url, Icon }) => {
        const content = (
          <>
            <Icon aria-hidden="true" />
            <span>
              <small>{url ? "Disponível para você" : "EM BREVE"}</small>
              <strong>{label}</strong>
            </span>
            {url && <ArrowUpRight size={17} />}
          </>
        );
        return url ? (
          <a
            key={platform}
            className="store-button"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Baixar ContaCerta para ${platform}`}
          >
            {content}
          </a>
        ) : (
          <button
            key={platform}
            className="store-button"
            disabled
            aria-label={`${label}, em breve`}
          >
            {content}
          </button>
        );
      })}
    </div>
  );
}
export function Platforms() {
  return (
    <div className="platforms">
      <span>
        <Smartphone size={14} /> Android e iOS
      </span>
      <i />
      <span>Feito para o seu dia a dia</span>
    </div>
  );
}
