const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop" as const,
      delay: i * 0.5,
    },
  }),
};

const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: [0, 1, 0],
    scale: [0, 1, 0.5],
    transition: {
      duration: 3,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "loop" as const,
      delay: i * 0.8,
    },
  }),
};

export {
  containerVariants,
  itemVariants,
  buttonVariants,
  lineVariants,
  dotVariants,
};
