'use client';

import { useEffect, useRef, useState } from 'react';

export function useVideoPreload() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { videoRef, shouldLoad };
}

