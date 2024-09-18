import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {
            blue: {
                1: '#0d1520',
                2: '#111927',
                3: '#0d2847',
                4: '#003362',
                5: '#004074',
                6: '#104d87',
                7: '#205d9e',
                8: '#2870bd',
                9: '#0090ff',
                10: '#3b9eff',
                11: '#70b8ff',
                12: '#c2e6ff'


            },
            purple: {
                1: '#18111b',
                2: '#1e1523',
                3: '#301c3b',
                4: '#3d224e',
                5: '#48295c',
                6: '#54346b',
                7: '#664282',
                8: '#8457aa',
                9: '#8e4ec6',
                10: '#9a5cd0',
                11: '#d19dff',
                12: '#ecd9fa'
            },
            green: {
                1: '#0e1512',
                2: '#121b17',
                3: '#132d21',
                4: '#113b29',
                5: '#174933',
                6: '#20573e',
                7: '#28684a',
                8: '#2f7c57',
                9: '#30a46c',
                10: '#33b074',
                11: '#3dd68c',
                12: '#b1f1cb',
            },
            Sky: {
                1: '#0d141f',
                2: '#111a27',
                3: '#112840',
                4: '#113555',
                5: '#154467',
                6: '#1b537b',
                7: '#1f6692',
                8: '#197cae',
                9: '#7ce2fe',
                10: '#a8eeff',
                11: '#75c7f0',
                12: '#c2f3ff',
            },
            gray: {
                1: '#111111',
                2: '#191919',
                3: '#222222',
                4: '#2a2a2a',
                5: '#313131',
                6: '#3a3a3a',
                7: '#484848',
                8: '#606060',
                9: '#6e6e6e',
                10: '#7b7b7b',
                11: '#b4b4b4',
                12: '#eeeeee',

            }


        }
        : {
            blue: {
                1: '#fbfdff',
                2: '#f4faff',
                3: '#e6f4fe',
                4: '#d5efff',
                5: '#c2e5ff',
                6: '#acd8fc',
                7: '#8ec8f6',
                8: '#5eb1ef',
                9: '#0090ff',
                10: '#0588f0',
                11: '#0d74ce',
                12: '#113264',
            },
            purple: {
                1: '#fefcfe',
                2: '#fbf7fe',
                3: '#f7edfe',
                4: '#f2e2fc',
                5: '#ead5f9',
                6: '#e0c4f4',
                7: '#d1afec',
                8: '#be93e4',
                9: '#8e4ec6',
                10: '#8347b9',
                11: '#8145b5',
                12: '#402060',

            },
            green: {
                1: '#fbfefc',
                2: '#f4fbf6',
                3: '#e6f6eb',
                4: '#d6f1df',
                5: '#c4e8d1',
                6: '#adddc0',
                7: '#8eceaa',
                8: '#5bb98b',
                9: '#30a46c',
                10: '#2b9a66',
                11: '#218358',
                12: '#193b2d',
            },
            Sky: {
                1: '#f9feff',
                2: '#f1fafd',
                3: '#e1f6fd',
                4: '#d1f0fa',
                5: '#bee7f5',
                6: '#a9daed',
                7: '#8dcae3',
                8: '#60b3d7',
                9: '#7ce2fe',
                10: '#74daf8',
                11: '#00749e',
                12: '#1d3e56',
            },
            gray: {
                1: '#fcfcfc',
                2: '#f9f9f9',
                3: '#f0f0f0',
                4: '#e8e8e8',
                5: '#e0e0e0',
                6: '#d9d9d9',
                7: '#cecece',
                8: '#bbbbbb',
                9: '#8d8d8d',
                10: '#838383',
                11: '#646464',
                12: '#202020',

            }


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
                        main: colors.blue[1],
                    },
                    secondary: {
                        main: colors.blue[5],
                    },
                    neutral: {
                        dark: colors.purple[7],
                        main: colors.purple[5],
                        light: colors.purple[1],
                    },
                    background: {
                        default: colors.blue[1],
                    },
                }
                : {
                    // palette values for light mode
                    primary: {
                        main: colors.blue[1]
                    },
                    secondary: {
                        main: colors.green[5],
                    },
                    neutral: {
                        dark: colors.purple[7],
                        main: colors.purple[5],
                        light: colors.purple[1],
                    },
                    background: {
                        default: colors.blue[1],
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
    toggleColorMode: () => { },
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(() => ({
        toggleColorMode: () =>
            setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};
