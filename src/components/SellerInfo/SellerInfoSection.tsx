import { Box, Typography, Divider, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";

import { SellerInfoTexts } from "@/utils";
import { LogoCanopus, LogoNax } from "@/assets/svg";
import { FloatingAvatar, InfoItem, LogoButton } from ".";

import sellerPhoto from "@/assets/nagua.png";

export default function SellerInfoSection() {
  const theme = useTheme();

  const infoItems = [
    {
      icon: <EmailIcon color="primary" fontSize="small" />,
      text: SellerInfoTexts.email,
      link: SellerInfoTexts.emailLink,
    },
    {
      icon: <PhoneIcon color="primary" fontSize="small" />,
      text: SellerInfoTexts.phone,
      link: SellerInfoTexts.phoneLink,
    },
    {
      icon: <PhoneIcon color="primary" fontSize="small" />,
      text: SellerInfoTexts.whatsapp,
      link: SellerInfoTexts.whatsappLink,
    },
    {
      icon: <LocationOnIcon color="primary" fontSize="small" />,
      text: SellerInfoTexts.address,
      link: SellerInfoTexts.mapsLink,
    },
    {
      icon: <FacebookIcon color="primary" fontSize="small" />,
      text: SellerInfoTexts.facebook,
      link: SellerInfoTexts.facebookLink,
    },
  ];

  return (
    <Box
      sx={{
        py: 5,
        backgroundColor: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
    >
      <FloatingAvatar src={sellerPhoto} />

      <Box
        sx={{
          mt: 4,
          width: "100%",
          maxWidth: { xs: "90%", sm: 700 },
          textAlign: "left",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary"
          gutterBottom
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
        >
          {SellerInfoTexts.sellerName}
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3, fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          {SellerInfoTexts.sellerDescription}
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Stack spacing={2}>
          {infoItems.map((item, idx) => (
            <InfoItem key={idx} {...item} />
          ))}
        </Stack>
      </Box>

      <Box
        mt={5}
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={{ xs: 2, sm: 4 }}
        flexWrap="wrap"
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <LogoButton
          onClick={SellerInfoTexts.consorcioCanopusLink}
          logo={<LogoCanopus fill={theme.palette.primary.main} />}
        />
        <LogoButton
          onClick={SellerInfoTexts.naxOpenFinanceLink}
          logo={<LogoNax fill={theme.palette.primary.main} />}
        />
      </Box>
    </Box>
  );
}
