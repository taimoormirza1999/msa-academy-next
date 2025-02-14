"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

const ScriptsLoader = () => {
  const [loadScripts, setLoadScripts] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadScripts(true);
    }, 8000);
  }, []);

  return (
    <>
      {loadScripts && (
        <>
          {/* Google Tag Manager */}
          <Script
            id="gtm-head"
            src="https://www.googletagmanager.com/gtm.js?id=GTM-KSX74F6L"
            strategy="afterInteractive"
          />
       {/* Hotjar Tracking */}
          <Script
            id="hotjar-script"
            src="https://static.hotjar.com/c/hotjar-5271325.js"
            strategy="lazyOnload"
          />
          
          {/* Pinterest Tag */}
          <Script
            id="pinterest-tag"
            src="https://s.pinimg.com/ct/core.js"
            strategy="afterInteractive"
          />
          
          {/* Stripe JS */}
          <Script
            id="stripe-script"
            src="https://js.stripe.com/v3/"
            strategy="lazyOnload"
          />

          {/* NoScript Fallback for GTM */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KSX74F6L"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        </>
      )}
    </>
  );
};

export default ScriptsLoader;