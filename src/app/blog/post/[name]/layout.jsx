import Navigation from "@/components/Navigation";
import FooterWrapper from "@/components/utils/FooterWrapper";
import React from "react";

export default function layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <FooterWrapper />
    </>
  );
}
