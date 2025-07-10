'use client';

import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
  format?: (value: number) => string;
}

export default function AnimatedNumber({ 
  value, 
  duration = 1, 
  className = '',
  format = (val) => val.toLocaleString()
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const spring = useSpring(displayValue, { duration: duration * 1000 });
  const display = useTransform(spring, (current) => format(Math.floor(current)));

  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  return (
    <motion.span className={className}>
      {display}
    </motion.span>
  );
}