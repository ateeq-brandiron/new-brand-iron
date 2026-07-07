import Image from "next/image";
import Link from "next/link";

// Floating lead-magnet trigger, present on every page of the source site.
export function GiftButton() {
  return (
    <Link
      href="/resources/resource-library"
      aria-label="Get free resources"
      className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
    >
      <Image src="/images/Gift-Icon.svg" alt="" width={50} height={50} />
    </Link>
  );
}
