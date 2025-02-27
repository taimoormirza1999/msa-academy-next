import { create } from "zustand";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

const useScreenStore = create((set) => ({
  isLargeScreen: true, // Default value
  setScreenSize: (size) => set({ isLargeScreen: size }),
}));

export const useScreenListener = () => {
  const setScreenSize = useScreenStore((state) => state.setScreenSize);

  const isLarge = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    setScreenSize(isLarge);
  }, [isLarge, setScreenSize]);
};

export default useScreenStore;
