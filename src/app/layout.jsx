"use client"
import "./globals.css";
import "./App.css";
import Script from 'next/script';
import { Suspense, useEffect, useState } from 'react';
import localFont from 'next/font/local';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import BackgroundImage from "../assets/background.jpg";
import FAQ from "@/components/FAQ";
import LoaderWrapper from "@/components/utils/LoaderWrapper";
import Loader from "@/components/Loader";
import ScrollAnimation from "@/components/utils/ScrollAnimation";

const CocogooseMedium = localFont({
  src: '../../public/fonts/Cocogoose-Classic-Medium-trial.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-cocogoose-medium',
});

const CocogooseExtraBold = localFont({
  src: '../../public/fonts/Cocogoose-Classic-ExtraBold-trial.ttf',
  weight: '800',
  style: 'normal',
  variable: '--font-cocogoose-bold',
});

const ImpactCustom = localFont({
  src: '../../public/fonts/impact.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-impact',
});

const KozGoPr6NRegular = localFont({
  src: '../../public/fonts/KozGoPr6NRegular.woff',
  weight: '400',
  style: 'normal',
  variable: '--font-kozgopr',
});

const FranklinGothicMedium = localFont({
  src: '../../public/fonts/FranklinGothicMedium.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-franklin',
});

export default function RootLayout({ children }) {
  const [loadScripts, setLoadScripts] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning={true} className={`${CocogooseMedium.variable} ${CocogooseExtraBold.variable} ${ImpactCustom.variable} ${KozGoPr6NRegular.variable} ${FranklinGothicMedium.variable}`}>
      <body className={`antialiased`}>
      {loadScripts && (
        <>
          <Script
            id="gtm-head"
            src="https://www.googletagmanager.com/gtm.js?id=GTM-KSX74F6L"
            strategy="afterInteractive"
          />
          <Script
            id="hotjar-script"
            src="https://static.hotjar.com/c/hotjar-5271325.js"
            strategy="lazyOnload"
          />
          <Script
            id="pinterest-tag"
            src="https://s.pinimg.com/ct/core.js"
            strategy="afterInteractive"
          />
          <Script
            id="stripe-script"
            src="https://js.stripe.com/v3/"
            strategy="lazyOnload"
          />
          <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KSX74F6L"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        </>
      )}
       <div className="mx-0 relative bg-cover bg-center">
          <Image
            src={BackgroundImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
            className="absolute inset-0 -z-10"
          />
        <Navigation />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
