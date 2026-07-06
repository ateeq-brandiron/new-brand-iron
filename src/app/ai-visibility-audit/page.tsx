import type { Metadata } from "next";
import { AuditLanding } from "@/components/sections/AuditLanding";
import { getAuditPage } from "@/lib/audits-data";

const audit = getAuditPage("ai-visibility-audit")!;

export const metadata: Metadata = {
  title: audit.title,
  description: audit.subheadline,
};

export default function AIVisibilityAuditPage() {
  return <AuditLanding audit={audit} />;
}
