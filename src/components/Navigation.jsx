"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
// import { FiMenu, FiX } from "react-icons/fi";
import Button from "./utils/Button";
import Menu from "./Menu";
import { motion, AnimatePresence } from "framer-motion";
import DownElipse from "@/assets/DownElipse.png";
import Image from "next/image";
import useScrollHandler from "@/store/useScrollHandler";

const Navigation = () => {
  const { isMenuOpen, toggleMenu, handleScroll, setIsMenuOpen } = useScrollHandler();

  // const router = useRouter();
  // const pathname = usePathname();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };
  // const handleScroll = (id) => {
  //   if (pathname !== "/") {
  //     router.push("/");
  //     setTimeout(() => scrollToSection(id), 500);
  //   } else {
  //     scrollToSection(id);
  //   }
  //   setIsMenuOpen(false);
  // };

  // const scrollToSection = (id) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // useEffect(() => {
  //   const hash = window.location.hash.substring(1);
  //   if (hash) {
  //     setTimeout(() => scrollToSection(hash), 300);
  //   }
  // }, [pathname]);

  return (
    <>
      <nav className="relative py-1 lg:py-2.5 ">
        <Image
        height={500}
        width={500}
        src={DownElipse.src}
          alt="Elipse Top"
          className="w-full absolute top-0 lg:-top-10  scale-y-[-1]"
        />
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between   ">
          <Link
            href="/"
            className="cursor-pointer"
            suppressHydrationWarning={true}
          >
            <img
              src={"/logo.png"}
              className="w-32 lg:w-40 h-auto px-3   shadow-xl"
              alt="Logo"
            />
          </Link>
          {/* Menu Button */}
          <Button
            text="MENU"
            height={88.51}
            width={126}
            textSize="text-xl"
            onClick={toggleMenu}
            handleScroll={handleScroll}
            navButton={true}
          />{" "}
        </div>
      </nav>
      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Menu onClose={() => setIsMenuOpen(false)} handleScroll={handleScroll} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
