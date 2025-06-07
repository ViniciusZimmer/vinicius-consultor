import theme from "@/theme";

const logoMotion = {
  whileHover: {
    scale: 1.18,
    rotate: -8,
  },
  whileTap: { scale: 0.92, rotate: 0 },
  transition: { type: "spring", stiffness: 180, damping: 8 },
};

const buttonMotion = {
  whileHover: {
    scale: 1.16,
    color: theme.palette.primary.dark,
  },
  whileTap: { scale: 0.92 },
  transition: { type: "spring", stiffness: 180, damping: 8 },
};

export { buttonMotion, logoMotion };
