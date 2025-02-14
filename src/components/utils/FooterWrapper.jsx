"use client";
import React, { Suspense, useEffect, useState } from "react";
import Loader from "../Loader";
import ScrollAnimation from "./ScrollAnimation";
import LoaderWrapper from "./LoaderWrapper";
import FAQ from "../FAQ";
import { EnrollmentToast } from "../EnrollmentToast";
import Footer from "../Footer";

export default function FooterWrapper() {
  const [showToast, setShowToast] = useState(false);
  const names = ["Abhay", "John", "Emma", "Sophia", "Liam", "Olivia"];
  const [currentName, setCurrentName] = useState(names[0]);
  const toastDelay = 10000; 
  const repeatInterval = 10000;
  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      setShowToast(true);
      setCurrentName(names[Math.floor(Math.random() * names.length)]);
      
      const interval = setInterval(() => {
        setCurrentName(names[Math.floor(Math.random() * names.length)]);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      }, repeatInterval + 5000); 

      return () => clearInterval(interval);
    }, toastDelay);

    return () => clearTimeout(firstTimeout);
  }, []);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ScrollAnimation>
          <LoaderWrapper>
            <FAQ />
          </LoaderWrapper>
        </ScrollAnimation>
      </Suspense>
      {showToast && (
        <Suspense fallback={<Loader />}>
          <EnrollmentToast
            name={currentName}
            courseName="Character Animation Design Course"
            timestamp="About 17 hours ago"
            onDismiss={() => setShowToast(false)}
            duration={10000}
          />
        </Suspense>
    )} 
      <Footer />
    </>
  );
}
