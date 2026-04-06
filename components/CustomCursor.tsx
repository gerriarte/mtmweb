
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const springConfig = { damping: 32, stiffness: 280 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqFine = window.matchMedia('(pointer: fine)');
    const update = () => setEnabled(!mqReduce.matches && mqFine.matches);
    update();
    mqReduce.addEventListener('change', update);
    mqFine.addEventListener('change', update);
    return () => {
      mqReduce.removeEventListener('change', update);
      mqFine.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, enabled]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 2.4 : 1,
          backgroundColor: isHovering ? 'rgba(31, 205, 210, 0.12)' : 'rgba(255,255,255,0)',
          borderColor: isHovering ? '#1FCDD2' : 'rgba(255,255,255,0.35)',
          borderWidth: isHovering ? '1.5px' : '1px',
          boxShadow: isHovering ? '0 0 22px rgba(31, 205, 210, 0.35)' : '0 0 0px rgba(0,0,0,0)'
        }}
      />
      <div 
        className="cursor-blob" 
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px`,
          opacity: isHovering ? 1 : 0.6
        }} 
      />
    </>
  );
};