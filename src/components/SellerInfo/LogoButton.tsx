import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { logoMotion } from "./animations";
import type { ReactElement } from "react";

interface LogoButtonProps {
  onClick?: string;
  logo: ReactElement;
}

export default function LogoButton({ onClick, logo }: LogoButtonProps) {
  return (
    <Box
      onClick={onClick ? () => window.open(onClick, "_blank") : undefined}
      sx={{
        mb: 3,
        cursor: onClick ? "pointer" : "default",
      }}
      component={motion.div}
      {...logoMotion}
      width={120}
    >
      {logo}
    </Box>
  );
}
