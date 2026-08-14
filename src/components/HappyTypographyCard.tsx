import React from 'react';

interface HappyTypographyCardProps {
  className?: string;
  onClick?: () => void;
}

export const HappyTypographyCard: React.FC<HappyTypographyCardProps> = ({
  className = '',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-stone-200/80 bg-[#f9f9f9] p-8 sm:p-12 shadow-xs transition-all duration-300 hover:shadow-lg hover:border-stone-300 cursor-pointer ${className}`}
    >
      <div className="relative flex flex-col items-center justify-center select-none py-6">
        {/* Tall compressed coral typography: HAPPY HAPPY */}
        <div className="flex flex-col items-center justify-center leading-[0.82] tracking-tighter">
          {/* Top HAPPY */}
          <span
            className="font-bold text-[#ff6e67] text-6xl sm:text-7xl md:text-8xl scale-y-[1.75] transform origin-bottom font-sans tracking-tight opacity-95"
            style={{ fontFamily: "'Montserrat', 'Arial Black', sans-serif" }}
          >
            HAPPY
          </span>

          {/* Bottom HAPPY */}
          <span
            className="font-bold text-[#ff6e67] text-6xl sm:text-7xl md:text-8xl scale-y-[1.75] transform origin-top font-sans tracking-tight opacity-95"
            style={{ fontFamily: "'Montserrat', 'Arial Black', sans-serif" }}
          >
            HAPPY
          </span>
        </div>

        {/* Cursive script "Birthday" overlapping exactly across the center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className="font-script text-5xl sm:text-6xl md:text-7xl text-stone-950 font-normal -rotate-6 transform drop-shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3"
            style={{ fontFamily: "'Great Vibes', 'Alex Brush', cursive" }}
          >
            Birthday
          </span>
        </div>

        {/* Small subtitle underneath */}
        <div className="mt-8 text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#ff6e67] uppercase font-sans">
            beautiful!
          </span>
        </div>
      </div>
    </div>
  );
};
