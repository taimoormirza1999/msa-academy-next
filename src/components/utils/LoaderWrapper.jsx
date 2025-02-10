'use client';
import React, { useState, useEffect } from "react";

const LoaderWrapper = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate a delay for loading (you can replace this with actual API or resource checks)
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isLoaded ? (
        <div className="flex justify-center items-center h-full z-10">
          {/* <div className="loader-spinner text-white">Loading...</div> */}
          <div className="flex items-center justify-center min-h-screen rounded-circle ">
      <div className="relative w-16 h-16  bg-transparent rounded-circle">
        <div
          className="absolute border-4 border-[#ee00a7e4] border-t-transparent rounded-full animate-spin"
          style={{ width: '100%', height: '100%' }}
        ></div>
      </div>
    </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default LoaderWrapper;
