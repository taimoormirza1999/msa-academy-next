"use client"
import { useEffect } from "react";

const SuppressErrors = () => {
  useEffect(() => {
    const originalConsoleError = console.error;
    console.error = function (...args) {
      if (
        args[0] &&
        typeof args[0] === "string" &&
        args[0].includes("NotFoundError: Failed to execute 'removeChild'")
      ) {
        return; // Suppress this specific error
      }
      originalConsoleError(...args);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SuppressErrors;
