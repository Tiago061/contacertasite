import Image from "next/image";
import Link from "next/link";
export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="ContaCerta, página inicial"
      className={`brand ${light ? "brand-on-dark" : ""}`}
    >
      <Image src="/contacerta-symbol.svg" alt="" width={35} height={35} />
      <span>
        Conta<span>Certa</span>
      </span>
    </Link>
  );
}
