"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import clsx from "clsx";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { mainNav, siteConfig } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !mobileOpen;

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const navItems = mainNav.filter((item) => item.label !== "Home");

  return (
    <header
      className={clsx(
        "z-50 w-full transition-colors duration-300",
        isHome ? "absolute inset-x-0 top-0" : "sticky top-0",
        transparent ? "bg-transparent" : "border-b border-iron-line bg-white/95 backdrop-blur"
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className={transparent ? "text-white" : "text-iron-black"}>
          <Logo />
        </Link>

        <nav className="hidden items-center lg:flex">
          {navItems.map((item, i) => (
            <div key={item.href} className="flex items-center">
              {i > 0 ? (
                <span
                  className={clsx(
                    "mx-2 text-sm",
                    transparent ? "text-white/40" : "text-iron-line"
                  )}
                >
                  |
                </span>
              ) : null}
              <div
                className="group relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={clsx(
                    "flex items-center gap-1 py-2 text-sm font-bold uppercase tracking-wide",
                    transparent
                      ? "text-white text-shadow-heavy hover:text-iron-orange"
                      : "text-iron-black hover:text-iron-orange"
                  )}
                >
                  {item.label}
                  {item.children ? (
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden />
                  ) : null}
                </Link>
                {item.children && openDropdown === item.label ? (
                  <div className="absolute left-0 top-full w-72 border border-iron-line bg-white p-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm font-medium text-iron-black hover:bg-iron-offwhite hover:text-iron-orange"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/portal"
            className={clsx(
              "text-sm font-semibold",
              transparent ? "text-white/80 text-shadow-heavy hover:text-white" : "text-iron-body hover:text-iron-orange"
            )}
          >
            Client Portal
          </Link>
          <a
            href={siteConfig.phoneHref}
            className={clsx(
              "flex items-center gap-2 text-sm font-bold",
              transparent ? "text-white text-shadow-heavy" : "text-iron-black hover:text-iron-orange"
            )}
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <ButtonLink
            href="/contact"
            variant={transparent ? "inverse" : "primary"}
          >
            Book a Call
          </ButtonLink>
        </div>

        <button
          className={clsx("p-2 lg:hidden", transparent ? "text-white" : "text-iron-black")}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {mobileOpen ? (
        <div className="border-t border-iron-line bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-2 py-2 font-bold uppercase text-iron-black"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="ml-4 flex flex-col gap-0.5 border-l border-iron-line pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-2 py-1.5 text-sm text-iron-body"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Link
              href="/portal"
              className="block px-2 py-2 font-semibold text-iron-body"
              onClick={() => setMobileOpen(false)}
            >
              Client Portal
            </Link>
            <ButtonLink href="/contact" className="mt-3">
              Book a Call
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
