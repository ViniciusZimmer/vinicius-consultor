import { Box, Typography, Button, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import MinaNax from "../assets/svg/MinaNax";
import { consortiumTexts } from "../utils";

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

export default function ConsorcioSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
    >
      <SectionContainer>
        <TextContainer
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600,
              letterSpacing: 1.2,
              mb: 2,
            }}
          >
            {consortiumTexts.subtitle}
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: theme.palette.text.primary,
              mb: 3,
              lineHeight: 1.25,
            }}
          >
            {consortiumTexts.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "1.1rem",
              mb: 2,
              lineHeight: 1.8,
            }}
          >
            {consortiumTexts.description1}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "1.1rem",
              mb: 4,
              lineHeight: 1.8,
            }}
          >
            {consortiumTexts.description2}
          </Typography>

          <StyledButton
            variant="contained"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            {consortiumTexts.buttonText}
          </StyledButton>
        </TextContainer>

        <ImageContainer
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <BackgroundImageWrapper
            sx={{
              width: { xs: "100%", md: "100%" },
              height: { xs: 320, md: 460 },
              p: 3,
            }}
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <MinaNax width="100%" height="100%" />
            </motion.div>
          </BackgroundImageWrapper>
        </ImageContainer>
      </SectionContainer>
    </Box>
  );
}
