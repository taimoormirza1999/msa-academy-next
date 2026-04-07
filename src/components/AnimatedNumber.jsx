"use client";

import { motion, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

const AnimatedNumber = ({ value }) => {
  const reduce = useReducedMotion();
  if (reduce) {
    return <span>{Math.round(value).toLocaleString()}</span>;
  }
  const spring = useSpring(value, {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
};

export default AnimatedNumber;
