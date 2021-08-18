import React from "react"
import { MockedProvider } from "@apollo/react-testing"
import { mock as LandingsByLocationMock } from "./analytics/widgets/LandingsByLocation"
import {
  CssBaseline,
} from "@material-ui/core"
import RootNavigation from "./navigation/RootNavigation";

const mocks =
  [
    LandingsByLocationMock,
  ]

function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <MockedProvider mocks={mocks} addTypename={false}>
        <RootNavigation/>
      </MockedProvider>
    </React.Fragment>
  )
}

export default App
