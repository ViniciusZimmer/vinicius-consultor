import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#3fa9f5",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f0f2f5",
      contrastText: "#222",
    },
    background: {
      default: "#f0f2f5",
      paper: "#fff",
    },
    text: {
      primary: "#222",
      secondary: "#555",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#ffa726",
    },
    info: {
      main: "#0288d1",
    },
    success: {
      main: "#2e7d32",
    },
  },
  typography: {
    fontFamily: "'Axiforma', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          transition: "background 0.2s",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
