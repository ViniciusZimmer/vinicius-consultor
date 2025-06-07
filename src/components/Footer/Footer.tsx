import { motion } from "framer-motion";
import {
  CopyrightText,
  FooterButton,
  FooterContainer,
  FooterLinks,
} from "./style";
import { Typography } from "@mui/material";
import { buttonVariants, footerVariants, linkVariants } from "./animation";
import { footerTexts } from "@/utils/constants";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <Typography variant="h6" fontWeight={700} gutterBottom>
        {footerTexts.title}
      </Typography>
      <FooterLinks>
        {footerTexts.links.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            variants={linkVariants}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {link.label}
          </motion.a>
        ))}
      </FooterLinks>
      <FooterButton variants={buttonVariants} whileHover="hover" whileTap="tap">
        {footerTexts.button}
      </FooterButton>
      <CopyrightText>{footerTexts.copyright(currentYear)}</CopyrightText>
    </FooterContainer>
  );
}

export default Footer;
