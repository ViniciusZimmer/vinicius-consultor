import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Gera bolhas com posições e velocidades aleatórias
const bubbles = Array.from({ length: 30 }, (_, i) => {
  const colors = ["#e0e6ed", "#3fa9f5", "#3fa9f5", "#f0f2f5", "#d1e8ff"];
  const size = `${Math.random() * 10 + 10}vmin`;
  const directionX = Math.random() > 0.5 ? 1 : -1;
  const directionY = Math.random() > 0.5 ? 1 : -1;
  return {
    color: colors[i % colors.length],
    size,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 20 + 15}s`,
    delay: `${-Math.random() * 60}s`,
    xMove: `${directionX * (Math.random() * 60 + 20)}px`, // aumente o deslocamento
    yMove: `${directionY * (Math.random() * 60 + 20)}px`, // aumente o deslocamento
    blur: `${Math.random() * 2 + 1}px`,
  };
});

// Container do fundo
const BubblesBg = styled(Box)({
  position: "absolute",
  width: "100vw",
  height: "100vh",
  top: 0,
  left: 0,
  overflow: "hidden",
  zIndex: 0,
  pointerEvents: "none",
});

// Cada bolha com animação
const Bubble = styled("span")<{
  color: string;
  top: string;
  left: string;
  duration: string;
  delay: string;
  size: string;
  xMove: string;
  yMove: string;
  blur: string;
}>(({ color, top, left, duration, delay, size, xMove, yMove, blur }) => ({
  position: "absolute",
  top,
  left,
  width: size,
  height: size,
  backgroundColor: color,
  borderRadius: "50%",
  opacity: 0.35,
  filter: `blur(${blur})`,
  mixBlendMode: "screen",
  animation: `float ${duration} ease-in-out infinite`,
  animationDelay: delay,
  transformOrigin: "center",
  "--x-move": xMove,
  "--y-move": yMove,
}));

// Keyframes de animação de movimento
const keyframes = `
@keyframes float {
  0% {
    transform: translate(0, 0) scale(1) rotate(0deg);
    opacity: 0.3;
  }
  40% {
    opacity: 0.5;
  }
  50% {
    transform: translate(var(--x-move), var(--y-move)) scale(1.15) rotate(180deg);
    opacity: 0.7;
  }
  60% {
    opacity: 0.5;
  }
  100% {
    transform: translate(0, 0) scale(1) rotate(360deg);
    opacity: 0.3;
  }
}
`;

export default function BubblesBackground() {
  React.useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = keyframes;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <BubblesBg>
      {bubbles.map((b, i) => (
        <Bubble key={i} {...b} />
      ))}
    </BubblesBg>
  );
}
