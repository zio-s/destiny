import { useEffect, useRef, useState } from 'react';
import SpeechBubble from './SpeechBubble';

export default function Section({ image, text, variant }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <div ref={sectionRef} className='w-full'>
      {text ? (
        <SpeechBubble text={text} image={image} variant={variant} isVisible={isVisible} />
      ) : (
        <div className='relative w-full max-w-md mx-auto'>
          <img src={image} alt='' className='w-full h-auto' />
        </div>
      )}
    </div>
  );
}
