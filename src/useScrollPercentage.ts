import { useState, useEffect } from 'react';

export const useScrollPercentage = (scrollTarget: HTMLElement, min = 0, max = 0) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = scrollTarget?.scrollTop || window.scrollY;

      if (currentScroll <= min) {
        setScrollPercentage(0);
      } else if (currentScroll >= max) {
        setScrollPercentage(100);
      } else {
        const percentage = ((currentScroll - min) / (max - min)) * 100;
        setScrollPercentage(percentage);
      }
    };

    (scrollTarget || window).addEventListener('scroll', handleScroll);
    handleScroll();

    return () => (scrollTarget || window).removeEventListener('scroll', handleScroll);
  }, [min, max, scrollTarget]);

  return Number.isNaN(scrollPercentage) ? 0 : scrollPercentage;
};
