import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  X,
  ZoomIn,
  Heart,
  Sparkles,
  Image as ImageIcon,
} from "lucide-react";
import { MascotType } from "../types";
import { MascotIcon } from "./MascotIcon";
import { BgaPosterCard } from "./BgaPosterCard";
import { HappyTypographyCard } from "./HappyTypographyCard";
import { playPageTurnSound, playPopSound } from "../utils/audio";

interface ScreenGalleryProps {
  mascot: MascotType;
  onNext: () => void;
}

export const ScreenGallery: React.FC<ScreenGalleryProps> = ({
  mascot,
  onNext,
}) => {
  const [selectedItem, setSelectedItem] = useState<
    "bga" | "happy" | "memories" | null
  >(null);

  const handleOpen = (item: "bga" | "happy" | "memories") => {
    playPopSound();
    setSelectedItem(item);
  };

  const handleClose = () => {
    playPopSound();
    setSelectedItem(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="relative flex min-h-[75vh] w-full flex-col items-center justify-center px-4 py-6"
    >
      {/* Decorative Mascot Watermarks matching Image 14 */}
      <div className="pointer-events-none absolute top-4 left-6 opacity-20 text-stone-900 hidden sm:block">
        <MascotIcon type={mascot} size={54} variant="watermark" />
      </div>
      <div className="pointer-events-none absolute bottom-4 right-6 opacity-20 text-stone-900 hidden sm:block">
        <MascotIcon type={mascot} size={54} variant="watermark" />
      </div>

      <div className="w-full max-w-5xl text-center">
        {/* Eyebrow */}
        <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-stone-500 block mb-2">
          THE COLLECTION
        </span>

        {/* Title */}
        <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-950 mb-3">
          Memory Gallery
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-md text-stone-600 text-sm sm:text-base leading-relaxed mb-10">
          A curated selection of the finest moments, art, and memories.
        </p>

        {/* Masonry / Grid Layout matching Image 14 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start text-left mb-12">
          {/* Left Column: Tall Poster (Image 3) */}
          <div className="md:col-span-6">
            <div className="relative rounded-2xl border border-stone-800/80 bg-white p-3 shadow-md group">
              <div className="absolute top-5 right-5 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900/80 text-white rounded-full p-1.5 shadow">
                <ZoomIn className="h-4 w-4" />
              </div>
              <BgaPosterCard onClick={() => handleOpen("bga")} />
              <div className="mt-2.5 px-2 flex items-center justify-between text-xs text-stone-500">
                <span className="font-serif italic">
                  Edition No. 01 — Aesthetic Moodboard
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold">
                  Click to expand
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Top Typography Card (Image 1) & Bottom Polaroid Keepsake Card */}
          <div className="md:col-span-6 flex flex-col gap-6">
            {/* Top Card: HAPPY Typography Poster */}
            <div className="relative rounded-2xl border border-stone-800/80 bg-white p-3 shadow-md group">
              <div className="absolute top-5 right-5 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900/80 text-white rounded-full p-1.5 shadow">
                <ZoomIn className="h-4 w-4" />
              </div>
              <HappyTypographyCard onClick={() => handleOpen("happy")} />
              <div className="mt-2.5 px-2 flex items-center justify-between text-xs text-stone-500">
                <span className="font-serif italic">
                  Edition No. 02 — Coral Monogram
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold">
                  Click to expand
                </span>
              </div>
            </div>

            {/* Bottom Card: Keepsake Polaroid & Note Frame */}
            <div
              onClick={() => handleOpen("memories")}
              className="group relative rounded-2xl border border-stone-800/80 bg-[#fff5f6] p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:border-stone-900 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-800">
                  SPECIAL KEEPSAKE
                </span>
                <Sparkles className="h-4 w-4 text-rose-500" />
              </div>

              <div className="flex items-center gap-4">
                <div className="h-20 w-20 rounded-xl bg-white p-1.5 shadow-sm border border-stone-300 transform -rotate-3 transition-transform group-hover:rotate-0">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80"
                    alt="Memories"
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium text-stone-900">
                    The Golden Moments
                  </h4>
                  <p className="text-xs text-stone-600 font-sans mt-1">
                    Every smile, every journey, and all the laughter that made
                    this year unforgettable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Read the Letter Button matching Image 14 */}
        <div className="mt-2">
          <button
            type="button"
            onClick={() => {
              playPageTurnSound();
              onNext();
            }}
            className="group inline-flex items-center gap-2 rounded-sm border border-stone-900 bg-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-semibold text-stone-950 shadow-xs transition-all hover:bg-stone-950 hover:text-white hover:shadow-md active:scale-95 cursor-pointer"
          >
            <span>READ THE LETTER</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 p-4 backdrop-blur-sm"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-4 sm:p-6 shadow-2xl"
            >
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-4 right-4 z-30 rounded-full bg-stone-900/80 p-2 text-white hover:bg-stone-950 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              {selectedItem === "bga" && (
                <div className="py-2">
                  <BgaPosterCard />
                </div>
              )}

              {selectedItem === "happy" && (
                <div className="py-4">
                  <HappyTypographyCard />
                </div>
              )}

              {selectedItem === "memories" && (
                <div className="space-y-4 text-left py-2">
                  <h3 className="font-serif-display text-2xl font-medium text-stone-900">
                    Memories & Moments
                  </h3>
                  <div className="flex flex-col justify-between gap-2">
                    <img
                      src=" /held-1.jpg"
                      alt="Moment 1"
                      className="rounded-lg object-cover  w-full border border-stone-200"
                    />
                    <img
                      src=" /held-2.jpg"
                      alt="Moment 1"
                      className="rounded-lg object-cover w-full border border-stone-200"
                    />
                    <img
                      src=" /held-3.jpg"
                      alt="Moment 1"
                      className="rounded-lg object-cover w-full border border-stone-200"
                    />
                    <img
                      src=" /held-4.jpg"
                      alt="Moment 1"
                      className="rounded-lg object-cover w-full border border-stone-200"
                    />
                    <img
                      src=" /held-5.jpg"
                      alt="Moment 1"
                      className="rounded-lg object-cover  w-full border border-stone-200"
                    />
                    <img
                      src=" /held-6.jpg"
                      alt="Moment 1"
                      className="rounded-lg object-cover w-full border border-stone-200"
                    />
                  </div>
                  <p className="text-sm text-stone-600 font-serif italic text-center pt-2">
                    "Treasuring every second with you."
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
