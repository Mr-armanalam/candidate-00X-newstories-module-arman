import { useEffect, useState } from "react";

export function useIsVisible(ref: React.RefObject<Element | null>) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting)
      } 
      );
      
      observer.observe(ref.current!);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }