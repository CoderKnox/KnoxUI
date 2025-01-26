import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Component } from 'lucide-react';


const RotatingLogo = ({ size = 28, className = "" }) => {
  const rotateValue = useMotionValue(0);
  const smoothRotate = useSpring(rotateValue, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const updateRotation = () => {
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const newRotation = scrollPercentage * 360;
      rotateValue.set(newRotation);
    };

    window.addEventListener("scroll", updateRotation);
    return () => window.removeEventListener("scroll", updateRotation);
  }, [rotateValue]);

  return (
    <motion.div style={{ rotate: smoothRotate }} className={className}>
      <Component size={size} />
    </motion.div>
  );
};

export default RotatingLogo;

