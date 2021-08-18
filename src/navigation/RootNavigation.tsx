import React, { useState } from "react"
import { AnalyticsHome } from "../analytics/AnalyticsHome"
import { Home } from "../home/Home"
import { Hidden } from "@material-ui/core"
import { ComingSoon } from "../ComingSoon"
import MobileNavigation from "./MobileNavigationBar"
import WebNavigation from "./WebNavigationBar"

/**
 * account balance wallet
 * bar chart
 */
export default function RootNavigation() {
  const [selectedTab, selectTab] = useState<TabName>("home")
  return (
    <React.Fragment>
      <Hidden smDown>
        <WebNavigation selectedTabName={selectedTab} selectTab={selectTab} children={renderTab} />
      </Hidden>
      <Hidden mdUp>
        <MobileNavigation selectedTabName={selectedTab} selectTab={selectTab} children={renderTab} />
      </Hidden>
    </React.Fragment>
  )
}

export type TabName = "home" | "notifications" | "account"

export type NavigationBarProps = {
  selectedTabName: TabName,
  selectTab: (tabName: TabName) => void,
  children: (tabName: TabName) => any,
}

function renderTab(selectedTab: TabName) {
  switch (selectedTab) {
    case "home":
      return <Home/>
    case "notifications":
      return <AnalyticsHome/>
    default:
      return <ComingSoon/>
  }
}
