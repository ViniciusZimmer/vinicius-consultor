import {
  Box,
  Button,
  Fab,
  Paper,
  styled,
  ToggleButtonGroup,
} from "@mui/material";

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "90vh",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    overflow: "hidden",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-100px",
    right: "-100px",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    zIndex: 0,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-50px",
    left: "-50px",
    width: "200px",
    height: "200px",
    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
    animation: "float 6s ease-in-out infinite",
    zIndex: 0,
  },
  "@keyframes float": {
    "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
    "50%": { transform: "translateY(-20px) rotate(5deg)" },
  },
}));

const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  padding: theme.spacing(8),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4),
    textAlign: "center",
    alignItems: "center",
  },
}));

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  flexWrap: "wrap",
  justifyContent: "center",
  "& .MuiToggleButton-root": {
    border: "2px solid #e5e7eb",
    borderRadius: 25,
    padding: "8px 20px",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#6b7280",
    backgroundColor: "#f9fafb",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "#f3f4f6",
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
      borderColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  },
}));

const FormContainer = styled(Paper)(({ theme }) => ({
  maxWidth: 450,
  width: "100%",
  height: 600,
  padding: theme.spacing(4),
  borderRadius: 24,
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgba(255, 255, 255, 0.98)",
  backdropFilter: "blur(10px)",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    padding: theme.spacing(3),
    height: 700,
  },
}));

const StepContent = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
});

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  fontWeight: "bold",
  fontSize: "1.1rem",
  padding: theme.spacing(1.8, 4),
  width: "100%",
  borderRadius: 30,
  textTransform: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    transform: "translateY(-2px)",
  },
}));

const WhatsAppButton = styled(Fab)(() => ({
  position: "fixed",
  bottom: 24,
  right: 24,
  backgroundColor: "#25D366",
  color: "white",
  width: 56,
  height: 56,
  zIndex: 9999,
  animation: "pulse 1.5s infinite",
  "&:hover": {
    backgroundColor: "#128C7E",
  },
  "@keyframes pulse": {
    "0%": {
      boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.7)",
      transform: "scale(1)",
    },
    "70%": {
      boxShadow: "0 0 0 16px rgba(37, 211, 102, 0)",
      transform: "scale(1.08)",
    },
    "100%": {
      boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)",
      transform: "scale(1)",
    },
  },
}));

export {
  MainContainer,
  HeroSection,
  StyledToggleButtonGroup,
  FormContainer,
  StepContent,
  StyledButton,
  WhatsAppButton,
};
