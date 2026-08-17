import React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Sparkles,
  Volume2,
  VolumeX,
  Cake,
  Heart,
  Check,
} from "lucide-react";
import { MascotType } from "../types";
import { MascotIcon } from "./MascotIcon";
import { playPopSound } from "../utils/audio";

interface CustomizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  mascot: MascotType;
  onChangeMascot: (m: MascotType) => void;
  recipientName: string;
  onChangeRecipientName: (name: string) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

const MASCOTS: { type: MascotType; label: string; desc: string }[] = [
  {
    type: "bear",
    label: "Teddy Bear",
    desc: "Classic, warm & lovable companion",
  },
  { type: "bunny", label: "Fluffy Bunny", desc: "Sweet, joyful & mischievous" },
  { type: "puppy", label: "Golden Pup", desc: "Loyal, energetic & cheerful" },
  { type: "fox", label: "Sparkle Fox", desc: "Clever, cute & magical" },
  { type: "star", label: "Star Sprite", desc: "Celestial, bright & sparkling" },
];

export const CustomizationModal: React.FC<CustomizationModalProps> = ({
  isOpen,
  onClose,
  mascot,
  onChangeMascot,
  recipientName,
  onChangeRecipientName,
  soundEnabled,
  onToggleSound,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 p-4 backdrop-blur-xs"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl text-left border border-stone-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-rose-500" />
              <h3 className="font-serif-display text-xl font-normal text-stone-900">
                Experience Settings
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-1.5 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-5">
            {/* Mascot Companion Selection */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-stone-600 mb-2">
                Choose Companion Mascot
              </label>
              <div className="grid grid-cols-5 gap-2">
                {MASCOTS.map((m) => {
                  const isSelected = m.type === mascot;
                  return (
                    <button
                      key={m.type}
                      type="button"
                      onClick={() => {
                        playPopSound();
                        onChangeMascot(m.type);
                      }}
                      className={`flex flex-col items-center justify-center rounded-xl p-2 border transition-all ${
                        isSelected
                          ? "border-stone-900 bg-rose-50/70 ring-2 ring-stone-900/10"
                          : "border-stone-200 hover:border-stone-400 bg-stone-50/50"
                      }`}
                    >
                      <MascotIcon type={m.type} size={32} variant="outline" />
                      <span className="text-[9px] font-medium text-stone-700 mt-1 truncate max-w-full">
                        {m.label.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Recipient Name Customization */}

            {/* Sound Toggle */}
            <div className="flex items-center justify-between rounded-xl bg-stone-50 p-3 border border-stone-200/80">
              <div className="flex items-center gap-2.5">
                {soundEnabled ? (
                  <Volume2 className="h-4 w-4 text-emerald-600" />
                ) : (
                  <VolumeX className="h-4 w-4 text-stone-400" />
                )}
                <div>
                  <p className="text-xs font-semibold text-stone-900">
                    Audio Chimes & Sound FX
                  </p>
                  <p className="text-[11px] text-stone-500">
                    Interactive chimes on clicks and turns
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onToggleSound}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  soundEnabled ? "bg-stone-900" : "bg-stone-300"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                    soundEnabled ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-100 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md bg-stone-950 px-5 py-2 text-xs font-semibold text-white hover:bg-stone-800 transition-colors"
            >
              Done
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
