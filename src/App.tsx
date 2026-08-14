import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Cake, Sparkles, Settings2, Heart } from 'lucide-react';
import { MascotType, ScreenStep } from './types';
import { StepIndicator } from './components/StepIndicator';
import { ConfettiBackground } from './components/ConfettiBackground';
import { ScreenGate } from './components/ScreenGate';
import { ScreenIntro } from './components/ScreenIntro';
import { ScreenLegends } from './components/ScreenLegends';
import { ScreenGallery } from './components/ScreenGallery';
import { ScreenLetter } from './components/ScreenLetter';
import { ScreenThankYou } from './components/ScreenThankYou';
import { CustomizationModal } from './components/CustomizationModal';
import { playPopSound } from './utils/audio';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenStep>('gate');
  const [unlocked, setUnlocked] = useState(false);
  const [secretName, setSecretName] = useState('');
  const [recipientName, setRecipientName] = useState('Beautiful');
  const [mascot, setMascot] = useState<MascotType>('bear');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [starredLegends, setStarredLegends] = useState<string[]>(['robert-de-niro']);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleUnlock = (name: string) => {
    setSecretName(name);
    setUnlocked(true);
    setCurrentScreen('intro');
  };

  const handleToggleStar = (id: string) => {
    setStarredLegends((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isPinkTheme = currentScreen === 'letter';

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-700 relative overflow-x-hidden ${
        isPinkTheme ? 'bg-[#fedfe5]' : 'bg-[#faf9f6]'
      }`}
    >
      {/* Floating Ambient Confetti (subtle on all screens, especially active during intro/finale) */}
      <ConfettiBackground active={currentScreen !== 'letter'} />

      <div className="relative z-10 flex min-h-screen flex-col justify-between">
        {/* Top Header with Progress Dots matching designs */}
        <header className="w-full pt-4 pb-2 px-4">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            {/* Left placeholder for symmetry */}
            <div className="w-10"></div>

            {/* Step Navigation Dots (o o o o o o) */}
            <StepIndicator
              currentStep={currentScreen}
              unlocked={unlocked}
              onSelectStep={(step) => {
                playPopSound();
                setCurrentScreen(step);
              }}
            />

            {/* Right Settings Button */}
            <div className="w-10 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  playPopSound();
                  setIsSettingsOpen(true);
                }}
                title="Experience Settings & Companion"
                className="rounded-full p-2 text-stone-700 hover:bg-stone-200/60 hover:text-stone-900 transition-colors"
              >
                <Settings2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Interactive Screen Content */}
        <main className="flex-1 flex items-center justify-center py-4 sm:py-8">
          <AnimatePresence mode="wait">
            {currentScreen === 'gate' && (
              <ScreenGate
                key="gate"
                mascot={mascot}
                onUnlock={handleUnlock}
              />
            )}

            {currentScreen === 'intro' && (
              <ScreenIntro
                key="intro"
                mascot={mascot}
                recipientName={recipientName}
                onNext={() => setCurrentScreen('legends')}
              />
            )}

            {currentScreen === 'legends' && (
              <ScreenLegends
                key="legends"
                mascot={mascot}
                starredLegends={starredLegends}
                onToggleStar={handleToggleStar}
                onNext={() => setCurrentScreen('gallery')}
              />
            )}

            {currentScreen === 'gallery' && (
              <ScreenGallery
                key="gallery"
                mascot={mascot}
                onNext={() => setCurrentScreen('letter')}
              />
            )}

            {currentScreen === 'letter' && (
              <ScreenLetter
                key="letter"
                mascot={mascot}
                recipientName={recipientName}
                onNext={() => setCurrentScreen('thankyou')}
              />
            )}

            {currentScreen === 'thankyou' && (
              <ScreenThankYou
                key="thankyou"
                mascot={mascot}
                onStartOver={() => setCurrentScreen('gate')}
              />
            )}
          </AnimatePresence>
        </main>

        {/* Bottom Corner Anchors matching the screenshots (Paw on left, Cake on right) */}
        <footer className="w-full pb-4 px-6 sm:px-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between text-stone-700">
            {/* Bottom Left: Paw / Sparkle companion trigger */}
            <button
              type="button"
              onClick={() => {
                playPopSound();
                setIsSettingsOpen(true);
              }}
              title="Change Companion Mascot"
              className="flex items-center gap-1.5 p-2 rounded-lg hover:bg-stone-200/50 transition-colors group cursor-pointer"
            >
              <svg
                className="h-5 w-5 fill-current opacity-70 group-hover:opacity-100 transition-opacity"
                viewBox="0 0 24 24"
              >
                {/* Stylized Paw Print */}
                <path d="M12 10.5c-2.4 0-4 1.8-4 4.5 0 2.2 1.8 4 4 4s4-1.8 4-4c0-2.7-1.6-4.5-4-4.5zM6.5 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm11 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-7.5-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
              </svg>
              <span className="text-[10px] uppercase font-bold tracking-widest opacity-0 group-hover:opacity-80 transition-opacity hidden sm:inline">
                {mascot}
              </span>
            </button>

            {/* Bottom Right: Birthday Cake Icon */}
            <button
              type="button"
              onClick={() => {
                playPopSound();
                setIsSettingsOpen(true);
              }}
              title="Story Options"
              className="p-2 rounded-lg hover:bg-stone-200/50 transition-colors group cursor-pointer"
            >
              <Cake className="h-5 w-5 opacity-70 group-hover:opacity-100 group-hover:text-rose-600 transition-all" />
            </button>
          </div>
        </footer>
      </div>

      {/* Settings & Customization Modal */}
      <CustomizationModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        mascot={mascot}
        onChangeMascot={setMascot}
        recipientName={recipientName}
        onChangeRecipientName={setRecipientName}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
      />
    </div>
  );
}
