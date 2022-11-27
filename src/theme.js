import { createTheme } from "@mui/material/styles";

const Themes = (mode) => {
  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      primary: {
        light: "#028576",
        main: "#006156",
      },
      secondary: {
        main: "#ADBE93",
      },
      black: {
        main: "#000",
      },
      background: {
        ...(mode === "light"
          ? {
              default: "#fff",
            }
          : {
              default: "#121212",
            }),
      },
      text: {
        ...(mode === "light"
          ? {
              primary: "rgba(0, 0, 0, 0.87)",
              secondary: "rgba(0, 0, 0, 0.6)",
              disable: "rgba(0, 0, 0, 0.38)",
            }
          : {
              primary: "#fff",
              secondary: "rgba(255, 255, 255, 0.7)",
              disable: "rgba(255, 255, 255, 0.5)",
            }),
      },
    },
    typography: {
      h5: {
        fontFamily: "AvenirLT85Heavy",
      },
      subtitle3: {
        fontFamily: "AvenirLT55Roman",
      },
      headtitle1: {
        fontFamily: "AvenirLT85Heavy",
        fontSize: "2rem",
      },
      headsubtitle: {
        fontFamily: "AvenirLT35Light",
        fontSize: "1.2rem",
      },
      // h5: {
      //   fontWeight: 'bold',
      // }
    },
  });

  const theme = createTheme(getDesignTokens(mode), [mode]);

  return theme;
};

export default Themes;
