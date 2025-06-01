import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { processSteps } from "../utils";
import AnimatedFlowDivider from "./AnimatedFlowDivider";

// --- Styled Components ---
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

// --- Animation Variants ---
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

// --- Main Component ---
function ConsortiumProcessSection() {
  return (
    <SectionContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <AnimatedFlowDivider />
      <Typography
        paddingBottom={4}
        color="primary"
        variant="h4"
        fontWeight={700}
        gutterBottom
      >
        Como funciona o consórcio?
      </Typography>

      <StepsWrapper>
        {processSteps.map((step) => (
          <StepContainer key={step.number} variants={itemVariants}>
            <StepNumber variants={itemVariants}>{step.number}</StepNumber>
            <StepCard
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              variants={itemVariants}
            >
              <StyledCardMedia image={step.imageSrc} />
              <StyledCardContent>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.description}
                </Typography>
              </StyledCardContent>
            </StepCard>
          </StepContainer>
        ))}
      </StepsWrapper>

      <StyledButton variants={buttonVariants} whileHover="hover" whileTap="tap">
        Simular agora
      </StyledButton>
    </SectionContainer>
  );
}

export default ConsortiumProcessSection;
