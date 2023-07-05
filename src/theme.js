import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
            100: "#d6d6d6",
            200: "#acacac",
            300: "#838383",
            400: "#404040",
            500: "#303030",
            600: "#262626",
            700: "#1d1d1d",
            800: "#131313",
            900: "#0a0a0a"
        },
        yellowAccent: {
            100: "#fffbe8",
            200: "#fff6d0",
            300: "#fff2b9",
            400: "#ffeda1",
            500: "#ffe98a",
            600: "#ccba6e",
            700: "#998c53",
            800: "#665d37",
            900: "#332f1c"
        },
        white: {
            100: "#fdfdfd",
            200: "#fbfbfb",
            300: "#f9f9f9",
            400: "#f7f7f7",
            500: "#f5f5f5",
            600: "#c4c4c4",
            700: "#939393",
            800: "#626262",
            900: "#313131"
        },
      }
    : {
        primary: {
            100: "#0a0a0a",
            200: "#131313",
            300: "#1d1d1d",
            400: "#fcfcfc",
            500: "#303030",
            600: "#595959",
            700: "#838383",
            800: "#acacac",
            900: "#d6d6d6",
        },
        yellowAccent: {
            100: "#332f1c",
            200: "#665d37",
            300: "#998c53",
            400: "#6a4400",
            500: "#5a4600",
            600: "#ffeda1",
            700: "#fff2b9",
            800: "#fff6d0",
            900: "#fffbe8",
        },
        white: {
            100: "#313131",
            200: "#626262",
            300: "#939393",
            400: "#c4c4c4",
            500: "#f5f5f5",
            600: "#f7f7f7",
            700: "#f9f9f9",
            800: "#fbfbfb",
            900: "#fdfdfd",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.yellowAccent[500],
            },
            neutral: {
              dark: colors.primary[700],
              main: colors.yellowAccent[500],
              light: colors.white[400],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.yellowAccent[500],
            },
            neutral: {
              dark: colors.primary[700],
              main: colors.yellowAccent[100],
              light: colors.white[400],
            },
            background: {
              default: "#F5F5F5",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};



/* primary: {
        100: "#d6d6d6",
        200: "#acacac",
        300: "#838383",
        400: "#595959",
        500: "#303030",
        600: "#262626",
        700: "#1d1d1d",
        800: "#131313",
        900: "#0a0a0a"
    },
    yellowAccent: {
        100: "#fffbe8",
        200: "#fff6d0",
        300: "#fff2b9",
        400: "#ffeda1",
        500: "#ffe98a",
        600: "#ccba6e",
        700: "#998c53",
        800: "#665d37",
        900: "#332f1c"
    },
    white: {
        100: "#fdfdfd",
        200: "#fbfbfb",
        300: "#f9f9f9",
        400: "#f7f7f7",
        500: "#f5f5f5",
        600: "#c4c4c4",
        700: "#939393",
        800: "#626262",
        900: "#313131"
    }*/