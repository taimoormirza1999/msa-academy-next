'use client';
import React, { useState, useEffect } from "react";

const LoaderWrapper = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isLoaded ? (
        <div className="flex justify-center items-center h-full z-10">
          {/* <div className="loader-spinner text-white">Loading...</div> */}
          <div className="flex items-center justify-center min-h-screen rounded-circle ">
      <div className="relative w-10 h-10  bg-transparent rounded-circle">
        <div
          className="absolute border-4 border-pink200 border-t-transparent rounded-full animate-spin"
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
