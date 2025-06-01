import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import Avatar from "@mui/material/Avatar";
import { avatarMotion } from "./animations";

const StyledAvatar = styled(motion(Avatar))(({ theme }) => ({
  borderRadius: "50%",
  border: `5px solid ${theme.palette.primary.main}`,
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  backgroundColor: theme.palette.background.paper,
  zIndex: 2,
}));

interface FloatingAvatarProps {
  src: string;
}

export default function FloatingAvatar({ src }: FloatingAvatarProps) {
  return (
    <StyledAvatar
      src={src}
      alt="Vendedor"
      {...avatarMotion}
      sx={{
        mb: 3,
        cursor: "pointer",
        width: { xs: 120, sm: 160 },
        height: { xs: 120, sm: 160 },
      }}
    />
  );
}
