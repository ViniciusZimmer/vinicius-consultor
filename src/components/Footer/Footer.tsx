import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

// --- Styled Components ---
const FooterContainer = styled(motion(Box))(({ theme }) => ({
  backgroundColor: theme.palette.grey[900], // Fundo escuro
  color: theme.palette.grey[100], // Texto claro
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

// --- Animation Variants ---
const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

// --- Main Component ---
function Footer() {
  return (
    <FooterContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <Typography variant="h6" fontWeight={700} gutterBottom>
        Fale conosco
      </Typography>
      <FooterLinks>
        <motion.a
          href="#about"
          variants={linkVariants}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Sobre nós
        </motion.a>
        <motion.a
          href="#services"
          variants={linkVariants}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Serviços
        </motion.a>
        <motion.a
          href="#contact"
          variants={linkVariants}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Contato
        </motion.a>
      </FooterLinks>
      <FooterButton variants={buttonVariants} whileHover="hover" whileTap="tap">
        Entre em contato
      </FooterButton>
      <CopyrightText>
        © {new Date().getFullYear()} Vinicius Consultor. Todos os direitos
        reservados.
      </CopyrightText>
    </FooterContainer>
  );
}

export default Footer;
