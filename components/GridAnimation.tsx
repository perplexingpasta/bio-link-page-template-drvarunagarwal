// components/GridAnimation.tsx

import { useEffect, useRef } from 'react';

const GridAnimation: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const styleSheet = document.styleSheets[0];

    // Create and append the keyframes dynamically
    const keyframes = `
      @keyframes moveGrid {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(100vw, 100vh);
        }
      }
    `;
    
    // Insert the keyframes rule into the document's stylesheet
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }, []);

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Animated Grid */}
      <div
        ref={gridRef}
        className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-2"
        style={{
          animation: 'moveGrid 5s linear infinite', // Inline animation
        }}
      >
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="w-4 h-4 bg-black"></div>
        ))}
      </div>

      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-black">
        Welcome to My Site
      </h1>
    </div>
  );
};

export default GridAnimation;
