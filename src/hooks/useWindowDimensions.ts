import { useState, useEffect } from 'react';

interface UseWindowDimensionsState {
  width: number | undefined;
  height: number | undefined;
};

export default function useWindowSize(resize?: boolean): UseWindowDimensionsState {
  const [windowSize, setWindowSize] = useState<UseWindowDimensionsState>({
    width: undefined,
    height: undefined,
  });
  

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = (): void => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      if (resize) window.addEventListener("resize", handleResize);

      handleResize();

      if (resize) return () => window.removeEventListener("resize", handleResize);
    }

  }, []);
  return windowSize;
};