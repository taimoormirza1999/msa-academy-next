"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./App.css";
import Script from 'next/script';
import { useEffect } from 'react';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "MSA ACADEMY | The Animation Course Guide",
//   description: "The Animation School Doing",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    // Adding the external scripts dynamically inside useEffect ensures they only run on the client side
    const scriptTags = [
      {
        id: "gtm-head",
        src: "https://www.googletagmanager.com/gtm.js?id=GTM-KSX74F6L",
        async: true
      },
      {
        id: "hotjar-script",
        src: "https://static.hotjar.com/c/hotjar-5271325.js",
        async: true
      },
      {
        id: "pinterest-tag",
        src: "https://s.pinimg.com/ct/core.js",
        async: true
      },
      {
        id: "stripe-script",
        src: "https://js.stripe.com/v3/",
        async: true
      },
    ];

    scriptTags.forEach((script) => {
      const scriptElement = document.createElement('script');
      scriptElement.id = script.id;
      scriptElement.src = script.src;
      scriptElement.async = script.async;
      document.head.appendChild(scriptElement);
    });
  }, []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KSX74F6L"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
