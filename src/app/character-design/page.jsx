import SEOPageWrapper from "@/components/SEOPageWrapper";
import CharacterDesignClient from "@/components/CharacterDesignClient";

export const metadata = {
  metadataBase: new URL("https://msa-club.com"),
  title:
    "Character Design Course | Learn Animation Character Drawing | MSA Club",
  description:
    "Learn character design with MSA Club. Master animation character drawing, anime character design, cartoon character creation, and professional character art for animation studios.",
  keywords: [
    "character design course",
    "animation character design course",
    "character design",
    "animation character drawing",
    "anime character drawing course",
    "cartoon character course",
    "character art course",
    "MSA character design",
    "learn character design online",
    "character design for animation",
    "character design for beginners",
    "how to design animation characters",
  ].join(", "),
  alternates: {
    canonical: "https://msa-club.com/character-design",
  },
  openGraph: {
    siteName: "MSA-Club.com",
    locale: "en_US",
    type: "website",
    title: "Character Design Course | MSA Club",
    description:
      "Master animation character design with MSA Club. Learn from the artists behind My Story Animated.",
    url: "https://msa-club.com/character-design",
    images: [
      {
        url: "https://msa-club.com/msa-club-academy-animation-character-design-dubai-hero.jpg",
        width: 1200,
        height: 630,
        alt: "MSA Club Character Design Course",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Character Design Course | MSA Club",
    description:
      "Master animation character design from the team behind My Story Animated.",
    images: ["https://msa-club.com/msa-club-academy-animation-character-design-dubai-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function CharacterDesignPage() {
  return (
    <SEOPageWrapper>
      <CharacterDesignClient />
    </SEOPageWrapper>
  );
}
