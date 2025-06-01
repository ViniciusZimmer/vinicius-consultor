export const avatarMotion = {
  initial: { y: 0, rotate: 0 },
  animate: { y: [0, -10, 0], rotate: [0, 3, -3, 0] },
  whileHover: {
    y: [0, -20, 10, -15, 0],
    rotate: [0, 10, -10, 5, -5, 0],
    scale: 1.1,
  },
  transition: {
    repeat: Infinity,
    duration: 2,
    ease: "easeInOut",
    repeatDelay: 0.5,
  },
  whileTap: { scale: 0.95, rotate: 0 },
};

export const logoMotion = {
  whileHover: { scale: 1.18, rotate: -8 },
  whileTap: { scale: 0.92, rotate: 0 },
  transition: { type: "spring", stiffness: 180, damping: 8 },
};
