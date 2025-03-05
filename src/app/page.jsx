import { Metadata } from 'next';
import HomeClient from "@/components/HomeClient";

export const metadata = {
  title: "MSA Academy | Learn Animation & Character Design",
  description: "Master the art of animation and character design with MSA Academy. Professional courses in Blender, After Effects, and 3D animation. Join our global community of artists!",
  keywords: [
    "animation courses",
    "character design",
    "3D animation",
    "Blender tutorials",
    "After Effects courses",
    "animation academy",
    "digital art classes",
    "character animation",
    "MSA Academy",
    "online animation courses",
    "professional animation training",
    "character design course",
    "animation certification",
    "Dubai animation school",
    "UAE animation courses"
  ].join(", "),
  alternates: {
    canonical: 'https://msa-club.com'
  },
  openGraph: {
    title: "MSA Academy | Professional Animation & Character Design Training",
    description: "Transform your artistic vision into reality with MSA Academy's professional animation and character design courses. Learn from industry experts and join our global community.",
    images: [
      {
        url: 'https://msa-club.com/hero_banner.png',
        width: 1200,
        height: 630,
        alt: 'MSA Academy Animation Courses'
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function Home() {
  return <HomeClient />;
}
