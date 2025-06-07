import { motion } from "framer-motion";
import MinaNax from "../../assets/svg/MinaNax";
import { consortiumTexts } from "../../utils";
import { Box, Typography, useTheme } from "@mui/material";
import {
  BackgroundImageWrapper,
  ImageContainer,
  SectionContainer,
  StyledButton,
  TextContainer,
  FloatingCard,
  GradientOverlay,
  DecorativeElement,
} from "./style";

export default function ConsortiumSection() {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[50]} 100%)`,
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, ${theme.palette.primary.main}15 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, ${theme.palette.secondary.main}10 0%, transparent 50%),
                      radial-gradient(circle at 40% 40%, ${theme.palette.info.main}08 0%, transparent 50%)`,
          pointerEvents: "none",
        },
      }}
    >
      {/* Elementos decorativos flutuantes */}
      <DecorativeElement
        sx={{
          top: "10%",
          left: "5%",
          width: 80,
          height: 80,
          backgroundColor: theme.palette.primary.main,
          opacity: 0.1,
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <DecorativeElement
        sx={{
          top: "60%",
          right: "8%",
          width: 60,
          height: 60,
          backgroundColor: theme.palette.secondary.main,
          opacity: 0.15,
        }}
        animate={{
          y: [0, 15, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Novas bolinhas flutuantes */}
      <DecorativeElement
        sx={{
          top: "30%",
          left: "15%",
          width: 40,
          height: 40,
          backgroundColor: theme.palette.info.main,
          opacity: 0.12,
        }}
        animate={{
          y: [0, -10, 0],
          x: [0, 10, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <DecorativeElement
        sx={{
          bottom: "15%",
          left: "25%",
          width: 30,
          height: 30,
          backgroundColor: theme.palette.success.main,
          opacity: 0.13,
        }}
        animate={{
          y: [0, 12, 0],
          x: [0, -8, 0],
          rotate: [0, 60, 120],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <DecorativeElement
        sx={{
          bottom: "10%",
          right: "18%",
          width: 50,
          height: 50,
          backgroundColor: theme.palette.warning.main,
          opacity: 0.1,
        }}
        animate={{
          y: [0, -15, 0],
          x: [0, 12, 0],
          rotate: [0, 120, 240],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ width: "100%", position: "relative", zIndex: 1 }}
      >
        <SectionContainer>
          <TextContainer
            variants={itemVariants}
            sx={{
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: -20,
                left: -20,
                right: -20,
                bottom: -20,
                background: `linear-gradient(135deg, ${theme.palette.common.white}40, ${theme.palette.common.white}10)`,
                borderRadius: theme.shape.borderRadius * 4,
                backdropFilter: "blur(10px)",
                zIndex: -1,
                opacity: 0,
                transition: "opacity 0.3s ease",
              },
              "&:hover::before": {
                opacity: 1,
              },
            }}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="overline"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  letterSpacing: 2,
                  mb: 2,
                  display: "inline-block",
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    width: "100%",
                    height: 2,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    borderRadius: 1,
                  },
                }}
              >
                {consortiumTexts.subtitle}
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  color: theme.palette.text.primary,
                  mb: 4,
                  lineHeight: 1.2,
                  background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.text.secondary} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontSize: { xs: "2.2rem", md: "3rem", lg: "3.5rem" },
                  textShadow: `0 4px 8px ${theme.palette.primary.main}20`,
                }}
              >
                {consortiumTexts.title}
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "1.2rem",
                  mb: 3,
                  lineHeight: 1.8,
                  fontWeight: 400,
                }}
              >
                {consortiumTexts.description1}
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "1.2rem",
                  mb: 5,
                  lineHeight: 1.8,
                  fontWeight: 400,
                }}
              >
                {consortiumTexts.description2}
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <StyledButton
                variant="contained"
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 10px 25px ${theme.palette.primary.main}40`,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background: `linear-gradient(90deg, transparent, ${theme.palette.common.white}30, transparent)`,
                    transition: "left 0.6s ease",
                  },
                  "&:hover::before": {
                    left: "100%",
                  },
                }}
              >
                {consortiumTexts.buttonText}
              </StyledButton>
            </motion.div>
          </TextContainer>

          <ImageContainer variants={itemVariants}>
            <FloatingCard
              animate={{
                y: [0, -10, 0],
              }}
              style={{
                transition: "0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                animationDuration: "4s",
                animationIterationCount: "infinite",
              }}
            >
              <GradientOverlay />

              <BackgroundImageWrapper
                sx={{
                  width: { xs: "100%", md: "100%" },
                  height: { xs: 320, md: 460 },
                  p: 4,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, rotateY: -15 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                >
                  <MinaNax width="100%" height="100%" />
                </motion.div>

                {/* Elementos decorativos do card */}
                <motion.div
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: theme.palette.success.main,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <motion.div
                  style={{
                    position: "absolute",
                    bottom: 30,
                    left: 30,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: theme.palette.warning.main,
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
              </BackgroundImageWrapper>
            </FloatingCard>
          </ImageContainer>
        </SectionContainer>
      </motion.div>
    </Box>
  );
}
