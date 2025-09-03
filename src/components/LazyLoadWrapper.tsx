import { ReactNode, useEffect, useRef, useState } from 'react';

interface LazyLoadWrapperProps {
  children: ReactNode;
  rootMargin?: string;
  threshold?: number;
  fallback?: ReactNode;
}

const LazyLoadWrapper = ({ 
  children, 
  rootMargin = '100px', 
  threshold = 0.1, 
  fallback 
}: LazyLoadWrapperProps) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div ref={ref}>
      {isIntersecting ? children : fallback}
    </div>
  );
};

export default LazyLoadWrapper;