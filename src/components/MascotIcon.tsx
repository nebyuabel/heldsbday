import React from 'react';
import { MascotType } from '../types';

interface MascotIconProps {
  type?: MascotType;
  className?: string;
  size?: number | string;
  variant?: 'outline' | 'watermark' | 'filled' | 'party';
  animated?: boolean;
  onClick?: () => void;
}

export const MascotIcon: React.FC<MascotIconProps> = ({
  type = 'bear',
  className = '',
  size = 48,
  variant = 'outline',
  animated = false,
  onClick,
}) => {
  const isWatermark = variant === 'watermark';
  const strokeColor = isWatermark ? 'currentColor' : '#18181b';
  const fillColor = isWatermark ? 'none' : variant === 'filled' ? '#fafafa' : '#ffffff';
  const strokeWidth = isWatermark ? 6 : 9;

  // Render different lovable non-cat animal mascots
  const renderMascotPath = () => {
    switch (type) {
      case 'bunny':
        return (
          <g>
            {/* Bunny Ears */}
            <path
              d="M32 42 C 22 28, 22 8, 32 6 C 42 4, 42 26, 40 42"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M68 42 C 78 28, 78 8, 68 6 C 58 4, 58 26, 60 42"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Inner Ear accents */}
            <path d="M32 16 Q32 26 34 34" stroke={strokeColor} strokeWidth={strokeWidth * 0.6} strokeLinecap="round" />
            <path d="M68 16 Q68 26 66 34" stroke={strokeColor} strokeWidth={strokeWidth * 0.6} strokeLinecap="round" />
            {/* Head */}
            <path
              d="M50 88 C 22 88, 18 64, 18 52 C 18 38, 30 40, 50 40 C 70 40, 82 38, 82 52 C 82 64, 78 88, 50 88 Z"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Cute smile */}
            <path
              d="M38 64 C 44 76, 56 76, 62 64"
              fill="none"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            {/* Little nose dot */}
            <circle cx="50" cy="58" r="2.5" fill={strokeColor} />
          </g>
        );

      case 'puppy':
        return (
          <g>
            {/* Floppy puppy ears */}
            <path
              d="M26 38 C 14 36, 10 52, 14 66 C 18 76, 26 68, 28 54 Z"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M74 38 C 86 36, 90 52, 86 66 C 82 76, 74 68, 72 54 Z"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Head */}
            <path
              d="M50 88 C 24 88, 22 66, 24 46 C 26 28, 42 26, 50 26 C 58 26, 74 28, 76 46 C 78 66, 76 88, 50 88 Z"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Smile */}
            <path
              d="M37 63 C 43 75, 57 75, 63 63"
              fill="none"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            {/* Little puppy nose */}
            <path d="M46 54 Q50 51 54 54 Q50 58 46 54 Z" fill={strokeColor} />
          </g>
        );

      case 'fox':
        return (
          <g>
            {/* Fox rounded triangular ears */}
            <path
              d="M20 54 L 28 18 L 46 32"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M80 54 L 72 18 L 54 32"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Head */}
            <path
              d="M50 88 C 24 88, 16 66, 20 44 C 28 32, 72 32, 80 44 C 84 66, 76 88, 50 88 Z"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Smile */}
            <path
              d="M38 64 C 44 76, 56 76, 62 64"
              fill="none"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle cx="50" cy="56" r="3" fill={strokeColor} />
          </g>
        );

      case 'star':
        return (
          <g>
            {/* Cute Star Sprite */}
            <path
              d="M50 14 L 60 36 L 84 38 L 66 54 L 72 78 L 50 64 L 28 78 L 34 54 L 16 38 L 40 36 Z"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Smile */}
            <path
              d="M42 50 C 46 58, 54 58, 58 50"
              fill="none"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          </g>
        );

      case 'bear':
      default:
        return (
          <g>
            {/* Round Bear Ears */}
            <path
              d="M20 44 C 10 34, 18 16, 32 24 C 36 27, 39 31, 41 36"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M80 44 C 90 34, 82 16, 68 24 C 64 27, 61 31, 59 36"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Bear Head Silhouette */}
            <path
              d="M50 88 C 24 88, 16 66, 18 46 C 20 30, 36 30, 50 30 C 64 30, 80 30, 82 46 C 84 66, 76 88, 50 88 Z"
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Signature Cheerful Curved Smile */}
            <path
              d="M36 62 C 42 76, 58 76, 64 62"
              fill="none"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            {/* Little rounded bear nose */}
            <ellipse cx="50" cy="53" rx="4" ry="3" fill={strokeColor} />
          </g>
        );
    }
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center justify-center select-none ${
        onClick ? 'cursor-pointer hover:scale-105 active:scale-95 transition-transform' : ''
      } ${animated ? 'animate-subtle-float' : ''} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        className="overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Render the cute mascot geometry */}
        {renderMascotPath()}

        {/* Optional Party Hat when in party mode */}
        {variant === 'party' && (
          <g transform="translate(42, 6) rotate(-8)">
            <polygon
              points="10,0 2,24 18,24"
              fill="#fb7185"
              stroke="#18181b"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="0" r="3.5" fill="#facc15" stroke="#18181b" strokeWidth="2" />
            <circle cx="6" cy="14" r="1.5" fill="#ffffff" />
            <circle cx="13" cy="18" r="1.5" fill="#ffffff" />
          </g>
        )}
      </svg>
    </div>
  );
};
