"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (id) => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => scrollToSection(id), 300);
    } else {
      scrollToSection(id);
    }
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => scrollToSection(hash), 300);
    }
  }, [pathname]);

  return (
    <nav className="bg-black fixed top-0 left-0 right-0 z-50 shadow-lg py-2.5 md:py-3">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between md:justify-center  ">
        <Link
          href="/"
          className="cursor-pointer"
          suppressHydrationWarning={true}
        >
          <img
            src={logo.src}
            className="w-32 h-auto px-3 md:border-r-2 border-gray636 shadow-xl"
            alt="Logo"
          />
        </Link>

        <ul className="hidden md:flex space-x-6 text-white px-3 pl-5 ">
          <li className="animate-bounce">
            <span
              onClick={() => handleScroll("enroll-checkout")}
              className="animate-textGlow cursor-pointer hover:text-pink200 font-regular-ccm-m"
            >
              ENROLL
            </span>
          </li>
          <li>
            <span
              onClick={() => handleScroll("drawing-course")}
              className="cursor-pointer hover:text-pink200 font-regular-ccm-m"
            >
              DRAWING COURSE
            </span>
          </li>
          <li>
            <span
              onClick={() => handleScroll("animation-course")}
              className="cursor-pointer hover:text-pink200"
            >
              ANIMATION COURSE
            </span>
          </li>
        </ul>

        <div className="md:hidden flex items-center">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FiX className="text-pink200 text-4xl" />
            ) : (
              <FiMenu className="text-white text-4xl" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-black md:hidden py-1">
          <ul className="flex flex-col items-center space-y-4 text-white ">
            <li onClick={() => handleScroll("enroll-checkout")}>ENROLL</li>
            <li onClick={() => handleScroll("drawing-course")}>
              DRAWING COURSE
            </li>
            <li onClick={() => handleScroll("animation-course")}>
              ANIMATION COURSE
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
