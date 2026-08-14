import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { RotateCcw, Sparkles, Heart, PartyPopper, Share2 } from 'lucide-react';
import { MascotIcon } from './MascotIcon';
import { MascotType } from '../types';
import { fireCelebrationBurst, fireSideCannons } from './ConfettiBackground';
import { playCelebrationChime, playPopSound } from '../utils/audio';

interface ScreenThankYouProps {
  mascot: MascotType;
  onStartOver: () => void;
}

export const ScreenThankYou: React.FC<ScreenThankYouProps> = ({ mascot, onStartOver }) => {
  useEffect(() => {
    // Launch festive celebration confetti on arrival!
    fireSideCannons();
    playCelebrationChime();
  }, []);

  const handleReplay = () => {
    playPopSound();
    onStartOver();
  };

  const handleBurst = () => {
    playPopSound();
    fireCelebrationBurst();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative flex min-h-[75vh] w-full flex-col items-center justify-center px-4"
    >
      <div className="relative w-full max-w-xl">
        {/* Floating Mascot Badges surrounding the card matching Image 18 */}
        <div className="absolute -left-6 top-1/4 -translate-y-1/2 z-20">
          <MascotIcon
            type={mascot}
            size={48}
            variant="outline"
            animated
            className="cursor-pointer hover:rotate-12 transition-transform"
            onClick={handleBurst}
          />
        </div>

        <div className="absolute -right-6 bottom-1/3 z-20">
          <MascotIcon
            type={mascot}
            size={52}
            variant="outline"
            animated
            className="cursor-pointer hover:-rotate-12 transition-transform"
            onClick={handleBurst}
          />
        </div>

        {/* Central Card */}
        <div className="relative mx-auto rounded-3xl border border-stone-200/90 bg-white/90 p-10 sm:p-14 text-center shadow-xl backdrop-blur-xs">
          {/* Peeking little mascot above Title */}
          <div className="mx-auto mb-2 flex justify-center">
            <MascotIcon
              type={mascot}
              size={42}
              variant="party"
              className="cursor-pointer hover:scale-110 transition-transform"
              onClick={handleBurst}
            />
          </div>

          {/* Title */}
          <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-950 mb-4">
            Thank You.
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-sm text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
            The celebration may be over, but the memories linger. Until next time.
          </p>

          {/* Action: Start Over Button */}
          <div className="flex flex-col items-center gap-3">
            <button
              id="start-over-btn"
              type="button"
              onClick={handleReplay}
              className="group inline-flex items-center gap-2 rounded-sm bg-stone-950 px-8 py-3 text-xs uppercase tracking-[0.2em] font-semibold text-white transition-all hover:bg-stone-800 hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5 transition-transform group-hover:-rotate-90" />
              <span>START OVER</span>
            </button>

            {/* Extra confetti cannon trigger */}
            <button
              type="button"
              onClick={handleBurst}
              className="inline-flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-700 transition-colors font-medium mt-2"
            >
              <PartyPopper className="h-3.5 w-3.5" />
              <span>Launch more confetti</span>
            </button>
          </div>

          {/* Bottom Mascot in card center */}
          <div className="mt-8 flex justify-center">
            <MascotIcon
              type={mascot}
              size={48}
              variant="outline"
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={handleBurst}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
