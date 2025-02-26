"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ClippedBtn from "./utils/ClippedImageBtn";
import OutlineTextEffect from "./utils/OutlineTextEffect";
import SectionWrapper from "./SectionWrapper";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the refund policy?",
      answer:
        "Our refund policy allows you to request a refund within 30 days of purchase.",
      answerwidth: 750,
      answerheight: 60,
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact support through our help center or by emailing contact@msa-club.com.",
      answerwidth: 850,
      answerheight: 60,
    },
    {
      question: "Are there any discounts?",
      answer:
        "Yes, we offer a 20% discount for students with valid identification.",
      answerwidth: 670,
      answerheight: 60,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 py-24">
      <SectionWrapper>
        <OutlineTextEffect title={"Frequently Asked"} />
        <div className="my-2">
          <OutlineTextEffect title={"Questions"} />
        </div>
        <div className="ml-auto flex flex-col items-center my-10 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full max-w-lg flex flex-col items-center"
            >
              <button className="cursor-pointer " onClick={() => toggleFAQ(index)}>
                <ClippedBtn
                  text={faq.question}
                  width={400}
                  height={60}
                  strokeWidth={1.6}
                  textSize="text-2xl"
                  // Toggle answer
                />
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === index
                    ? { height: "auto", opacity: 1, padding: "12px" }
                    : { height: 0, opacity: 0, padding: 0 }
                }
                transition={{ duration: 0.8 }}
                // className="overflow-hidde   "
              >
                <ClippedBtn
                  text={faq.answer}
                  width={faq.answerwidth}
                  height={60}
                  strokeWidth={1.6}
                  textSize="text-xl"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default FAQ;
