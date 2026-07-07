"use client";

import Image from "next/image";
import { useState } from "react";

const heroPhotos = [
  "/images/Mountains-with-grass.jpg",
  "/images/Untitled-design-28.jpg",
];

// The live site swaps this photo on every page load — pick one at random
// client-side to match.
export function HeroBackground() {
  const [photo] = useState(
    () => heroPhotos[Math.floor(Math.random() * heroPhotos.length)]
  );

  return (
    <Image
      src={photo}
      alt=""
      fill
      priority
      className="object-cover"
      sizes="100vw"
    />
  );
}
