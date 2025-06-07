import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const AnimatedDividerContainer = styled(MotionBox)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
  height: 180,
  overflow: "hidden",
  backgroundColor: theme.palette.background.default,
}));

const SectionContainer = styled(motion(Box))(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(10, 3),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
}));

const StepsWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(10),
  width: "100%",
  maxWidth: 1200,
  gridTemplateColumns: "1fr",
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(12),
  },
}));

const StepContainer = styled(motion(Box))(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  alignItems: "center",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "flex-start",
    textAlign: "left",
  },
}));

const StepNumber = styled(motion(Box))(({ theme }) => ({
  width: 72,
  height: 72,
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  fontSize: "2rem",
  flexShrink: 0,
  [theme.breakpoints.up("md")]: {
    marginRight: theme.spacing(6),
  },
}));

const StepCard = styled(motion(Card))(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
  borderRadius: theme.shape.borderRadius * 2,
  overflow: "hidden",
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 220,
  [theme.breakpoints.down("sm")]: {
    height: 160,
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const StyledButton = styled(motion(Button))(({ theme }) => ({
  marginTop: theme.spacing(10),
  padding: theme.spacing(2.5, 6),
  fontWeight: 600,
  fontSize: "1.25rem",
  borderRadius: theme.shape.borderRadius * 3,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export {
  AnimatedDividerContainer,
  MotionBox,
  SectionContainer,
  StepsWrapper,
  StepContainer,
  StepNumber,
  StepCard,
  StyledCardMedia,
  StyledCardContent,
  StyledButton,
};
