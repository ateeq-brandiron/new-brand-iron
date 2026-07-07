import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "../ui/Container";
import { footerNav, siteConfig } from "@/lib/site-config";
import { NewsletterForm } from "./NewsletterForm";
import { LogoMark } from "../ui/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../ui/SocialIcons";

export function Footer() {
  return (
    <footer className="text-white">
      <div className="bg-iron-tan px-6 pt-14 pb-6 text-center lg:px-8">
        <h2 className="balance mx-auto max-w-4xl text-3xl text-iron-leather-dark md:text-5xl">
          Forging Brands. Driving Revenue.&trade;
        </h2>
      </div>

      <div className="grid md:grid-cols-2">
        {/* Leather panel */}
        <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-iron-leather to-iron-leather-dark px-8 py-16 text-center">
          <LogoMark className="h-20 w-20 text-white/90" />
          <div>
            <p className="text-2xl font-black italic tracking-tight">
              BRAND IRON
            </p>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/70">
              Marketing
            </p>
          </div>
        </div>

        {/* Forest panel */}
        <div className="bg-gradient-to-br from-iron-forest-1 to-iron-forest-2 px-8 py-14">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-bold uppercase underline decoration-2 underline-offset-4 hover:text-iron-orange"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <div>
              <p className="font-bold uppercase">Brand Iron</p>
              <p className="mt-2 text-sm text-white/70">{siteConfig.address}</p>
              <a
                href={siteConfig.phoneHref}
                className="mt-2 flex items-center gap-2 text-sm font-bold hover:text-iron-orange"
              >
                <Phone className="h-4 w-4" />
                Ph: {siteConfig.phone}
              </a>
              <div className="mt-5 flex items-center gap-4">
                <a href={siteConfig.social.linkedin} aria-label="LinkedIn" className="hover:text-iron-orange">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a href={siteConfig.social.instagram} aria-label="Instagram" className="hover:text-iron-orange">
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a href={siteConfig.social.facebook} aria-label="Facebook" className="hover:text-iron-orange">
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a href={siteConfig.social.twitter} aria-label="Twitter" className="hover:text-iron-orange">
                  <TwitterIcon className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-white/60">
                Subscribe To Our Newsletter
              </p>
              <div className="mt-3">
                <NewsletterForm />
              </div>
              <ul className="mt-6 space-y-1.5">
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
                  <Link href="/portal" className="text-sm text-white/70 hover:text-iron-orange">
                    Client Portal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-iron-black py-4">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/50 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Brand Iron. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}
