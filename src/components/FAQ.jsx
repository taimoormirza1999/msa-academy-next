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
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact support through our help center or by emailing contact@msa-club.com.",
    },
    {
      question: "Are there any discounts?",
      answer:
        "Yes, we offer a 20% discount for students with valid identification.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 py-20">
      <SectionWrapper>
        <OutlineTextEffect title={"Frequently Asked"} />
        <div className="my-2">
          <OutlineTextEffect title={"Questions"} />
        </div>
        <div className="-space-y-5 ml-auto flex flex-col items-center ">
          {faqs.map((faq, index) => (
            <div key={index} className="relative py-5">
              <ClippedBtn text={faq.question} width={500} height={70} strokeWidth={1.5} />

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
              </motion.div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default FAQ;
