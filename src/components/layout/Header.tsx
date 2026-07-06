"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import { mainNav, siteConfig } from "@/lib/site-config";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-iron-line bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="shrink-0 text-2xl font-black tracking-tight text-iron-black">
          BRAND<span className="text-iron-orange">IRON</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav
            .filter((item) => item.label !== "Home")
            .map((item) => (
              <div
                key={item.href}
                className="group relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-bold uppercase tracking-wide text-iron-black hover:text-iron-orange"
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
            ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/portal"
            className="text-sm font-semibold text-iron-body hover:text-iron-orange"
          >
            Client Portal
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 text-sm font-bold text-iron-black hover:text-iron-orange"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <ButtonLink href="/contact">Book a Call</ButtonLink>
        </div>

        <button
          className="rounded-md p-2 text-iron-black lg:hidden"
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
                  className="block rounded-md px-2 py-2 font-semibold text-iron-black"
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
                        className="block rounded-md px-2 py-1.5 text-sm text-iron-body"
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
              className="block rounded-md px-2 py-2 font-semibold text-iron-body"
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
