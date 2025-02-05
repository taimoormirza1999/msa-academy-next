import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./App.css";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MSA ACADEMY | The Animation Course Guide",
  description: "The Animation School Doing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
               <Script
        id="gtm-head"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
            j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KSX74F6L');
          `,
        }}
      />
       {/* <!-- Hotjar Tracking Code for https://msa-academy-com.vercel.app --> */}
       <Script
        id="hotjar-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:5271325,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-KSX74F6L"
    height="0"
    width="0"
    style={{ display: 'none', visibility: 'hidden' }}
  ></iframe>
</noscript>

    {/* <!-- End Google Tag Manager (noscript) --> */}
    <Script
        src="https://js.stripe.com/v3/"
        strategy="afterInteractive"
      />


<Script
        id="pinterest-tag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(e){if(!window.pintrk){window.pintrk = function () {
            window.pintrk.queue.push(Array.prototype.slice.call(arguments))};
            var n=window.pintrk;n.queue=[],n.version="3.0";
            var t=document.createElement("script");
            t.async=!0;t.src=e;
            var r=document.getElementsByTagName("script")[0];
            r.parentNode.insertBefore(t,r)
            }}("https://s.pinimg.com/ct/core.js");
            
            pintrk('load', '2613171424440', {em: 'taimoorhamza1999@gmail.com'});
            pintrk('page');
          `,
        }}
      />
    <noscript>
  <img
    height="1"
    width="1"
    style={{ display: 'none' }}
    alt=""
    src="https://ct.pinterest.com/v3/?event=init&tid=2613171424440&noscript=1"
  />
</noscript>
        {children}
      </body>
    </html>
  );
}
