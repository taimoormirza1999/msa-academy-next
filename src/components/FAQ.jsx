import React, { useState } from 'react';
import faqHeading from '../assets/freq_heading.png';
import Image from 'next/image';

function FAQ() {
  const faqs = [
    {
      question: 'What is the refund policy?',
      answer: 'Our refund policy allows you to request a refund within 30 days of purchase.',
    },
    {

      question: 'How can I contact support?',
      answer: 'You can contact support through our help center or by emailing msa@academy.com.',
    },
    {
      question: 'Are there any discounts?',
      answer: 'Yes, we offer a 20% discount for students with valid identification.',
    },
  ];

  return (
    <div className="p-3 py-6 pb-14 my-0 md:mb-10 lg:mt-[154px] mx-auto max-w-[1920px]">
      {/* Section Heading */}
      <div className="text-center mb-6 md:mb-12">
      <Image
                          height={100}
                          width={500}
          src={faqHeading.src}
          alt="FAQ Section"
          className="mx-auto w-full md:w-9/12 lg:w-7/12	 h-auto"
        />
      </div>

<div className='w-[90%] ml-auto me-auto lg:me-0 lg:w-[70%] xl:w-[76%] lg:ml-auto  flex flex-row justify-end'>
<div className="flex flex-col lg:flex-row max-w-full mx-auto md:me-10">
        {faqs.map((faq, index) => (
          <div key={index} className=" font-medium-fgm mt-4 lg:mt-0 mx-1 border-2 shadow-2xl shadow-pink200/50 border-pink200 rounded-2xl p-4 xl:px-6 ">
            <div className="font-medium text-lg text-white flex justify-between items-center">
              <span>{faq.question}</span>
            </div>
            <div className="mt-2 text-white text-sm lg:text-base ">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
</div>
     
    </div>
  );
}

export default FAQ;
