import { Box, useTheme } from "@mui/material";

import { motion } from "framer-motion";
import { AnimatedDividerContainer } from "../style";
import { lineVariants, dotVariants } from "../animation";

const AnimatedFlowIllustration = () => {
  const theme = useTheme();
  const mainColor = theme.palette.primary.main;
  const accentColor = theme.palette.secondary.light;
  const thirdColor = theme.palette.info.light;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 700,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 700 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          d="M50 90 C 200 40, 500 140, 650 90"
          stroke={mainColor}
          strokeWidth="8"
          strokeLinecap="round"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        />
        <motion.path
          d="M50 110 C 200 60, 500 160, 650 110"
          stroke={accentColor}
          strokeWidth="6"
          strokeLinecap="round"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          custom={0.2}
        />
        <motion.path
          d="M50 70 C 200 20, 500 120, 650 70"
          stroke={thirdColor}
          strokeWidth="5"
          strokeLinecap="round"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          custom={0.4}
        />
        <motion.circle
          cx="100"
          cy="90"
          r="8"
          fill={mainColor}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        />
        <motion.circle
          cx="250"
          cy="60"
          r="6"
          fill={accentColor}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
          custom={0.5}
        />
        <motion.circle
          cx="400"
          cy="120"
          r="10"
          fill={thirdColor}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        />
        <motion.circle
          cx="550"
          cy="90"
          r="7"
          fill={mainColor}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
          custom={1.5}
        />
      </svg>
    </Box>
  );
};

export default function AnimatedFlowDivider() {
  return (
    <AnimatedDividerContainer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <AnimatedFlowIllustration />
    </AnimatedDividerContainer>
  );
}
