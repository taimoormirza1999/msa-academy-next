'use client';
import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import Bubble from "@/assets/bubble.webp";
import LeftEllipse from "@/assets/LeftEllipse.webp";
import ElipseDown from "@/assets/ElipseDown.webp";
import Button from "@/components/utils/Button";
import ClippedCard from "@/components/utils/ClippedCard";
import useScrollHandler from "@/store/useScrollHandler";

const socials = [
  {
    href: "https://www.youtube.com/@MSAOfficial",
    icon: <FaYoutube className="text-red-500 text-3xl" />,
    name: "YouTube",
    desc: "Watch MSA animated stories and tutorials",
  },
  {
    href: "https://www.instagram.com/maboroshi.studio.art/",
    icon: <FaInstagram className="text-pink-500 text-3xl" />,
    name: "Instagram",
    desc: "Behind the scenes and character art",
  },
  {
    href: "https://www.tiktok.com/@maboroshi.studio.art",
    icon: <FaTiktok className="text-purple-400 text-3xl" />,
    name: "TikTok",
    desc: "Quick animation tips and clips",
  },
  {
    href: "https://www.facebook.com/MSAOfficial",
    icon: <FaFacebook className="text-blue-500 text-3xl" />,
    name: "Facebook",
    desc: "Join the MSA community",
  },
];

export default function ContactClient() {
  const handleScroll = useScrollHandler();

  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      <Image src={LeftEllipse} quality={50} alt="" loading="lazy" className="absolute top-0 left-0 w-[30rem] h-auto opacity-60 pointer-events-none" />
      <Image src={ElipseDown} quality={50} alt="" loading="lazy" className="absolute top-[30rem] -right-40 w-[30rem] h-auto opacity-60 pointer-events-none" />
      <Image src={LeftEllipse} quality={50} alt="" loading="lazy" className="absolute bottom-0 left-0 w-[30rem] h-auto opacity-40 pointer-events-none" />
      <Image src={Bubble} quality={50} alt="" loading="lazy" className="absolute top-20 right-10 w-12 md:w-20 h-auto animate-pulse pointer-events-none" />
      <Image src={Bubble} quality={50} alt="" loading="lazy" className="absolute top-[40rem] left-5 w-10 md:w-16 h-auto animate-pulse pointer-events-none" />
      <Image src={Bubble} quality={50} alt="" loading="lazy" className="absolute bottom-40 right-20 w-8 md:w-14 h-auto animate-pulse pointer-events-none" />

      <div className="w-90 max-w-5xl font-eastroman-trial-bold p-6 lg:p-8 mt-28 mx-auto mb-5 relative z-10">
        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 font-primary">
          Contact <span className="bg-gradient-to-r from-purple to-pink200 bg-clip-text text-transparent">MSA Club</span>
        </h1>
        <p className="text-gray-50 text-lg mb-12 max-w-2xl">
          Have questions about our animation courses, need help with enrollment,
          or want to explore a partnership? We would love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <ClippedCard width={500} height={180} value={15}>
            <div className="bg-black w-full h-full p-6 flex flex-col justify-center">
              <h2 className="font-primary text-xl font-semibold text-white mb-2">General Inquiries</h2>
              <p className="text-gray-50 text-sm mb-3">
                For questions about courses, enrollment, certificates, or anything else related to MSA Club.
              </p>
              <a href="mailto:info@msa-club.com" className="text-pink200 font-primary text-sm">info@msa-club.com</a>
            </div>
          </ClippedCard>

          <ClippedCard width={500} height={180} value={15}>
            <div className="bg-black w-full h-full p-6 flex flex-col justify-center">
              <h2 className="font-primary text-xl font-semibold text-white mb-2">Partnerships & Business</h2>
              <p className="text-gray-50 text-sm mb-3">
                Interested in collaborating with MSA Club? Reach out for sponsorships, brand partnerships, or business opportunities.
              </p>
              <a href="mailto:info@msa-club.com" className="text-pink200 font-primary text-sm">info@msa-club.com</a>
            </div>
          </ClippedCard>
        </div>

        <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mt-4 font-primary">
          Follow MSA on Social Media
        </h2>
        <p className="text-gray-50 mb-6">
          Stay updated with the latest courses, animation tips, and community highlights.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {socials.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer">
              <ClippedCard width={500} height={80} value={10}>
                <div className="bg-black w-full h-full px-6 flex items-center gap-4">
                  {s.icon}
                  <div>
                    <p className="font-semibold text-white font-primary">{s.name}</p>
                    <p className="text-gray-50 text-sm">{s.desc}</p>
                  </div>
                </div>
              </ClippedCard>
            </a>
          ))}
        </div>

        <div className="text-center py-8">
          <p className="text-gray-50 mb-6 font-primary">
            Want to explore our courses before reaching out?
          </p>
          <Link href="/">
            <Button width={250} height={70} text="View Courses" textSize="text-xl" navButton={true} />
          </Link>
        </div>
      </div>
    </main>
  );
}
