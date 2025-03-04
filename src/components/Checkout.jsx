"use client";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Bubbles from "@/assets/bubbles.svg";

const stripePromise = loadStripe(
  "pk_live_51Qhw1HLwU3D5iSNdsBrJTd7f7yj9esN4q1AHQq5mrIZ97b9zMIXZm2bGuGE4rWor9g834yX69XQaJyTK7YTZZoBv006QEY1UVB"
);
import { motion } from "framer-motion";
import ClippedCard from "./utils/ClippedCard";
import Button from "./utils/Button";
import useScreenStore from "@/store/useScreenStore";
import OuterBorderChildren from "./utils/OuterBorderChildren";
import Script from "next/script";

const Checkout = ({ showModal, setShowModal }) => {
  // const [showModal, setShowModal] = useState(false);
  const [loadScript, setLoadScript] = useState(true);
  const isMediumScreen = useScreenStore((state) => state.isMediumScreen);
  const isMobileMScreen = useScreenStore((state) => state.isMobileMScreen);
  const isMobileSScreen = useScreenStore((state) => state.isMobileSScreen);
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen);
  const packages = [
    {
      name: "Basic",
      description: "Basic plan with essential features.",
      price: 20,
      bubble:{classes:' -top-8 left-5 lg:-left-12'},
      includes: [
        { text: "ACCESS TO ALL DRAWING COURSES", status: 1 },
        {
          text: "CHANCE TO BE FEATURED IN MSA YOUTUBE CHANNEL VIDEOS",
          status: 1,
        },
        { text: "ACCESS TO ALL ANIMATION COURSES", status: 0 },
        {
          text: "ACCESS TO DOWNLOAD ALL HIGH-QUALITY WALLPAPERS, POSTERS, & EMOJIS",
          status: 0,
        },
        { text: "DISCOUNT ON ALL MSA MERCHANDISE", status: 0 },
        { text: "FEEDBACK DIRECTLY FROM MENTORS", status: 0 },
      ],
    },
    {
      name: "Premium",
      description: "Standard plan with more features.",
      price: 30,
      bubble:{classes:' -bottom-6 right-8 lg:-right-10 xl:-right-16'},
      includes: [
        { text: "Access to all drawing courses", status: 1 },
        { text: "Access to all animation courses", status: 1 },
        {
          text: "Access to download all high-quality wallpapers, posters, & emojis",
          status: 1,
        },
        { text: "Discount on all MSA merchandise", status: 1 },
        { text: "Feedback directly from mentors", status: 1 },
        {
          text: "Chance to be featured in MSA YouTube channel videos",
          status: 1,
        },
      ],
    },
  ];
  const handleCheckout = async (packageDetails) => {
    setShowModal(true);
    const body = {
      packageName: packageDetails?.name || "Default Name",
      description: packageDetails?.description || "Default Description",
      priceAmount: packageDetails?.price || 0,
    };
    console.log(body)
    // return body;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VITE_BACKEND_API}create-checkout-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    if (session.id) {
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (error) {
        console.error("Error during checkout redirection:", error);
      }
    } else {
      console.error("Failed to create session:", session.error);
    }
  };
  return (
    <div
      className="flex flex-col items-center mt-[64.5px] mb-[40.5px] md:mt-24 md:mb-16 lg:mb-0 lg:mt-[87.5px] justify-center w-85 md:w-90 mx-auto lg:w-1/2 2x:w-[75%] max-w-[1920px]"
      id="enroll-checkout"
    >
      {loadScript && (
        <Script
          id="stripe-script"
          src="https://js.stripe.com/v3/"
          strategy="lazyOnload"
        />
      )}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className={`relative ${isMobileSScreen?'w-[95%]':"w-[80%]"} w-[80%] md:w-[70%]`}>
         <OuterBorderChildren
                  width={isMediumScreen?555:isLargeScreen?555:385}
                  height={isLargeScreen?200:isMediumScreen?200:200}
                  value={30}
                  strokeWidth={3.6}
                  strokeColor="rgba(255, 0, 255, 0.8)"
                  clipId={`clip-privacypolicy}`}
                >
            <div className="flex flex-col items-center justify-center my-10" >
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
      <div className="grid gap-8 gap-y-2 md:gap-5 lg:gap-8  lg:grid-cols-1 xl:grid-cols-2 ">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`
              
            p-6 lg:px-8 relative mx-auto hover:shadow-2xl transition duration-300 text-center cursor-pointer`}
          >
            <img
              width={60}
              height={60}
              src={Bubbles.src}
              alt="Floating Bubble"
              className={`absolute ${pkg.bubble.classes} w-24 md:w-24 h-auto animate-pulse`}
            />
            <ClippedCard
              height={isMobileSScreen?610:isMobileMScreen?580:isMediumScreen?540:540}
              width={isMobileSScreen?290:isMobileMScreen?330:359.36}
              strokeColor={index == 0 ? "#8339FC" : "#FF00FF"}
              strokeWidth={2.1}
            >
              <div className="px-5 py-2 lg:py-1">
                <h2
                  className={`mt-[1rem] text-[13.32pt] text-base font-medium text-center uppercase ${
                    index == 0 ? "text-purple" : "text-pink200"
                  } -mb-3 font-primary text-left`}
                >
                  {pkg.name}
                </h2>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white font-bold text-[4.1rem] font-primary"
                >
                  ${pkg.price}
                </motion.span>
                <p className="text-white font-semibold text-xs text-[0.6rem] -mt-2 font-primary">
                  PER MONTH
                </p>
                <ul className="mt-[2.5rem] lg:mt-[3.5rem] mb-[0.7rem] lg:mb-[1.1rem]">
                  {pkg.includes.map((item, i) => (
                    <motion.li
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 * i }}
                      key={i}
                      className="flex  "
                    >
                      <span
                        className={`w-4 h-4 flex items-center justify-center rounded-full  font-primary ${
                          index == 0 ? "text-purple" : "text-pink200"
                        } mr-3 mt-2`}
                      >
                        ✓
                      </span>
                      <span
                        className={`${
                          item.status == 1
                            ? "text-white"
                            : " text-white text-opacity-30"
                        } text-sm uppercase my-1 text-left text-[0.84rem]  xl:text-[0.84rem] font-eastroman-trial-bold`}
                      >
                        {item.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <div className="animate-bounceSlow">
                  <Button height={97.39} width={225}  textSize={isMobileSScreen?"text-xl":"text-2xl"} onClick={()=>handleCheckout({name: pkg.name,
      description: pkg.description,
      price: pkg.price})}/>
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
