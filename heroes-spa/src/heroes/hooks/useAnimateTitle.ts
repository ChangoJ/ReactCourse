import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface AnimateTitleOptions {
  translateY?: { from: number; to: number };
  opacity?: { from: number; to: number };
  duration?: number;
  delay?: number;
  easing?: string;
}

export const useAnimateTitle = (options: AnimateTitleOptions = {}) => {
  const titleRef = useRef(null);

  const defaultOptions = {
    translateY: { from: -10, to: 0 },
    opacity: { from: 0, to: 1 },
    duration: 500,
    delay: 200,
    easing: 'easeOutElastic(1, .5)'
  };

  const finalOptions = { ...defaultOptions, ...options };

  useEffect(() => {
    if (titleRef.current) {
      animate(titleRef.current, {
        translateY: finalOptions.translateY,
        opacity: finalOptions.opacity,
        duration: finalOptions.duration,
        easing: finalOptions.easing,
        delay: finalOptions.delay
      });
    }
  }, []);

  return titleRef;
}; 