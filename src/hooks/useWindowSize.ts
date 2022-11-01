import { useState, useEffect } from 'react';
import { throttle } from 'throttle-debounce';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 1100,
    height: 1000,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', throttle(100, handleResize));
  }, []); // Empty array ensures that effect is only run on mount
  const width = windowSize.width;
  const height = windowSize.height;
  return { width, height };
};
