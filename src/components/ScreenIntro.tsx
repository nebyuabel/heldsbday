import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, PartyPopper, Heart } from "lucide-react";
import { MascotIcon } from "./MascotIcon";
import { MascotType } from "../types";
import { playCelebrationChime, playPopSound } from "../utils/audio";
import { fireCelebrationBurst } from "./ConfettiBackground";

interface ScreenIntroProps {
  mascot: MascotType;
  recipientName?: string;
  onNext: () => void;
}

export const ScreenIntro: React.FC<ScreenIntroProps> = ({
  mascot,
  recipientName = "Beautiful",
  onNext,
}) => {
  const handleNext = () => {
    playCelebrationChime();
    fireCelebrationBurst();
    onNext();
  };

  const handleCardClick = () => {
    playPopSound();
    fireCelebrationBurst();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex min-h-[75vh] w-full flex-col items-center justify-center px-4 text-center"
    >
      <div className="mx-auto max-w-xl">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#4a3540] mb-4"
        >
          Happy Birthday!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto max-w-md text-stone-600 text-sm sm:text-base leading-relaxed mb-10"
        >
          Wishing you a day filled with joy and laughter
        </motion.p>

        {/* Mascot Center Card Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 180,
            damping: 20,
          }}
          className="relative mx-auto my-6 flex items-center justify-center"
        >
          {/* Pale blush pink backdrop box */}
          <div
            onClick={handleCardClick}
            className="group relative flex h-60 w-60 sm:h-64 sm:w-64 items-center justify-center rounded-2xl bg-[#fff0f3] p-8 shadow-xs transition-all duration-300 hover:scale-102 hover:shadow-md cursor-pointer"
          >
            {/* Mascot in the middle */}
            <div className="relative z-10">
              <MascotIcon
                type={mascot}
                size={140}
                variant="outline"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Overlapping mini sticker card on bottom right */}
            <motion.div
              whileHover={{ rotate: 4, scale: 1.08 }}
              className="absolute -bottom-4 -right-4 z-20 flex flex-col items-center justify-center rounded-xl border border-stone-800 bg-white p-2.5 shadow-md w-24 h-24"
            >
              {/* Cute mini illustration */}
              <div className="relative flex items-center justify-center">
                <MascotIcon type={mascot} size={36} variant="party" />
                <span className="absolute -top-1 -right-2 text-xs">🎈</span>
              </div>
              <span className="mt-1 text-[9px] font-medium tracking-tight text-stone-800">
                Happy Birthday!
              </span>
            </motion.div>

            {/* Subtle interactive sparkles */}
            <div className="absolute top-3 left-3 opacity-60 group-hover:opacity-100 transition-opacity">
              <Sparkles className="h-4 w-4 text-rose-400" />
            </div>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10"
        >
          <button
            id="continue-story-btn"
            type="button"
            onClick={handleNext}
            className="group inline-flex items-center gap-2 rounded-sm bg-stone-950 px-7 py-3 text-xs tracking-wider font-semibold text-white transition-all hover:bg-stone-800 hover:shadow-md active:scale-95"
          >
            <span>Continue the Story</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
