'use client';
import React, { useState, useEffect } from "react";

const LoaderWrapper = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Reduced from 500ms to 100ms for faster loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isLoaded ? (
        <div className="flex justify-center items-center h-32 z-10"> {/* Changed from min-h-screen to h-32 to prevent layout shifts */}
          <div className="relative w-10 h-10 bg-transparent rounded-circle">
            <div
              className="absolute border-4 border-pink200 border-t-transparent rounded-full animate-spin"
              style={{ width: '100%', height: '100%' }}
            ></div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default LoaderWrapper;
