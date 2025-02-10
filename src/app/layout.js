"use client"
import "./globals.css";
import "./App.css";
import Script from 'next/script';
import { useEffect, useState } from 'react';
import localFont from 'next/font/local';
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadScripts(true);
    }, 10000);
    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

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
    
        {children}
      </body>
    </html>
  );
}
