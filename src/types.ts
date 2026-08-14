export type ScreenStep = 
  | 'gate' 
  | 'intro' 
  | 'legends' 
  | 'gallery' 
  | 'letter' 
  | 'thankyou';

export type MascotType = 'bear' | 'bunny' | 'puppy' | 'fox' | 'star';

export interface LegendItem {
  id: string;
  name: string;
  year: string;
  occupation: string;
  description: string;
  imageUrl: string;
  quote?: string;
}

export interface StoryState {
  currentScreen: ScreenStep;
  unlocked: boolean;
  secretName: string;
  mascot: MascotType;
  recipientName: string;
  birthDate: string;
  soundEnabled: boolean;
  starredLegends: string[];
}
