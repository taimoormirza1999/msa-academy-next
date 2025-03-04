"use client";
import React, { Suspense, useEffect, useState } from "react";
import Loader from "../Loader";
import ScrollAnimation from "./ScrollAnimation";
import LoaderWrapper from "./LoaderWrapper";
import FAQ from "../FAQ";
import { EnrollmentToast } from "../EnrollmentToast";
import Footer from "../Footer";

export default function FooterWrapper() {
  const [showToast, setShowToast] = useState(true);
  const names = ["Mark", "Rachel", "Emma", "Sophia", "Liam", "Olivia", "Taimoor", "Thomas", 'Jonathon'];
  const [currentName, setCurrentName] = useState(names[0]);
  const [joinTime, setjoinTime] = useState(1);
  const toastDelay = 10000; 
  const repeatInterval = 30000;
  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      setShowToast(true);
      setCurrentName(names[Math.floor(Math.random() * names.length)]);
      setjoinTime(Math.random() * 5)
      const interval = setInterval(() => {
        setCurrentName(names[Math.floor(Math.random() * names.length)]);
        setjoinTime(Math.random() * 5)
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
          {/* <EnrollmentToast
            name={currentName}
            courseName="Character Animation Design Course"
            timestamp={`About ${Math.round(joinTime)} hours ago`}
            onDismiss={() => setShowToast(false)}
            duration={10000000}
          /> */}
        </Suspense>
    )} 
      <Footer />
    </>
  );
}
