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
  recipientName = "Held",
  onNext,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [customGreeting, setCustomGreeting] = useState(
    recipientName ? `${recipientName},` : "Held,",
  );
  const [customClosing, setCustomClosing] = useState(
    "Sincerely, the small dude from 7A",
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
            Held
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
              Y
            </span>
            ou know how much I suck at writting letters but just bare with me on
            this. I want to say so much but I don't even know where to start. I
            just want you to know that you mean so much to me you have no idea.
            I thank God for lining up everything back in 7th grade so that we
            would sit on consequtive rows. To tell you the truth I don't know
            what I would even be if you were never there. So thank you for just
            being. And thank you for making me start anime. Thank you for being
            there at my lowest and highest. You were the only one that was with
            me even when I pushed everyone away. I pushed you away but you were
            still there so tysmmmmmmm 🥹🥹🥹🥹🥹
          </p>
          <p>
            I want you to know I love everything about you. Your silly faces.
            Your funny jokes. The way you laugh and smile. Your random requests
            (that's the last time I'm ever singing sophia ), our awkward hugs
            every time we hang out, the way you used to say "oh well", the love
            you have for others, your hundred crushes you never ask out, and
            most importantly your motherly like care. Remember when I had you
            saved as Mamacita, it was because of that. I love that when I do
            good, bad, dumb things you smh bare with me and God knows how
            unbareable I can be. You genuenily saved my life you have no idea.
            And you're so fucking fine I have no idea how we're even friends. In
            every other universe, I would never have talked to you but I know
            all the other mes wish that they lived on this one. And I love how
            you remind me of memories even when I have completely forgotten
            them. I love your pizza. I love your voice smmmmm. I love your eyes.
            I love that you play the violin (even though you've only ever once
            let me listen to it 😭😭). I love that you drew me with cat ears. I
            love your unhealthy K-pop idols obsession. I love that we have such
            different tastes in things we like. I think I might get stuck on
            this section forever so Ima just move on.
          </p>{" "}
          <span className="italic align-center flex justify-center">
            Ilysm held 🫶
          </span>
          <p>
            I really wanted to give you something good but this was very rushed
            because as you know I was never the insightful type. I got you a
            silver braclet because you once told me you liked silver and grey.
            You even wanted to die your hair that. But then I remembered after I
            have bought it that you like all the colors 😭😭. And I got you the
            fake ass 5 leaf necklace because there were only crosses and I
            didn't think you had a vancleaf (or whatever it's called) keza I saw
            it on the picture we took together, I'm so sorrrryyyyyyy. I made a
            bunch or crampled papers because I'm fkin stupid and don't know what
            else to give you. I'm not really good at giving or recieving gifts
            so I'm sorry. And I know you like snickers but I can only afford one
            rn 😭😭😭. But jus please give me another chance and next year I
            promise I'll give you something good. Oh and sorry I had to
            shamefully use AI to make the website, cuz I didn't have time and I
            couldn't make something this good in a million years. Just think of
            it as a photo template you send as birthday cards.
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
