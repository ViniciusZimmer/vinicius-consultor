import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  ListItem,
  ListItemButton,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { motion } from "framer-motion";
import { LogoCanopus, LogoNax } from "../../assets/svg";
import { buttonMotion, logoMotion } from "./animations";
import { headerMenuItems } from "@/utils/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <AppBar
      color="default"
      elevation={1}
      sx={{
        bgcolor: "#fff",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 1, sm: 3 },
          gap: 2,
          minHeight: { xs: 74, sm: 82 },
        }}
      >
        <Box display="flex" flexDirection="row" alignItems="center" gap={4}>
          <Box width={120} component={motion.div} {...logoMotion}>
            <LogoCanopus
              width="100%"
              height="100%"
              fill={theme.palette.primary.main}
            />
          </Box>
          <Box width={120} component={motion.div} {...logoMotion}>
            <LogoNax
              width="100%"
              height="100%"
              fill={theme.palette.primary.main}
            />
          </Box>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            onClick={() => setOpen(true)}
            edge="end"
            sx={{ color: theme.palette.primary.main }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <Box
              sx={{
                width: 220,
                py: 2,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
              role="presentation"
              onClick={() => setOpen(false)}
            >
              {headerMenuItems.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                    sx={{
                      justifyContent: "flex-start",
                      px: 3,
                      py: 1.5,
                    }}
                  >
                    <motion.span
                      whileHover={{
                        scale: 1.08,
                        color: theme.palette.primary.dark,
                      }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
                      style={{
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        width: "100%",
                        textAlign: "left",
                        fontSize: 16,
                      }}
                    >
                      {item.label}
                    </motion.span>
                  </ListItemButton>
                </ListItem>
              ))}
            </Box>
          </Drawer>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {headerMenuItems.map((item) => (
            <motion.div
              key={item.label}
              {...buttonMotion}
              style={{ display: "flex" }}
            >
              <Button
                sx={{
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  transition: "background 0.2s",
                  "&:hover": {
                    background: theme.palette.action.hover,
                  },
                }}
                href="#simulador"
              >
                {item.label}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
