import { createTheme } from "@mui/material/styles";

export function getTheme(mode) {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#d3af5b",
      },
      secondary: {
        main: isDark ? "#8a8a8a" : "#6f6758",
      },
      background: {
        default: isDark ? "#383838" : "#ece5d7",
        paper: isDark ? "rgba(66, 66, 66, 0.9)" : "rgba(255, 250, 242, 0.92)",
      },
      text: {
        primary: isDark ? "#f4efe4" : "#221d17",
        secondary: isDark ? "#c9c4b7" : "#5c5448",
      },
    },
    typography: {
      fontFamily: '"Poppins", "Segoe UI", sans-serif',
      h2: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 600,
      },
      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 20,
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: isDark
              ? "linear-gradient(180deg, rgba(117, 117, 117, 0.9), rgba(56, 56, 56, 0.94))"
              : "linear-gradient(180deg, rgba(255, 252, 246, 0.98), rgba(238, 230, 215, 0.95))",
            border: "1px solid rgba(211, 175, 91, 0.45)",
            boxShadow: "0 24px 80px rgba(0, 0, 0, 0.18)",
            backdropFilter: "blur(14px)",
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: isDark ? "#bdb5a3" : "#6d6252",
            minHeight: 52,
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: "#d3af5b",
            height: 3,
          },
        },
      },
    },
  });
}
