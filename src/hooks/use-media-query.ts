
"use client";

import { useState, useEffect } from 'react';

export function useMediaQuery(query: string) {
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const media = window.matchMedia(query);
    const listener = () => {
      setIsDesktop(media.matches);
    };

    // Set initial state
    listener();
    
    media.addEventListener('change', listener);
    
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return { isDesktop, isMounted };
}
