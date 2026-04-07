import { create } from "zustand";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

const useScreenStore = create((set) => ({
  isLargeScreen: true, // Default value
  isMediumScreen: false, // Default value
  isLaptopMediumScreen: false, // Default value
  isMobileSScreen: false, // Default value
  isMobileMScreen: false, // Default value
  isMobileLScreen: false, // Default value
  setScreenSize: (size) => set(size),
}));

export const useScreenListener = () => {
  const setScreenSize = useScreenStore((state) => state.setScreenSize);

  const isLarge = useMediaQuery({ minWidth: 1024 });
  const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isLaptopMedium = useMediaQuery({ minWidth: 1024, maxWidth: 1280 });
  const isMobileS = useMediaQuery({ maxWidth: 320 }); // Small mobile
  const isMobileM = useMediaQuery({ minWidth: 321, maxWidth: 375 }); // Medium mobile
  const isMobileL = useMediaQuery({ minWidth: 376, maxWidth: 425 }); 

  useEffect(() => {
    setScreenSize({
      isLargeScreen: isLarge,
      isMediumScreen: isMedium,
      isMobileSScreen: isMobileS,
      isMobileMScreen: isMobileM,
      isMobileLScreen: isMobileL,
      isLaptopMediumScreen: isLaptopMedium,
    });
  }, [isLarge, isMedium, isMobileS, isMobileM, isMobileL, isLaptopMedium,setScreenSize]);
};

export default useScreenStore;
