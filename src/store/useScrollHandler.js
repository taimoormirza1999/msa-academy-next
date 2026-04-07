import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const useScrollHandler = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (id) => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => scrollToSection(id), 500);
    } else {
      scrollToSection(id);
    }
    setIsMenuOpen(false);
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

  return { isMenuOpen, toggleMenu, handleScroll, setIsMenuOpen };
};

export default useScrollHandler;
