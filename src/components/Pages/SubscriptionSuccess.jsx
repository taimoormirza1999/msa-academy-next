import React from 'react';

const SubscriptionSuccess = () => {
  return (
    <div className="h-screen  flex items-center justify-center">
      <div className="relative w-full max-w-2xl p-14 py-10 bg-black/40  rounded-[2rem] border-2  border-pink200 shadow-pink200/35 hover:shadow-pink200/75' shadow-lg transform scale-95 hover:scale-100 transition-all duration-300 ease-in-out">
        {/* Floating Circles */}
        <div className="absolute top-5 left-5 w-32 h-32 bg-pink200/70 rounded-full animate-pulse opacity-20 blur-lg"></div>
        <div className="absolute bottom-5 right-10 w-32 h-32 bg-pink200/70 rounded-full animate-pulse opacity-20 blur-lg"></div>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-pink200/30 via-purple-500 to-pink-600/30 shadow-lg shadow-pink200/45 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-pink200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-6-8.28M12 3v9"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-white mb-4">🎉 Success! 🎉</h1>

        {/* Description */}
        <p className="text-center text-white mb-6">
          Thank you for subscribing! Your payment was successful, and you are now part of our premium community.
        </p>

        {/* Details */}
        <div className="space-y-4 text-left">
          <div className="flex items-center">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-200 ">
            <span className={`w-6 h-6 flex items-center justify-center rounded-full text-pink-600 mt-2`}>
                    ✓
                  </span>
            </span>
            <span className="ml-4 text-white">Exclusive deals on premium products.</span>
          </div>
          <div className="flex items-center">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-200 text-pink-600">
          <span className={`w-6 h-6 flex items-center justify-center rounded-full text-pink-600 mt-2`}>
                    ✓
                  </span>
            </span>
            <span className="ml-4 text-white">Priority customer support.</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="animate-animate-glow  lg:text-[1.0956rem] mt-12 mb-7 px-12 border-[1.7px] text-white border-pink200 hover:shadow-pink200 shadow-pink200/40 pt-[15px] pb-[12px] px-[42.5px] rounded-[19px] shadow-xl"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSuccess;
