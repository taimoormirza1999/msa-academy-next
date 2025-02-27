"use client";
import { useScreenListener } from "../store/useScreenStore";

const ScreenProvider = ({ children }) => {
  useScreenListener(); 
  return children;
};

export default ScreenProvider;
