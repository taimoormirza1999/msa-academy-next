'use client';
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Bubbles from "@/assets/bubbles.svg";
import { motion, useReducedMotion } from "framer-motion";
import ClippedCard from "./utils/ClippedCard";
import Button from "./utils/Button";
import useScreenStore from "@/store/useScreenStore";
import OuterBorderChildren from "./utils/OuterBorderChildren";
import Script from "next/script";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_VITE_STRIPE_PUBLIC_KEY);

const Checkout = ({ showModal, setShowModal }) => {
  const [loadScript] = useState(true);
  const reduceMotion = useReducedMotion();
  const isMediumScreen = useScreenStore((state) => state.isMediumScreen);
  const isMobileMScreen = useScreenStore((state) => state.isMobileMScreen);
  const isMobileSScreen = useScreenStore((state) => state.isMobileSScreen);
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen);

  const packages = [
    {
      name: "Basic",
      description: "Basic plan with essential features.",
      price: 20,
      bubble: { classes: "-top-8 left-5 lg:-left-12" },
      includes: [
        { text: "ACCESS TO ALL DRAWING COURSES", status: 1 },
        { text: "CHANCE TO BE FEATURED IN MSA YOUTUBE CHANNEL VIDEOS", status: 1 },
        { text: "ACCESS TO ALL ANIMATION COURSES", status: 0 },
        { text: "ACCESS TO DOWNLOAD ALL HIGH-QUALITY WALLPAPERS, POSTERS, & EMOJIS", status: 0 },
        { text: "DISCOUNT ON ALL MSA MERCHANDISE", status: 0 },
        { text: "FEEDBACK DIRECTLY FROM MENTORS", status: 0 },
      ],
    },
    {
      name: "Premium",
      description: "Standard plan with more features.",
      price: 30,
      bubble: { classes: "-bottom-6 right-8 lg:-right-10 xl:-right-16" },
      includes: [
        { text: "Access to all drawing courses", status: 1 },
        { text: "Access to all animation courses", status: 1 },
        { text: "Access to download all high-quality wallpapers, posters, & emojis", status: 1 },
        { text: "Discount on all MSA merchandise", status: 1 },
        { text: "Feedback directly from mentors", status: 1 },
        { text: "Chance to be featured in MSA YouTube channel videos", status: 1 },
      ],
    },
  ];

  const handleCheckout = async (pkg) => {
    setShowModal(true);
    const body = {
      packageName: pkg.name,
      description: pkg.description,
      priceAmount: pkg.price,
    };
    const response = await fetch(
      `/api/create-checkout-session`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    if (session.id) {
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId: session.id });
      if (error) console.error(error);
    } else {
      console.error(session.error);
    }
  };

  return (
    <div
      className="flex flex-col items-center mt-[64.5px] mb-[40.5px] md:mt-24 md:mb-16 lg:mb-0 lg:mt-[87.5px] justify-center w-85 md:w-90 mx-auto xl:w-1/2 2x:w-[75%] max-w-[1920px]"
      id="enroll-checkout"
    >
      {loadScript && (
        <Script id="stripe-script" src="https://js.stripe.com/v3/" strategy="worker" />
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className={`${isMobileSScreen ? "w-[95%]" : "w-[80%]"} mx-auto md:w-[70%] relative`}>            
            <OuterBorderChildren
              width={isMediumScreen ? 555 : isLargeScreen ? 555 : 385}
              height={200}
              value={30}
              strokeWidth={3.6}
              strokeColor="rgba(255, 0, 255, 0.8)"
              clipId="clip-privacypolicy"
            >
              <div className="flex flex-col items-center justify-center my-10">
                <h2 className="text-white text-2xl text-center font-primary">
                  Redirecting to Secure Checkout...
                </h2>
                <p className="text-white text-sm text-center mt-2 font-primary">
                  Please wait while we process your request.
                </p>
                <div className="flex justify-center my-5">
                  <div className="w-10 h-10 border-4 border-white border-opacity-90 rounded-full border-t-[#ff00ff]/90 animate-spin"></div>
                </div>
              </div>
            </OuterBorderChildren>
          </div>
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-2">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="p-6 lg:px-8 relative mx-auto hover:shadow-2xl transition duration-300 text-center cursor-pointer"
          >
            <img
              width={60}
              height={60}
              src={Bubbles.src}
              alt="Floating Bubble"
              className={`absolute ${pkg.bubble.classes} w-24 md:w-24 h-auto animate-pulse`}
            />

            <ClippedCard
              width={isMobileSScreen ? 290 : isMobileMScreen ? 330 : 359.36}
              height={isMobileSScreen ? 620 : isMobileMScreen ? 590 : isMediumScreen ? 540 : 540}
              strokeColor={index === 0 ? "#8339FC" : "#FF00FF"}
              strokeWidth={2.1}
            >
              <div className="px-5 py-2 lg:py-1">
                <h2 className={`mt-4 text-base font-medium uppercase ${index === 0 ? "text-purple" : "text-pink200"} font-primary`}>{pkg.name}</h2>

                {reduceMotion ? (
                  <span className="text-white font-bold text-[4.1rem] font-primary">\${pkg.price}</span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white font-bold text-[4.1rem] font-primary"
                  >
                    ${pkg.price}
                  </motion.span>
                )}

                <p className="text-white font-semibold text-xs -mt-2 font-primary">PER MONTH</p>

                <ul className="mt-6 mb-4">
                  {pkg.includes.map((item, i) => (
                    reduceMotion ? (
                      <li key={i} className="flex">
                        <span className={`w-4 h-4 flex items-center justify-center rounded-full mr-3 mt-2 ${index === 0 ? "text-purple" : "text-pink200"}`}>✓</span>
                        <span className={`text-sm uppercase text-left font-eastroman-trial-bold mt-2${item.status === 1 ? "text-white" : "text-white text-opacity-30"}`}>{item.text}</span>
                      </li>
                    ) : (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 * i }}
                        className="flex"
                      >
                        <span className={`w-4 h-4 flex items-center justify-center rounded-full mr-3 mt-2 ${index === 0 ? "text-purple" : "text-pink200"}`}>✓</span>
                        <span className={`text-sm uppercase text-left font-eastroman-trial-bold mt-2 ${item.status === 1 ? "text-white" : "text-white text-opacity-30"}`}>{item.text}</span>
                      </motion.li>
                    )
                  ))}
                </ul>

                <div className="animate-bounceSlow">
                  <Button
                    text="Select Plan"
                    width={225}
                    height={97.39}
                    textSize={(isMobileSScreen || (isMobileMScreen+5)) ? "text-lg" : "text-2xl"}
                    onClick={() => handleCheckout(pkg)}
                  />
                </div>
              </div>
            </ClippedCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
