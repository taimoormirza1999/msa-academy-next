import { create } from "zustand";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

const useScreenStore = create((set) => ({
  isLargeScreen: true, // Default value
  isMediumScreen: false, // Default value
  setScreenSize: (size) => set(size),
}));

export const useScreenListener = () => {
  const setScreenSize = useScreenStore((state) => state.setScreenSize);

  const isLarge = useMediaQuery({ minWidth: 1024 });
  const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  useEffect(() => {
    setScreenSize({ isLargeScreen: isLarge, isMediumScreen: isMedium });
  }, [isLarge, isMedium, setScreenSize]);
};

export default useScreenStore;
