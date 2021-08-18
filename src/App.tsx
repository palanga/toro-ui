import React from "react"
import { MockedProvider } from "@apollo/react-testing"
import { mock as LandingsByLocationMock } from "./analytics/widgets/LandingsByLocation"
import { CssBaseline, Paper, ThemeProvider, useMediaQuery } from "@material-ui/core"
import RootNavigation from "./navigation/RootNavigation";
import { darkTheme, lightTheme } from "./Colors";

const mocks =
  [
    LandingsByLocationMock,
  ]

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  return (
    <React.Fragment>
      <CssBaseline/>
      <MockedProvider mocks={mocks} addTypename={false}>
        <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
          <Paper elevation={0} style={{height: "3000px"}}>
            <RootNavigation/>
          </Paper>
        </ThemeProvider>
      </MockedProvider>
    </React.Fragment>
  )
}

export default App
