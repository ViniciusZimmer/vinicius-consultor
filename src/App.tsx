import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import theme from "./theme";
import {
  ConsorcioSection,
  ConsortiumProcessSection,
  Header,
  SellerInfoSection,
} from "./components";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: theme.palette.secondary.main,
          minHeight: "100vh",
        }}
      >
        <Header />
        <Container sx={{ mt: 4, mb: 4, pt: 4 }}>
          <SellerInfoSection />
          <ConsorcioSection />
          <ConsortiumProcessSection />
        </Container>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
