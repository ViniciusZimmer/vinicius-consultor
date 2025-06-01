import { Stack, Typography, Link, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { type ReactElement } from "react";

interface InfoItemProps {
  icon: ReactElement;
  text: string;
  link?: string;
}

export default function InfoItem({ icon, text, link }: InfoItemProps) {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      component={motion.div}
      whileHover={{ scale: 1.03 }}
    >
      {icon}
      {link ? (
        <Link
          href={link}
          target="_blank"
          rel="noopener"
          underline="none"
          sx={{
            color: theme.palette.text.primary,
            fontSize: theme.typography.body2.fontSize,
            "&:hover": { color: theme.palette.primary.main },
          }}
        >
          {text}
        </Link>
      ) : (
        <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
          {text}
        </Typography>
      )}
    </Stack>
  );
}
