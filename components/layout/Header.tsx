"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Brand } from "@/components/ui/Brand";
import { navigation } from "@/lib/content";
export function Header() {
  const [open, setOpen] = useState(false),
    path = usePathname(),
    reduced = useReducedMotion(),
    toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Menu principal">
          {navigation.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link className="button button-small header-cta" href="/#baixar">
          <span className="cta-full">Baixar aplicativo</span>
          <span className="cta-mobile">Baixar app</span>
          <ArrowDown size={14} />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Menu mobile"
            className="mobile-menu"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.22 }}
          >
            {navigation.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <Link
              className="mobile-menu-cta"
              href="/#baixar"
              onClick={() => setOpen(false)}
            >
              Baixar aplicativo
              <ArrowDown size={17} />
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
