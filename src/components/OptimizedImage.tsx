import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
  lazy?: boolean;
}

// Modern image formats support detection
const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => resolve(webP.height === 2);
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

const supportsAVIF = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const avif = new Image();
    avif.onload = avif.onerror = () => resolve(avif.height === 2);
    avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgS0AAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  });
};

// Generate srcSet for different formats and sizes
const generateSrcSet = (
  baseSrc: string, 
  supportsModernFormats: { webp: boolean; avif: boolean },
  sizes: number[] = [640, 768, 1024, 1280, 1920]
) => {
  const getExtension = (src: string) => src.split('.').pop()?.toLowerCase();
  const baseName = baseSrc.replace(/\.[^/.]+$/, "");
  const extension = getExtension(baseSrc);

  const sources: Array<{ srcSet: string; type: string; sizes?: string }> = [];

  // AVIF format (best compression)
  if (supportsModernFormats.avif) {
    const avifSrcSet = sizes
      .map(size => `${baseName}-${size}w.avif ${size}w`)
      .join(', ');
    sources.push({
      srcSet: avifSrcSet,
      type: 'image/avif',
      sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
    });
  }

  // WebP format (good compression)
  if (supportsModernFormats.webp) {
    const webpSrcSet = sizes
      .map(size => `${baseName}-${size}w.webp ${size}w`)
      .join(', ');
    sources.push({
      srcSet: webpSrcSet,
      type: 'image/webp',
      sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
    });
  }

  // Fallback format
  const fallbackSrcSet = sizes
    .map(size => `${baseName}-${size}w.${extension} ${size}w`)
    .join(', ');
  sources.push({
    srcSet: fallbackSrcSet,
    type: `image/${extension}`,
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
  });

  return sources;
};

// Intersection Observer for lazy loading
const useIntersectionObserver = (threshold = 0.1) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold, rootMargin: '50px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isIntersecting] as const;
};

export default function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  sizes,
  quality = 85,
  placeholder = 'blur',
  blurDataURL,
  onLoad,
  onError,
  lazy = true
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formatSupport, setFormatSupport] = useState({ webp: false, avif: false });
  const [intersectionRef, isIntersecting] = useIntersectionObserver();
  const [shouldLoad, setShouldLoad] = useState(!lazy || priority);

  // Check format support on mount
  useEffect(() => {
    Promise.all([supportsWebP(), supportsAVIF()]).then(([webp, avif]) => {
      setFormatSupport({ webp, avif });
    });
  }, []);

  // Handle intersection for lazy loading
  useEffect(() => {
    if (isIntersecting && !shouldLoad) {
      setShouldLoad(true);
    }
  }, [isIntersecting, shouldLoad]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setIsError(true);
    onError?.();
  };

  // Generate optimized sources
  const sources = shouldLoad ? generateSrcSet(src, formatSupport) : [];

  // Blur placeholder
  const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';

  return (
    <div
      ref={intersectionRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Blur placeholder */}
      {placeholder === 'blur' && !isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-10"
        >
          <img
            src={blurDataURL || defaultBlurDataURL}
            alt=""
            className="w-full h-full object-cover blur-sm scale-110"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 animate-pulse" />
        </motion.div>
      )}

      {/* Loading skeleton */}
      {!shouldLoad && lazy && (
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
      )}

      {/* Optimized image */}
      {shouldLoad && (
        <motion.picture
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="block w-full h-full"
        >
          {sources.map((source, index) => (
            <source
              key={index}
              srcSet={source.srcSet}
              type={source.type}
              sizes={source.sizes || sizes}
            />
          ))}
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        </motion.picture>
      )}

      {/* Error state */}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-400">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 opacity-50">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <p className="text-sm">Failed to load image</p>
          </div>
        </div>
      )}

      {/* Performance indicator (development only) */}
      {process.env.NODE_ENV === 'development' && isLoaded && (
        <div className="absolute top-2 left-2 z-20 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {formatSupport.avif ? 'AVIF' : formatSupport.webp ? 'WebP' : 'Original'}
        </div>
      )}
    </div>
  );
}

// HOC for batch image optimization
export function withImageOptimization<T extends object>(
  Component: React.ComponentType<T>
) {
  return function OptimizedComponent(props: T) {
    return <Component {...props} />;
  };
}

// Preload critical images
export const preloadImage = (src: string, priority = true) => {
  const link = document.createElement('link');
  link.rel = priority ? 'preload' : 'prefetch';
  link.href = src;
  link.as = 'image';
  document.head.appendChild(link);
};

// Utility for generating responsive image URLs
export const generateResponsiveImageUrl = (
  baseSrc: string,
  width: number,
  format: 'webp' | 'avif' | 'original' = 'original'
) => {
  const extension = baseSrc.split('.').pop();
  const baseName = baseSrc.replace(/\.[^/.]+$/, "");
  
  if (format === 'original') {
    return `${baseName}-${width}w.${extension}`;
  }
  
  return `${baseName}-${width}w.${format}`;
};
