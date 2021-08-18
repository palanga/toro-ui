import React, { useState } from "react"
import { AnalyticsHome } from "../analytics/AnalyticsHome"
import { Home } from "../home/Home"
import { Hidden } from "@material-ui/core"
import { ComingSoon } from "../ComingSoon"
import MobileNavigation from "./MobileNavigationBar";
import WebNavigation from "./WebNavigationBar";

/**
 * account balance wallet
 * bar chart
 */
export default function RootNavigation() {
  const [selectedTab, selectTab] = useState<string>("home")
  return (
    <React.Fragment>
      <Hidden smDown>
        <WebNavigation selectedTab={selectedTab} selectTab={selectTab} children={renderTab} />
      </Hidden>
      <Hidden mdUp>
        <MobileNavigation selectedTab={selectedTab} selectTab={selectTab} children={renderTab} />
      </Hidden>
    </React.Fragment>
  )
}

function renderTab(selectedTab: string) {
  switch (selectedTab) {
    case "home":
      return <Home/>
    case "notifications":
      return <AnalyticsHome/>
    default:
      return <ComingSoon/>
  }
}
