import React from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Sparkles,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface BgaPosterCardProps {
  className?: string;
  onClick?: () => void;
}

export const BgaPosterCard: React.FC<BgaPosterCardProps> = ({
  className = "",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-stone-300 bg-[#e8e4df] shadow-md transition-all duration-300 hover:shadow-xl hover:border-stone-400 cursor-pointer ${className}`}
    >
      {/* Top Banner Navigation Bar */}
      <div className="relative z-10 flex items-center justify-between px-3 py-2 text-[8px] sm:text-[9px] text-stone-700 bg-white/70 backdrop-blur-xs border-b border-stone-200"></div>

      {/* Top Hero Section: Girl jumping in room with BGA$ cloud logo */}
      <div className="relative aspect-[3/4]  w-full overflow-hidden bg-stone-200">
        <img
          src="/cat-1.jpg"
          alt="BGA Course Hero"
          className="h-full w-full object-cover filter contrast-105"
        />
        <div className="absolute inset-0 bg-stone-900/10" />

        {/* Floating BGA$ cloud pill */}

        {/* Action button */}
      </div>

      {/* Middle Creative Section: Polaroids + Red Plaid Ribbon + Stars */}
      <div className="relative bg-[#f5f1ea] p-4 sm:p-5 border-y border-stone-300">
        {/* Decorative Starburst Backdrop */}
        <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
          <div className="w-48 h-48 bg-sky-300 rotate-45" />
        </div>

        {/* Red gingham plaid ribbon vertical strip on right */}
        <div className="absolute top-0 bottom-0 right-5 w-5 bg-red-600/30 border-x border-red-500/50">
          {/* Bow on top right */}
          <div className="absolute top-2 -left-3 text-red-600 font-bold text-xl">
            🎀
          </div>
        </div>

        {/* Polaroids grid */}
        <div className="relative ">
          {/* Polaroid 1 */}
          <div className="transform -rotate-3 rounded-md bg-white p-1.5 shadow-md border border-stone-300">
            <div className="aspect-[4/3] overflow-hidden rounded-xs bg-stone-200">
              <img
                src="/cat-2.jpg"
                alt="Лиза Розанова"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Social pills */}
          </div>

          {/* Polaroid 2 */}
        </div>

        {/* Denim Star & Heart sticker */}
      </div>
      <div className="relative aspect-[2/3]  w-full overflow-hidden bg-stone-200">
        <img
          src=" /cat-3.jpg"
          alt="BGA Course Hero"
          className="h-full w-full object-cover filter contrast-105"
        />
        <div className="absolute inset-0 bg-stone-900/10" />
      </div>
      <div className="relative bg-[#f5f1ea] p-4 sm:p-5 border-y border-stone-300">
        {/* Decorative Starburst Backdrop */}
        <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
          <div className="w-48 h-48 bg-sky-300 rotate-45" />
        </div>

        {/* Red gingham plaid ribbon vertical strip on right */}
        <div className="absolute top-0 bottom-0 right-5 w-5 bg-red-600/30 border-x border-red-500/50">
          {/* Bow on top right */}
          <div className="absolute top-2 -left-3 text-red-600 font-bold text-xl">
            🎀
          </div>
        </div>

        {/* Polaroids grid */}
        <div className="relative ">
          {/* Polaroid 1 */}
          <div className="transform -rotate-3 rounded-md bg-white p-1.5 shadow-md border border-stone-300">
            <div className="aspect-[4/3] overflow-hidden rounded-xs bg-stone-200">
              <img
                src=" /cat-4.jpg"
                alt="Лиза Розанова"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Social pills */}
          </div>

          {/* Polaroid 2 */}
        </div>

        {/* Denim Star & Heart sticker */}
      </div>
      <div className="relative aspect-[4/3]  w-full overflow-hidden bg-stone-200">
        <img
          src=" /cat-5.jpg"
          alt="BGA Course Hero"
          className="h-full w-full object-cover filter contrast-105"
        />
        <div className="absolute inset-0 bg-stone-900/10" />

        {/* Floating BGA$ cloud pill */}

        {/* Action button */}
      </div>
      <div className="relative bg-[#f5f1ea] p-4 sm:p-5 border-y border-stone-300">
        {/* Decorative Starburst Backdrop */}
        <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
          <div className="w-48 h-48 bg-sky-300 rotate-45" />
        </div>

        {/* Red gingham plaid ribbon vertical strip on right */}
        <div className="absolute top-0 bottom-0 right-5 w-5 bg-red-600/30 border-x border-red-500/50">
          {/* Bow on top right */}
          <div className="absolute top-2 -left-3 text-red-600 font-bold text-xl">
            🎀
          </div>
        </div>

        {/* Polaroids grid */}
        <div className="relative ">
          {/* Polaroid 1 */}
          <div className="transform -rotate-3 rounded-md bg-white p-1.5 shadow-md border border-stone-300">
            <div className="aspect-[4/3] overflow-hidden rounded-xs bg-stone-200">
              <img
                src="/cat-6.jpg"
                alt="Лиза Розанова"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Social pills */}
          </div>

          {/* Polaroid 2 */}
        </div>

        {/* Denim Star & Heart sticker */}
      </div>
      {/* Bottom Section: Blue Aesthetic with stats & list */}
    </div>
  );
};
