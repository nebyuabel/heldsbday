import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiBackgroundProps {
  active?: boolean;
}

export const fireCelebrationBurst = () => {
  // Classic festive celebration explosion
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#fb7185', '#f43f5e', '#fda4af', '#fcd34d', '#38bdf8', '#a78bfa', '#f59e0b'],
  });
};

export const fireSideCannons = () => {
  const end = Date.now() + 1.2 * 1000;
  const colors = ['#f43f5e', '#fb7185', '#fde047', '#f472b6', '#38bdf8'];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: colors,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

export const ConfettiBackground: React.FC<ConfettiBackgroundProps> = ({ active = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate gentle static & slowly floating particles matching the screenshot
    interface Particle {
      x: number;
      y: number;
      size: number;
      widthRatio: number;
      color: string;
      rotation: number;
      rotationSpeed: number;
      speedY: number;
      speedX: number;
      opacity: number;
    }

    const colors = [
      'rgba(244, 114, 182, 0.45)', // blush
      'rgba(251, 113, 133, 0.4)', // coral
      'rgba(28, 25, 23, 0.25)',    // soft dark slate/black
      'rgba(214, 211, 209, 0.5)',  // muted stone
      'rgba(253, 164, 175, 0.4)',  // rose
      'rgba(180, 83, 9, 0.2)',     // bronze
    ];

    const particles: Particle[] = [];
    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 5 + 3,
        widthRatio: Math.random() > 0.6 ? 2.4 : 1, // rectangles and dots
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
        speedY: Math.random() * 0.25 + 0.1,
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.6 + 0.3,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, (-p.size * p.widthRatio) / 2, p.size, p.size * p.widthRatio);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-80"
    />
  );
};
