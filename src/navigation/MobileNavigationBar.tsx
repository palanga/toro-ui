import React from "react"
import { AppBar, BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import DashboardIcon from '@material-ui/icons/Dashboard'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SearchIcon from '@material-ui/icons/Search'

/**
 * account balance
 * account balance wallet
 * account circle
 * announcement
 * bar chart
 */

type MobileNavigationBarProps = {
  selectedTab: string,
  selectTab: any,
}

function MobileNavigationBar(props: MobileNavigationBarProps) {
  return (
    <React.Fragment>
      <div style={{height: 56}}/>
      <AppBar position="fixed" color="primary" style={{top: "auto", bottom: 0}} component="footer">
        <BottomNavigation value={props.selectedTab} onChange={(_, name) => props.selectTab(name)}>
          <BottomNavigationAction label="Home" value="home" icon={<DashboardIcon/>}/>
          <BottomNavigationAction label="Search" value="search" icon={<SearchIcon/>}/>
          <BottomNavigationAction label="Account" value="account" icon={<AccountCircleIcon/>}/>
        </BottomNavigation>
      </AppBar>
    </React.Fragment>
  )
}

export default MobileNavigationBar
