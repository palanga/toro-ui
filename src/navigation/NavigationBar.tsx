import React, { useState } from "react"
import { AnalyticsHome } from "../analytics/AnalyticsHome"
import { Home } from "../home/Home"
import { Hidden } from "@material-ui/core"
import { ComingSoon } from "../ComingSoon"
import MobileNavigationBar from "./MobileNavigationBar";
import WebNavigationBar from "./WebNavigationBar";

/**
 * account balance
 * account circle
 * announcement
 * bar chart
 */


function NavigationBar() {

  const [selectedTab, selectTab] = useState<string>("home")

  function renderTab() {
    switch (selectedTab) {
      case "home":
        return <Home/>
      case "search":
        return <AnalyticsHome/>
      default:
        return <ComingSoon/>
    }
  }

  return (
    <React.Fragment>
      <Hidden smDown>
        <WebNavigationBar selectTab={selectTab}/>
      </Hidden>
      <div style={{height: 3000}}>
        {renderTab()}
      </div>
      <Hidden mdUp>
        <MobileNavigationBar selectedTab={selectedTab} selectTab={selectTab}/>
      </Hidden>
    </React.Fragment>
  )
}

export default NavigationBar
