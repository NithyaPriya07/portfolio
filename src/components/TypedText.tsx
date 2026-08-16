import { useState, useEffect } from 'react';

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
}

export default function TypedText({
  strings,
  typeSpeed = 80,
  backSpeed = 50,
  backDelay = 1500,
}: TypedTextProps) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = strings[currentStringIndex];

    if (isDeleting) {
      // Deleting character by character
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, backSpeed);
    } else {
      // Typing character by character
      timer = setTimeout(() => {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
      }, typeSpeed);
    }

    // If fully typed, trigger back-deletion delay
    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), backDelay);
    }

    // If fully deleted, transition to next word
    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentStringIndex((prev) => (prev + 1) % strings.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentStringIndex, strings, typeSpeed, backSpeed, backDelay]);

  return (
    <span className="inline-block">
      <span>{currentText}</span>
      <span className="animate-pulse font-light text-brand-purple ml-1">|</span>
    </span>
  );
}
