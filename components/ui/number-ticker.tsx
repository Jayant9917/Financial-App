"use client";

import { useEffect, useRef, useState } from "react";

interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
  suffix?: string;
}

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  suffix = "",
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayedValue, setDisplayedValue] = useState(0);
  const hasAnimatedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimatedRef.current) return;

    let timerId: NodeJS.Timeout | null = null;

    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      
      hasAnimatedRef.current = true;
      const duration = 2000; // 2 seconds for smooth animation
      const startTime = Date.now();
      const startValue = 0;
      const endValue = value;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation (ease-out cubic)
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const easedProgress = easeOutCubic(progress);
        
        const currentValue = Math.floor(startValue + (endValue - startValue) * easedProgress);
        setDisplayedValue(currentValue);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          setDisplayedValue(endValue);
        }
      };

      // Apply delay if specified
      if (delay > 0) {
        timerId = setTimeout(() => {
          animationFrameRef.current = requestAnimationFrame(animate);
        }, delay);
      } else {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    // First, check if element is already visible (common in hero sections)
    const checkVisibility = () => {
      if (hasAnimatedRef.current) return;
      
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // Check if element is in viewport
      const isVisible = rect.top < windowHeight && rect.bottom > 0;

      if (isVisible) {
        // Start animation immediately
        startAnimation();
        return true;
      }
      return false;
    };

    // Check immediately and after a short delay
    let isVisible = checkVisibility();
    
    if (!isVisible) {
      // If not visible, set up IntersectionObserver
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimatedRef.current) {
              startAnimation();
              observer.disconnect();
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "50px",
        }
      );

      observer.observe(element);

      // Also check periodically as fallback
      const intervalId = setInterval(() => {
        if (checkVisibility()) {
          clearInterval(intervalId);
          observer.disconnect();
        }
      }, 100);

      // Cleanup after 5 seconds (should have triggered by then)
      const cleanupTimer = setTimeout(() => {
        observer.disconnect();
        clearInterval(intervalId);
        // Force start if still not animated (safety net)
        if (!hasAnimatedRef.current) {
          startAnimation();
        }
      }, 5000);

      return () => {
        observer.disconnect();
        clearInterval(intervalId);
        clearTimeout(cleanupTimer);
        if (timerId) {
          clearTimeout(timerId);
        }
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [value, delay]);

  return (
    <span className={className}>
      <span ref={ref}>{displayedValue.toLocaleString()}</span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}

