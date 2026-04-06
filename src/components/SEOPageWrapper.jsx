"use client";
import Navigation from "@/components/Navigation";
import FooterWrapper from "@/components/utils/FooterWrapper";

export default function SEOPageWrapper({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <FooterWrapper />
    </>
  );
}
