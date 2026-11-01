import { openGraphDefaults } from "@/lib/metadata";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/config";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ContaCerta — Suas contas em dia. Sua vida mais tranquila.",
    template: "%s | ContaCerta",
  },
  description: siteConfig.description,
  applicationName: "ContaCerta",
  alternates: { canonical: "/" },
  openGraph: {
    ...openGraphDefaults,
    type: "website",
    locale: "pt_BR",
    siteName: "ContaCerta",
    title: "ContaCerta — Suas contas em dia. Sua vida mais tranquila.",
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image.png"],
    title: "ContaCerta — Suas contas em dia.",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={GeistSans.className}>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <noscript>
          <style>
            {".reveal{opacity:1!important;transform:none!important}"}
          </style>
        </noscript>
      </body>
    </html>
  );
}
