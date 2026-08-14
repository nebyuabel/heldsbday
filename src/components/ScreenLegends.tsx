import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { LegendItem, MascotType } from "../types";
import { MascotIcon } from "./MascotIcon";
import { playPageTurnSound, playPopSound } from "../utils/audio";

interface ScreenLegendsProps {
  mascot: MascotType;
  starredLegends: string[];
  onToggleStar: (id: string) => void;
  onNext: () => void;
}

const LEGENDS: LegendItem[] = [
  {
    id: "lil-b",
    name: "LIL B",
    year: "1989",
    occupation: "Iconic Rapper & Cultural Phenomenon",
    description:
      "Bay-area rapper known for both his solo work and his participation in The Pack. He is an avid user of social networking and has a large online following.",
    imageUrl:
      "https://i.pinimg.com/736x/bc/ea/ba/bceabab3beaef075593318340aa66d58.jpg", // stylish editorial portrait
    quote: "Based god 😭😭😭",
  },
  {
    id: "thierry-henry",
    name: "Thierry Henry",
    year: "1977",
    occupation: "Football Icon & World Cup Champion",
    description:
      "Star French striker who helped lead France's national team for over a decade and played for Arsenal and FC Barcelona during the height of his career; he joined the New York Red Bulls in the MLS in 2010. I am larping football, I don't know this nigga gn I saw him during the world cup discussing menamen 😭",
    imageUrl:
      "data:image/jpeg;base64,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",
    quote:
      '"Sometimes in football you have to score goals, but first you must bring joy and artistry. ok he did not say that"',
  },
  {
    id: "rober-de-niro",
    name: "Robert De Niro",
    year: "1943",
    occupation: "Iconic Actor & Director",

    description:
      "Legendary actor who won an Academy Award for Best Actor for his role as Jake LaMotta in the 1980 boxing film Raging Bull and an Academy Award for Best Supporting Actor for his role as Vito Corleone in the 1974 classic The Godfather Part II. I didn't watch the God father II but he's great trust! 🫡",
    imageUrl:
      "https://i.pinimg.com/736x/78/32/d6/7832d6b7778864d93cbd8a81144df492.jpg",
    quote: '"Taxi Driver and the Good Fellas"',
  },
  {
    id: "ji-an-won",
    name: "Won Ji-an",
    year: "1999",
    occupation: "South Korean Actress",
    description:
      "South Korean actress who rose to fame for her appearance in the streaming series D.P. A supporting role in the drama series If You Wish Upon Me soon followed. In 2023, it was reported that she would be playing a role in the second season of Squid Game.",
    imageUrl: "https://www.famousbirthdays.com/faces/ji-an-won-image.jpg",
    quote:
      "\"I genueniely don't know who she is but she's a South Korean actress and she was born on August 17th and you love your kpop\"",
  },
  {
    id: "yeras-teferi",
    name: "Yeras Teferi",
    year: "2009",
    occupation: "Student",
    description: "Plays volleyball in cathedral",
    imageUrl: "assets/yeras.jpg",
    quote: '"You know yeras "',
  },
];

export const ScreenLegends: React.FC<ScreenLegendsProps> = ({
  mascot,
  starredLegends,
  onToggleStar,
  onNext,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = LEGENDS[currentIndex];
  const isStarred = starredLegends.includes(current.id);

  const handlePrev = () => {
    playPageTurnSound();
    setCurrentIndex((prev) => (prev === 0 ? LEGENDS.length - 1 : prev - 1));
  };

  const handleNextLegend = () => {
    playPageTurnSound();
    setCurrentIndex((prev) => (prev === LEGENDS.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
      className="relative flex min-h-[75vh] w-full flex-col items-center justify-center px-4"
    >
      {/* Decorative Mascot Watermarks matching Image 10 layout */}
      <div className="pointer-events-none absolute top-4 left-6 opacity-20 text-stone-900 hidden sm:block">
        <MascotIcon type={mascot} size={48} variant="watermark" />
      </div>
      <div className="pointer-events-none absolute bottom-4 right-6 opacity-20 text-stone-900 hidden sm:block">
        <MascotIcon type={mascot} size={48} variant="watermark" />
      </div>

      <div className="w-full max-w-4xl text-center">
        {/* Eyebrow */}
        <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-stone-500 block mb-2">
          BORN ON THIS DAY
        </span>

        {/* Title */}
        <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-950 mb-10">
          August 17th Legends
        </h1>

        {/* Main Card Frame */}
        <div className="relative mx-auto max-w-3xl rounded-none border border-stone-800 bg-white p-6 sm:p-10 shadow-xs text-left">
          {/* Star Icon in top-right */}
          <button
            type="button"
            onClick={() => {
              playPopSound();
              onToggleStar(current.id);
            }}
            title={isStarred ? "Remove from favorites" : "Add to favorites"}
            className="absolute top-6 right-6 p-1 text-stone-400 hover:text-amber-500 transition-colors cursor-pointer"
          >
            <Star
              className={`h-5 w-5 ${
                isStarred
                  ? "fill-amber-400 text-amber-500"
                  : "stroke-[1.5] text-stone-400"
              }`}
            />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Photo with offset outline */}
              <div className="md:col-span-6 relative">
                {/* Offset decorative border box behind image */}
                <div className="absolute inset-0 translate-x-2 translate-y-2 border border-stone-900 bg-stone-100 -z-10" />
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-stone-900 bg-stone-900">
                  {/* High quality styled monochrome portrait representation */}
                  <img
                    src={
                      current.id === "robert-de-niro"
                        ? "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
                        : current.imageUrl
                    }
                    alt={current.name}
                    className="h-full w-full object-cover grayscale contrast-125 filter"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40" />
                </div>
              </div>

              {/* Right Column: Bio */}
              <div className="md:col-span-6 flex flex-col justify-center">
                <span className="text-xs font-mono text-stone-600 tracking-wider mb-1">
                  {current.year}
                </span>

                <h2 className="font-serif-display text-3xl sm:text-4xl font-normal text-stone-950 tracking-tight mb-4">
                  {current.name}
                </h2>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans mb-4">
                  {current.description}
                </p>

                {current.quote && (
                  <p className="text-xs italic text-stone-600 border-l-2 border-stone-300 pl-3 py-1 font-serif">
                    {current.quote}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Legend"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-stone-900 bg-white text-stone-900 shadow-xs hover:bg-stone-100 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5 px-2">
            {LEGENDS.map((leg, idx) => (
              <button
                key={leg.id}
                onClick={() => {
                  playPageTurnSound();
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "w-5 bg-stone-900"
                    : "w-2 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNextLegend}
            aria-label="Next Legend"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-stone-900 bg-white text-stone-900 shadow-xs hover:bg-stone-100 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Next Step Button */}
        <div className="mt-8">
          <button
            type="button"
            onClick={onNext}
            className="group inline-flex items-center gap-2 rounded-sm bg-stone-950 px-7 py-3 text-xs tracking-wider font-semibold text-white transition-all hover:bg-stone-800 hover:shadow-md active:scale-95"
          >
            <span>Explore The Gallery</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
