import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "../ui/Container";
import { footerNav, siteConfig } from "@/lib/site-config";
import { NewsletterForm } from "./NewsletterForm";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../ui/SocialIcons";

export function Footer() {
  return (
    <footer className="bg-iron-black text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="text-2xl font-black tracking-tight">
            BRAND<span className="text-iron-orange">IRON</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-white/60">
            {siteConfig.tagline}
          </p>
          <p className="mt-4 text-sm text-white/60">{siteConfig.address}</p>
          <a
            href={siteConfig.phoneHref}
            className="mt-2 flex items-center gap-2 text-sm font-bold text-white hover:text-iron-orange"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <div className="mt-6 flex items-center gap-4">
            <a href={siteConfig.social.linkedin} aria-label="LinkedIn" className="text-white/60 hover:text-iron-orange">
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a href={siteConfig.social.instagram} aria-label="Instagram" className="text-white/60 hover:text-iron-orange">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={siteConfig.social.facebook} aria-label="Facebook" className="text-white/60 hover:text-iron-orange">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href={siteConfig.social.twitter} aria-label="Twitter" className="text-white/60 hover:text-iron-orange">
              <TwitterIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/40">
            Site
          </h3>
          <ul className="mt-4 space-y-2.5">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/70 hover:text-iron-orange">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/40">
            Get Started
          </h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/ai-visibility-audit" className="text-sm text-white/70 hover:text-iron-orange">
                AI Visibility Audit
              </Link>
            </li>
            <li>
              <Link href="/capital-raise-deck-audit" className="text-sm text-white/70 hover:text-iron-orange">
                Capital Raise Deck Audit
              </Link>
            </li>
            <li>
              <Link href="/gtm-audit-review" className="text-sm text-white/70 hover:text-iron-orange">
                GTM Audit Review
              </Link>
            </li>
            <li>
              <Link href="/portal" className="text-sm text-white/70 hover:text-iron-orange">
                Client Portal
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-10">
        <Container className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/40">
            Subscribe To Our Newsletter
          </h3>
          <NewsletterForm />
        </Container>
      </div>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/40 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Brand Iron. All rights reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </Container>
      </div>
    </footer>
  );
}
