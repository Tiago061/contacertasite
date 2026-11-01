const secureUrl = (value?: string, hosts?: string[]) => {
  if (!value?.trim()) return "";
  try {
    const url = new URL(value);
    return url.protocol === "https:" && (!hosts || hosts.includes(url.hostname))
      ? url.toString()
      : "";
  } catch {
    return "";
  }
};
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "";
export const siteConfig = {
  name: "ContaCerta",
  url: secureUrl(process.env.NEXT_PUBLIC_SITE_URL) || "http://localhost:3000",
  googlePlayUrl: secureUrl(process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL, [
    "play.google.com",
  ]),
  appStoreUrl: secureUrl(process.env.NEXT_PUBLIC_APP_STORE_URL, [
    "apps.apple.com",
  ]),
  contactEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : "",
  contactEndpoint: secureUrl(process.env.NEXT_PUBLIC_CONTACT_ENDPOINT),
  description:
    "Organize suas contas, acompanhe vencimentos e registre pagamentos. Mais clareza para uma vida financeira mais tranquila, com o ContaCerta.",
};
