'use client';
import React, { useState, useEffect } from 'react';

const EnrollmentBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  // Set the enrollment end time (2 months, 4 days from now)
  const endTime = new Date().getTime() + (1 * 30 * 24 * 60 * 60 * 1000) + (1 * 24 * 60 * 60 * 1000); // 2 months + 4 days in milliseconds

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id='enrollment' className="bg-black text-white text-center py-5 md:py-5 " suppressHydrationWarning={true}>
      <div className='flex flex-col lg:flex-row justify-center items-center'>
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-0 font-impact-regular">ENROLLMENT ENDS IN</h1>
        <div className="text-2xl md:text-4xl mb-0 md:mb-0  ml-2 font-impact-regular">
          <span className=''>{timeLeft.days} Days </span>
          <span className=''>{timeLeft.hours} Hours </span>
          <span className=''>{timeLeft.minutes} Minutes </span>
          <span className=''>{timeLeft.seconds} Seconds</span>
        </div>
      </div>
      <p className="mt-1.5 md:mt-3 text-sm md:text-xl font-medium font-medium-kgpr ">(LIMITED TO 1,000 STUDENTS ONLY)</p>
    </div>
  );
};

export default EnrollmentBanner;
