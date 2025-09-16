import React, { useEffect, useState } from 'react';

interface BinaryRainProps {
  isDarkMode: boolean;
}

const BinaryRain: React.FC<BinaryRainProps> = ({ isDarkMode }) => {
  const [drops, setDrops] = useState<Array<{ id: number; left: number; delay: number; char: string }>>([]);

  useEffect(() => {
    const binaryChars = ['0', '1', '{', '}', '<', '>', '/', '*', '+', '-', '=', ';', '(', ')'];
    
    const newDrops = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      char: binaryChars[Math.floor(Math.random() * binaryChars.length)]
    }));

    setDrops(newDrops);
  }, []);

  if (!isDarkMode) return null; // Only show in dark mode

  return (
    <div className="binary-rain">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="binary-char"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`
          }}
        >
          {drop.char}
        </div>
      ))}
    </div>
  );
};

export default BinaryRain;