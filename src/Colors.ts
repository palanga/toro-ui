import { createTheme } from '@material-ui/core/styles';

// https://coolors.co/301934-ff5a36-9a50a5-ff8a70-010b13-a0a19e-d3cec6-fffaf0-c4df92-ee848e
const Colors = {
  // primary and secondary
  DarkPurple: "#301934",
  PortlandOrange: "#ff5a36",
  Purpureus: "#9a50a5",
  Salmon: "#ff8a70",
  // grays from darker to lighter
  RichBlack: "#010b13",
  QuickSilver: "#a0a19e",
  Timberwolf: "#d3cec6",
  FloralWhite: "#fffaf0",
  // red and green
  YellowGreenCrayola: "#c4df92",
  LightCoral: "#ee848e",
}

export const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: Colors.DarkPurple,
    },
    secondary: {
      main: Colors.PortlandOrange,
    },

  },
})

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: Colors.Purpureus,
    },
    secondary: {
      main: Colors.Salmon,
    },

  },
})
