import throttle from 'lodash/throttle';
import { useState, useEffect } from 'react';

export function useScroll() {
  const [scrollY, setScrollY] = useState(window.scrollY + document.documentElement.clientHeight);
  const [scrollHeight, setScrollHeight] = useState(document.documentElement.scrollHeight);
  const [height, setHeight] = useState(document.documentElement.clientHeight);
  const [width, setWidth] = useState(document.documentElement.clientWidth);

  const listener = () => {
    setScrollY(window.scrollY + document.documentElement.clientHeight);
    setScrollHeight(document.documentElement.scrollHeight);
    setHeight(document.documentElement.clientHeight);
    setWidth(document.documentElement.clientWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', throttle(listener, 100));
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return {
    scrollHeight,
    scrollY,
    width,
    height,
  };
}
