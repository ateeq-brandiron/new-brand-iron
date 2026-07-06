import type { Metadata } from "next";
import { AuditLanding } from "@/components/sections/AuditLanding";
import { getAuditPage } from "@/lib/audits-data";

const audit = getAuditPage("capital-raise-deck-audit")!;

export const metadata: Metadata = {
  title: audit.title,
  description: audit.subheadline,
};

export default function CapitalRaiseDeckAuditPage() {
  return <AuditLanding audit={audit} />;
}
