import { Box, Button, styled } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const StyledButton = styled(motion(Button))(({ theme }) => ({
  padding: theme.spacing(2.5, 6),
  borderRadius: theme.shape.borderRadius * 3,
  fontWeight: 700,
  fontSize: "1.1rem",
  textTransform: "none",
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const SectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(10, 3),
  maxWidth: 1400,
  margin: "0 auto",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: theme.spacing(8),
    padding: theme.spacing(12, 6),
  },
}));

const TextContainer = styled(MotionBox)(({ theme }) => ({
  flex: 1,
  maxWidth: 600,
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

const ImageContainer = styled(MotionBox)(() => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const BackgroundImageWrapper = styled(MotionBox)(() => ({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export {
  MotionBox,
  StyledButton,
  SectionContainer,
  TextContainer,
  ImageContainer,
  BackgroundImageWrapper,
};
