"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import ClippedBtn from "./utils/ClippedImageBtn";
import OutlineTextEffect from "./utils/OutlineTextEffect";
import SectionWrapper from "./SectionWrapper";
import useScreenStore from "@/store/useScreenStore";

const FAQ = () => {
  const isLargeScreen = useScreenStore((state) => state.isLargeScreen);

  const faqs = [
    {
      question: "What is the refund policy?",
      answer:
        "Our refund policy allows you to request a refund within 30 days of purchase.",
      answerwidth: isLargeScreen?750:350,
      answerheight: isLargeScreen?60:100,
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact support through our help center or by emailing contact@msa-club.com.",
      answerwidth: isLargeScreen?850:350,
      answerheight: isLargeScreen?60:100,
    },
    {
      question: "Are there any discounts?",
      answer:
        "Yes, we offer a 20% discount for students with valid identification.",
      answerwidth: isLargeScreen?670:300,
      answerheight: isLargeScreen?60:100,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 pt-7 lg:py-24 overflow-hidden px-10">
      <SectionWrapper>
        <OutlineTextEffect title={"Frequently Asked"} />
        <div className="my-2">
          <OutlineTextEffect title={"Questions"} />
        </div>
        <div className="ml-auto flex flex-col items-center my-10 space-y-4 lg:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full max-w-lg flex flex-col items-center"
            >
              <button className="cursor-pointer" onClick={() => toggleFAQ(index)}>
                <ClippedBtn
                  text={faq.question}
                  width={isLargeScreen?400:350}
                  height={isLargeScreen?60:55}
                  strokeWidth={1.6}
                  textSize={isLargeScreen?"text-2xl":'text-[1.5rem]'}
                  // Toggle answer
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }} // Reduced duration
                    className="overflow-hidden"
                  >
                    <div className="py-3">
                      <ClippedBtn
                        text={faq.answer}
                        width={faq.answerwidth}
                        height={faq.answerheight}
                        strokeWidth={1.6}
                        textSize="text-xl"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default FAQ;
