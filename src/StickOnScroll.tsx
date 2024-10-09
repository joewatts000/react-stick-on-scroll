import React, { FC, HTMLAttributes, useRef, useEffect, useState } from 'react';
import { useScrollPercentage } from './useScrollPercentage';

export interface StickOnScrollProps extends HTMLAttributes<HTMLDivElement> {
  startScroll?: number;
  scrollTarget: HTMLElement;
  zIndex?: number;
  width?: string;
}

/** 
 * 
  Example usage:
    <StickOnScroll scrollTarget={scrollTarget}>
      <div style={{ height: '100px', backgroundColor: 'red' }}>Header</div>
    </StickOnScroll>   
*/

export const StickOnScroll: FC<StickOnScrollProps> = ({
  scrollTarget,
  children,
  startScroll = 0,
  className = '',
  zIndex = 1,
  width = '100%',
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [elementHeight, setElementHeight] = useState(0);
  const scrollPercentage = useScrollPercentage(
    scrollTarget,
    startScroll,
    startScroll + elementHeight
  );

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setElementHeight(ref.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const currentTop = -elementHeight + (elementHeight * scrollPercentage) / 100;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${currentTop}px)`,
        position: 'fixed',
        width,
        zIndex,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

