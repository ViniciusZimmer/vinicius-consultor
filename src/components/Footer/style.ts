import { Box, Button, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";

const FooterContainer = styled(motion(Box))(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.grey[100],
  padding: theme.spacing(6, 3),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
}));

const FooterLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  marginTop: theme.spacing(4),
  flexWrap: "wrap",
  justifyContent: "center",
}));

const FooterButton = styled(motion(Button))(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2, 4),
  fontWeight: 600,
  fontSize: "1rem",
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(4),
  fontSize: "0.875rem",
  color: theme.palette.grey[500],
}));

export { FooterContainer, FooterLinks, FooterButton, CopyrightText };
