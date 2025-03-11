import "./globals.css";
import "./App.css";
import localFont from "next/font/local";
import Navigation from "@/components/Navigation";
import Image from "next/image";
// import BackgroundImage from "../assets/background.jpg";
import ScriptsLoader from "@/components/ScriptsLoader";
import FooterWrapper from "@/components/utils/FooterWrapper";
import SuppressErrors from "@/components/utils/SuppressErrors";
import Loading from "@/components/Loading";
import Menu from "@/components/Menu";
import ScreenProvider from "@/components/ScreenProvider";

const MenschTrialBlack = localFont({
  src: "../../public/fonts/MenschTrialBlack.otf",
  weight: "400",
  style: "normal",
  variable: "--font-mensch-trial-black",
  display: "swap",
});

const EastmanRomanTrialBlack = localFont({
  src: "../../public/fonts/EastmanRomanTrialBlack.otf",
  weight: "400",
  style: "normal",
  variable: "--font-eastroman-trial-black",
  display: "swap",
});

const EastmanRomanTrialDemiBold = localFont({
  src: "../../public/fonts/EastmanRomanTrialDemiBold.otf",
  weight: "400",
  style: "normal",
  variable: "--font-eastroman-trial-demibold",
  display: "swap",
});

const EastmanRomanTrialBold = localFont({
  src: "../../public/fonts/EastmanRomanTrialBold.otf",
  weight: "400",
  style: "normal",
  variable: "--font-eastroman-trial-bold",
  display: "swap",
});
// const CocogooseMedium = localFont({
//   src: '../../public/fonts/Cocogoose-Classic-Medium-trial.ttf',
//   weight: '400',
//   style: 'normal',
//   variable: '--font-cocogoose-medium',
// });

// const CocogooseExtraBold = localFont({
//   src: '../../public/fonts/Cocogoose-Classic-ExtraBold-trial.ttf',
//   weight: '800',
//   style: 'normal',
//   variable: '--font-cocogoose-bold',
// });

// const ImpactCustom = localFont({
//   src: '../../public/fonts/impact.ttf',
//   weight: '400',
//   style: 'normal',
//   variable: '--font-impact',
// });

// const KozGoPr6NRegular = localFont({
//   src: '../../public/fonts/KozGoPr6NRegular.woff',
//   weight: '400',
//   style: 'normal',
//   variable: '--font-kozgopr',
// });

// const FranklinGothicMedium = localFont({
//   src: '../../public/fonts/FranklinGothicMedium.ttf',
//   weight: '400',
//   style: 'normal',
//   variable: '--font-franklin',
// });

export const metadata = {
  manifest: "https://msa-club.com/manifest.json",
  title:
    "Animation Character Design Course | Master Character Creation | MSA Club",
  description:
    "Learn character animation and drawing with MSA Academy. Master Blender, After Effects, and 3D animation through expert-led courses. Join now for free resources and certification!",
  keywords: [
    "animation character course",
    "character animation course Blender",
    "character animation course After Effects",
    "cartoon character course",
    "animation character design course",
    "3D character animation course",
    "animation courses online",
    "animation courses in Dubai",
    "animation character drawing",
    "best online animation courses",
    "free online animation courses with certificates",
    "anime character drawing course",
    "anime animation course",
    "MSA Academy animation course",
    "MSA My Story Animated",
    "animation course for beginners",
    "animation jobs in Dubai",
  ].join(", "),
  generator: "MSA-Club.com",
  applicationName: "MSA-Club.com",
  referrer: "origin-when-cross-origin",
  creator: "Taimoor Hamza",
  publisher: "Artoul",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    siteName: "MSA-Club.com",
    locale: "en_US",
    type: "website",
    title:
      "Animation 3D Design Course | Master Character Creation | MSA Club",
    description:
      "Transform your artistic skills with our comprehensive Animation Character Design Course. Learn from industry experts and bring your characters to life. Enroll now!",
    images: [
      {
        url: "https://msa-club.com/logo.png",
        width: 800,
        height: 600,
        alt: "MSA Club Logo Image",
      },
      {
        url: "https://msa-club.com/hero_banner.png",
        width: 1800,
        height: 1600,
        alt: "MSA Club Logo Image",
      },
    ],
    authors: ["Taimoor Hamza"],
    locale: 'en_US',
    type: 'website',
    url: "https://msa-academy.com/",
  },

  twitter: {
    card: "summary_large_image",
    title: "MSA Academy | Master Anime & Character Animation",
    description:
      "Join MSA Academy's industry-leading animation courses and learn anime character design, 3D animation, and more. Start your journey today!",
    images: [
      {
        url: "https://msa-club.com/hero_banner.png",
        width: 1200,
        height: 630,
        alt: "MSA Academy Logo",
      },
    ],
    creator: "@msaacademy",
    site: "@msaacademy",
  },
  alternates: {
    canonical: "https://msa-club.com",
    languages: {
      'en-US': 'https://msa-club.com',
    },
  },
  verification: {
    google: ' XwcHgu0NYksA4p3lf8Xr_na4o6gCuLD55KaJ6KznLSk', // آپ کا Google Search Console verification ID
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${MenschTrialBlack.variable} ${EastmanRomanTrialBlack.variable} ${EastmanRomanTrialDemiBold.variable} ${EastmanRomanTrialBold.variable} `}
    >
      <head>
        <meta name="google-site-verification" content="XwcHgu0NYksA4p3lf8Xr_na4o6gCuLD55KaJ6KznLSk" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <ScriptsLoader />
      </head>
      <body>
        {/* NoScript Fallback for GTM */}
        <noscript>
          <iframe
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager NoScript"
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
          ></iframe>
        </noscript>
        <div className="mx-0 relative bg-cover bg-center overflow-hidden xl:overflow-x-hidden">
          <ScreenProvider>{children}</ScreenProvider>
        </div>
      </body>
    </html>
  );
}
