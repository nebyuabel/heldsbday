import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Edit3,
  Heart,
  Volume2,
  Sparkles,
  Check,
} from "lucide-react";
import { MascotIcon } from "./MascotIcon";
import { MascotType } from "../types";
import { playCelebrationChime, playPopSound } from "../utils/audio";

interface ScreenLetterProps {
  mascot: MascotType;
  recipientName?: string;
  onNext: () => void;
}

export const ScreenLetter: React.FC<ScreenLetterProps> = ({
  mascot,
  recipientName = "Dearest",
  onNext,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [customGreeting, setCustomGreeting] = useState(
    recipientName ? `My ${recipientName},` : "My Dearest,",
  );
  const [customClosing, setCustomClosing] = useState(
    "With all my love, always.",
  );

  const handleContinue = () => {
    playCelebrationChime();
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative flex min-h-[85vh] w-full flex-col items-center justify-center px-4 py-8 text-stone-900"
    >
      <div className="w-full max-w-2xl text-center">
        {/* Title */}
        <div className="relative inline-block mb-6">
          <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#442c38]">
            {customGreeting}
          </h1>
          <div className="mx-auto mt-4 h-px w-20 bg-rose-400/60" />
        </div>

        {/* Heartfelt Letter Body matching Image 16 with Dropcap */}
        <div className="mx-auto max-w-xl text-left font-serif text-stone-800 text-base sm:text-lg leading-[1.8] space-y-6">
          <p className="relative">
            {/* Styled Drop Cap A */}
            <span
              className="float-left mr-3 text-5xl sm:text-6xl font-normal leading-none text-[#442c38] font-serif"
              style={{ fontFamily: "'Bodoni Moda', 'Playfair Display', serif" }}
            >
              A
            </span>
            s I sit down to write this, I find myself smiling at the thought of
            all the incredible moments we've shared. Another year has passed,
            bringing with it a tapestry of new memories, laughter, and even
            those quiet, comfortable silences that only we understand. You have
            this remarkable way of making ordinary days feel extraordinary.
          </p>

          <p>
            I want you to know how deeply you are loved to me, not just today on
            your special day, but every single day. Your kindness, your
            resilience, and that brilliant spark in your eyes when you talk
            about the things you love—these are the things I cherish most about
            you. You are a rare and beautiful soul.
          </p>

          <p>
            May this coming year bring you everything your heart desires. May it
            be filled with adventures, success, and above all, joy. I promise to
            be right by your side, cheering you on and holding your hand through
            it all.
          </p>
        </div>

        {/* Sign-off section */}
        <div className="mt-10 flex flex-col items-center justify-center text-center">
          <p className="font-serif italic text-2xl text-[#442c38] font-normal tracking-wide mb-1">
            Happy Birthday.
          </p>
          <p className="text-xs sm:text-sm font-medium tracking-wider text-stone-600 mb-6">
            {customClosing}
          </p>

          {/* Central Mascot Icon */}
          <div className="my-2">
            <MascotIcon
              type={mascot}
              size={54}
              variant="outline"
              animated
              className="cursor-pointer hover:scale-110 transition-transform"
              onClick={() => playPopSound()}
            />
          </div>

          {/* Continue Button matching Image 16 */}
          <div className="mt-8">
            <button
              id="letter-continue-btn"
              type="button"
              onClick={handleContinue}
              className="group inline-flex items-center gap-2 rounded-sm bg-stone-950 px-8 py-3 text-xs tracking-wider font-semibold text-white transition-all hover:bg-stone-800 hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
