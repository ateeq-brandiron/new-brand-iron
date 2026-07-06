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
    <footer className="bg-iron-mauve text-white">
      <Container className="py-16">
        <nav className="flex flex-wrap gap-x-8 gap-y-2">
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-semibold underline decoration-2 underline-offset-4 hover:text-iron-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-bold uppercase">Brand Iron</p>
            <p className="mt-3 text-sm text-white/80">{siteConfig.address}</p>
            <a
              href={siteConfig.phoneHref}
              className="mt-2 flex items-center gap-2 text-sm font-bold hover:text-iron-black"
            >
              <Phone className="h-4 w-4" />
              Ph: {siteConfig.phone}
            </a>
            <div className="mt-5 flex items-center gap-4">
              <a href={siteConfig.social.linkedin} aria-label="LinkedIn" className="hover:text-iron-black">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.instagram} aria-label="Instagram" className="hover:text-iron-black">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.facebook} aria-label="Facebook" className="hover:text-iron-black">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.twitter} aria-label="Twitter" className="hover:text-iron-black">
                <TwitterIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-white/60">
              Get Started
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/ai-visibility-audit" className="text-sm hover:text-iron-black">
                  AI Visibility Audit
                </Link>
              </li>
              <li>
                <Link href="/capital-raise-deck-audit" className="text-sm hover:text-iron-black">
                  Capital Raise Deck Audit
                </Link>
              </li>
              <li>
                <Link href="/gtm-audit-review" className="text-sm hover:text-iron-black">
                  GTM Audit Review
                </Link>
              </li>
              <li>
                <Link href="/portal" className="text-sm hover:text-iron-black">
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-white/60">
              Subscribe To Our Newsletter
            </p>
            <div className="mt-3">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/20 py-5">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/70 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Brand Iron. All rights reserved.</p>
          <p className="font-semibold uppercase">{siteConfig.tagline}</p>
        </Container>
      </div>
    </footer>
  );
}
