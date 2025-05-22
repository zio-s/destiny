import { useEffect, useRef, useState } from 'react';
import SpeechBubble from './SpeechBubble';

export default function Section({ image, text, variant }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    if (!window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, 100);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const setupObserver = () => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    };

    if (image) {
      const img = new Image();
      img.onload = setupObserver;
      img.onerror = setupObserver;
      img.src = image;
    } else {
      setupObserver();
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      observer.disconnect();
    };
  }, [isMounted, image]);

  if (!isMounted) {
    return (
      <div className='w-full'>
        <div className='relative w-full max-w-md mx-auto'>
          <img src={image} alt='' className='w-full h-auto' />
        </div>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className='w-full min-h-[200px]'>
      {text ? (
        <SpeechBubble text={text} image={image} variant={variant} isVisible={isVisible} />
      ) : (
        <div className='relative w-full max-w-md mx-auto'>
          <img src={image} alt='section img' loading='lazy' className='w-full h-auto' />
        </div>
      )}
    </div>
  );
}
