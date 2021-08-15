import React, { useState } from "react"
import { AnalyticsHome } from "./analytics/AnalyticsHome"
import { Home } from "./home/Home"
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Hidden,
  Toolbar,
} from "@material-ui/core"
import DashboardIcon from '@material-ui/icons/Dashboard'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import SearchIcon from '@material-ui/icons/Search'
import { ComingSoon } from "./ComingSoon"

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
        <AppBar position="fixed">
          <Toolbar>
            <DashboardIcon style={{marginInlineEnd: 12}}/>
            <Button color="inherit" onClick={() => selectTab("home")}>Home</Button>
            <Button color="inherit" onClick={() => selectTab("search")}>Search</Button>
            <Button color="inherit" onClick={() => selectTab("account")}>Account</Button>
          </Toolbar>
        </AppBar>
        <div style={{height: 64}}/>
      </Hidden>
      <div style={{height: 3000}}>
        {renderTab()}
      </div>
      <Hidden mdUp>
        <div style={{height: 56}}/>
        <AppBar position="fixed" color="primary" style={{top: "auto", bottom: 0}} component="footer">
          <BottomNavigation value={selectedTab} onChange={(_, name) => selectTab(name)}>
            <BottomNavigationAction label="Home" value="home" icon={<DashboardIcon/>}/>
            <BottomNavigationAction label="Search" value="search" icon={<SearchIcon/>}/>
            <BottomNavigationAction label="Account" value="account" icon={<AccountBalanceWalletIcon/>}/>
          </BottomNavigation>
        </AppBar>
      </Hidden>
    </React.Fragment>
  )
}

export default NavigationBar
