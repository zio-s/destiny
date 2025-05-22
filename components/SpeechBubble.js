import { useEffect, useState } from 'react';

export default function SpeechBubble({ text, image, variant, isVisible }) {
  const bubbleStyles = {
    variant1: { width: '54.3%', height: '18.5%', left: '7.96%', top: '80.55%' },
    variant2: { width: '54.3%', height: '18.5%', left: '11.5%', top: '6.55%' },
  };
  const [displayedLines, setDisplayedLines] = useState([]);
  const lines = text?.split('\n') || [];

  useEffect(() => {
    if (!isVisible || lines.length === 0) {
      setDisplayedLines([]);
      return;
    }

    let currentLineIndex = 0;
    let currentCharIndex = 0;
    const newDisplayedLines = lines.map(() => '');

    const typeCharacter = () => {
      if (currentLineIndex >= lines.length) return;

      const currentLine = lines[currentLineIndex];

      if (currentCharIndex < currentLine.length) {
        newDisplayedLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
        setDisplayedLines([...newDisplayedLines]);
        currentCharIndex++;
        setTimeout(typeCharacter, 50);
      } else {
        currentLineIndex++;
        currentCharIndex = 0;
        if (currentLineIndex < lines.length) {
          setTimeout(typeCharacter, 300);
        }
      }
    };
    setTimeout(typeCharacter, 300);
  }, [isVisible, text]);

  return (
    <div className='relative w-full max-w-md mx-auto aspect-[3/4]'>
      <img src={image} alt='' className='w-full object-contain' loading='lazy' />
      <div
        className='absolute flex flex-col gap-1 font-bold items-center justify-center text-base p-5 text-center text-black leading-tight'
        style={bubbleStyles[variant]}
      >
        {lines.map((_, idx) => (
          <p
            key={idx}
            className='inline-block whitespace-nowrap'
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
            }}
          >
            {displayedLines[idx] || ''}
          </p>
        ))}
      </div>
    </div>
  );
}
