import type { Metadata } from "next";
import { AuditLanding } from "@/components/sections/AuditLanding";
import { getAuditPage } from "@/lib/audits-data";

const audit = getAuditPage("gtm-audit-review")!;

export const metadata: Metadata = {
  title: audit.title,
  description: audit.subheadline,
};

export default function GTMAuditReviewPage() {
  return <AuditLanding audit={audit} />;
}
