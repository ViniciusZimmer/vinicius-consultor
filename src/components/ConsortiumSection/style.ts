import { Box, Button, styled } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const StyledButton = styled(motion(Button))(({ theme }) => ({
  padding: theme.spacing(3, 8),
  borderRadius: theme.shape.borderRadius * 4,
  fontWeight: 700,
  fontSize: "1.2rem",
  textTransform: "none",
  color: theme.palette.common.white,
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  boxShadow: `0 8px 20px ${theme.palette.primary.main}30`,
  border: "none",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

  "&:hover": {
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    boxShadow: `0 12px 30px ${theme.palette.primary.main}40`,
    transform: "translateY(-2px)",
  },

  "&:active": {
    transform: "translateY(0)",
    boxShadow: `0 4px 15px ${theme.palette.primary.main}50`,
  },

  // Efeito ripple customizado
  "&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 0,
    height: 0,
    borderRadius: "50%",
    background: `${theme.palette.common.white}30`,
    transition: "width 0.6s, height 0.6s, top 0.6s, left 0.6s",
    transform: "translate(-50%, -50%)",
  },

  "&:active::after": {
    width: "300px",
    height: "300px",
    top: "50%",
    left: "50%",
  },
}));

const SectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(8, 2),
  maxWidth: 1400,
  margin: "0 auto",
  minHeight: "85vh",
  gap: theme.spacing(6),
  position: "relative",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(10),
    padding: theme.spacing(12, 4),
    minHeight: "80vh",
  },

  [theme.breakpoints.up("lg")]: {
    gap: theme.spacing(12),
    padding: theme.spacing(15, 6),
  },
}));

const TextContainer = styled(MotionBox)(({ theme }) => ({
  flex: 1,
  maxWidth: 650,
  textAlign: "center",
  marginBottom: theme.spacing(4),
  position: "relative",
  zIndex: 2,

  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
    maxWidth: 700,
  },
}));

const ImageContainer = styled(MotionBox)(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  position: "relative",

  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(4),
  },
}));

const BackgroundImageWrapper = styled(MotionBox)(({ theme }) => ({
  width: "100%",
  maxWidth: 450,
  height: "auto",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",

  [theme.breakpoints.down("sm")]: {
    maxWidth: 320,
  },
}));

// Novo componente para o card flutuante
const FloatingCard = styled(MotionBox)(({ theme }) => ({
  backdropFilter: "blur(20px)",
  borderRadius: theme.shape.borderRadius * 4,
  padding: theme.spacing(2),
  boxShadow: `
    0 10px 30px ${theme.palette.primary.main}15,
    0 1px 8px ${theme.palette.common.black}10,
    inset 0 1px 0 ${theme.palette.common.white}40
  `,
  border: `1px solid ${theme.palette.common.white}30`,
  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}05 0%, ${theme.palette.secondary.main}05 100%)`,
    borderRadius: "inherit",
    pointerEvents: "none",
  },
}));

const GradientOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `
    radial-gradient(circle at 30% 20%, ${theme.palette.primary.main}08 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, ${theme.palette.secondary.main}06 0%, transparent 50%)
  `,
  borderRadius: "inherit",
  pointerEvents: "none",
  zIndex: 1,
}));

const DecorativeElement = styled(MotionBox)(() => ({
  position: "absolute",
  borderRadius: "50%",
  pointerEvents: "none",
  zIndex: 0,
}));

export {
  MotionBox,
  StyledButton,
  SectionContainer,
  TextContainer,
  ImageContainer,
  BackgroundImageWrapper,
  FloatingCard,
  GradientOverlay,
  DecorativeElement,
};
