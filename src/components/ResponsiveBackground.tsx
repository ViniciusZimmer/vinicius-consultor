import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
const images = [
  "src/assets/moto.jpeg",
  "src/assets/moto.jpeg",
  "src/assets/moto.jpeg",
];

const StyledBackground = styled(Box, {
  shouldForwardProp: (prop) => prop !== "backgroundImage",
})<{ backgroundImage: string }>(({ theme, backgroundImage }) => ({
  backgroundColor: "#1e1e1e",
  minHeight: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "center",
  padding: "16px 0",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "background-image 0.7s ease-in-out",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 0,
  },
}));

type ResponsiveBackgroundProps = {
  children: ReactNode;
};

export default function ResponsiveBackground({
  children,
}: ResponsiveBackgroundProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Troca a cada 4 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledBackground backgroundImage={images[index]}>
      {children}
    </StyledBackground>
  );
}
