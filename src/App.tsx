import React from "react"
import { MockedProvider } from "@apollo/react-testing"
import { mock as LandingsByLocationMock } from "./analytics/widgets/LandingsByLocation"
import {
  CssBaseline,
} from "@material-ui/core"
import NavigationBar from "./navigation/NavigationBar";

const mocks =
  [
    LandingsByLocationMock,
  ]

function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <MockedProvider mocks={mocks} addTypename={false}>
        <NavigationBar/>
      </MockedProvider>
    </React.Fragment>
  )
}

export default App
