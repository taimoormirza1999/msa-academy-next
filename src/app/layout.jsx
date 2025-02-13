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

  useEffect(() => {
    window.__lc = window.__lc || {};
    window.__lc.license = 19031842;
    window.__lc.integration_name = "manual_onboarding";
    window.__lc.product_name = "livechat";
    
    (function (n, t, c) {
      function i(n) {
        return e._h ? e._h.apply(null, n) : e._q.push(n);
      }
      var e = {
        _q: [],
        _h: null,
        _v: "2.0",
        on: function () {
          i(["on", c.call(arguments)]);
        },
        once: function () {
          i(["once", c.call(arguments)]);
        },
        off: function () {
          i(["off", c.call(arguments)]);
        },
        get: function () {
          if (!e._h)
            throw new Error("[LiveChatWidget] You can't use getters before load.");
          return i(["get", c.call(arguments)]);
        },
        call: function () {
          i(["call", c.call(arguments)]);
        },
        init: function () {
          var n = t.createElement("script");
          n.async = !0;
          n.type = "text/javascript";
          n.src = "https://cdn.livechatinc.com/tracking.js";
          t.head.appendChild(n);
        },
      };
      !n.__lc.asyncInit && e.init(), (n.LiveChatWidget = n.LiveChatWidget || e);
    })(window, document, [].slice);
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
          {/* <Suspense fallback={<Loader />}>
                <ScrollAnimation>
                  <LoaderWrapper>
                    <FAQ />
                  </LoaderWrapper>
                </ScrollAnimation>
              </Suspense> */}
        <Footer />
        </div>
      </body>
    </html>
  );
}
