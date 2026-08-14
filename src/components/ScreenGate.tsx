import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Key, HelpCircle } from "lucide-react";
import { MascotIcon } from "./MascotIcon";
import { MascotType } from "../types";
import { playCelebrationChime, playPopSound } from "../utils/audio";
import { fireCelebrationBurst } from "./ConfettiBackground";

export const SECRET_PASSCODE = "eagle";

interface ScreenGateProps {
  mascot: MascotType;
  onUnlock: (secretName: string) => void;
}

export const ScreenGate: React.FC<ScreenGateProps> = ({ mascot, onUnlock }) => {
  const [inputVal, setInputVal] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const triggerError = (msg: string) => {
    setErrorMsg(msg);
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = inputVal.trim();

    if (!trimmed) {
      triggerError("Please enter the secret name to proceed.");
      return;
    }

    if (trimmed.toLowerCase() !== SECRET_PASSCODE.toLowerCase()) {
      triggerError("Incorrect secret name. Access denied.");
      return;
    }

    setErrorMsg("");
    playCelebrationChime();
    fireCelebrationBurst();
    onUnlock(trimmed);
  };

  const handleQuickUnlock = () => {
    playPopSound();
    setInputVal(SECRET_PASSCODE);
    setErrorMsg("");
    playCelebrationChime();
    fireCelebrationBurst();
    onUnlock(SECRET_PASSCODE);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex min-h-[75vh] w-full flex-col items-center justify-center px-4 text-center"
    >
      <div className="relative mx-auto w-full max-w-2xl">
        {/* Main Title */}
        <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-stone-900 leading-[1.15] mb-12">
          Before we begin,
          <br />
          what is your secret name from 7A?
        </h1>

        {/* Input area with floating mascot */}
        <div className="relative mx-auto max-w-md my-8">
          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col items-center"
          >
            <div
              className={`relative w-full transition-transform ${isShaking ? "translate-x-[-6px] animate-bounce" : ""}`}
            >
              <input
                id="secret-name-input"
                type="text"
                value={inputVal}
                onChange={(e) => {
                  setInputVal(e.target.value);
                  if (errorMsg) setErrorMsg("");
                }}
                placeholder="Enter secret pass..."
                className={`w-full border-b bg-transparent py-3 pr-14 text-center font-sans text-lg sm:text-xl text-stone-900 placeholder:text-stone-400 focus:outline-none transition-colors ${
                  errorMsg
                    ? "border-rose-500 text-rose-950"
                    : "border-stone-800/80 focus:border-stone-900"
                }`}
                autoFocus
              />

              {/* Lovable Mascot positioned on the right edge */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2">
                <MascotIcon
                  type={mascot}
                  size={46}
                  variant="outline"
                  animated
                  className="hover:rotate-12 transition-transform cursor-pointer"
                  onClick={() => playPopSound()}
                />
              </div>
            </div>

            {errorMsg && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-xs text-rose-600 font-semibold tracking-wide"
              >
                {errorMsg}
              </motion.p>
            )}

            {/* Unlock Button */}
            <div className="mt-10">
              <button
                id="unlock-submit-btn"
                type="submit"
                className="group inline-flex items-center gap-2 rounded-sm bg-stone-950 px-8 py-3 text-xs uppercase tracking-[0.2em] font-semibold text-white transition-all hover:bg-stone-800 hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <span>UNLOCK</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>

          {/* Quick preset suggestions / Hint */}
          <div className="mt-8 flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
            >
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Need a hint?</span>
            </button>

            {showHint && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-2 flex flex-col items-center gap-2 max-w-sm rounded-lg border border-stone-200 bg-white/90 p-3.5 shadow-xs backdrop-blur-xs text-xs text-stone-600"
              >
                <p className="text-stone-700">
                  The secret pass is currently set to{" "}
                  <span className="font-mono font-bold text-stone-900 bg-stone-100 px-1.5 py-0.5 rounded">
                    the animal you were assigned in 7A
                  </span>
                </p>
                <button
                  type="button"
                  onClick={handleQuickUnlock}
                  className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-3 py-1 text-xs text-rose-700 hover:bg-rose-100 font-medium transition-colors cursor-pointer"
                >
                  <Sparkles className="h-3 w-3 text-rose-500" />
                  <span>Auto-fill & Unlock</span>
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
