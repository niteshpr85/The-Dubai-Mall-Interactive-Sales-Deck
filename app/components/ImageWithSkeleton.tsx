'use client';

import { useState } from 'react';

interface ImageWithSkeletonProps {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  overlay?: boolean;
  overlayClassName?: string;
}

export default function ImageWithSkeleton({
  src,
  alt = '',
  className = '',
  style,
  overlay = false,
  overlayClassName = '',
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* Skeleton loader */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 image-loading" />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-dm-surface flex items-center justify-center">
          <div className="text-center px-4">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/5 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-dm-text-secondary">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <p className="text-xs text-dm-text-secondary">Image unavailable</p>
          </div>
        </div>
      )}

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
      />

      {/* Optional overlay */}
      {overlay && <div className={`absolute inset-0 ${overlayClassName}`} />}
    </div>
  );
}

