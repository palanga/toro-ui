import React from "react"
import { AppBar, BottomNavigation, BottomNavigationAction, Toolbar } from "@material-ui/core"
import DashboardIcon from '@material-ui/icons/Dashboard'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SearchBar from "./SearchBar";
import AppIcon from "@material-ui/icons/AccountBalance";
import AnnouncementIcon from "@material-ui/icons/Announcement";

type MobileNavigationBarProps = {
  selectedTab: string,
  selectTab: any,
  children: any,
}

function MobileNavigationBar(props: MobileNavigationBarProps) {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <AppIcon style={{marginInlineEnd: 12}}/>
          <SearchBar/>
        </Toolbar>
      </AppBar>
      <div style={{height: 48}}/>
      {props.children(props.selectedTab)}
      <div style={{height: 56}}/>
      <AppBar position="fixed" color="primary" style={{top: "auto", bottom: 0}} component="footer">
        <BottomNavigation value={props.selectedTab} onChange={(_, name) => props.selectTab(name)}>
          <BottomNavigationAction value="home" icon={<DashboardIcon/>}/>
          <BottomNavigationAction value="notifications" icon={<AnnouncementIcon/>}/>
          <BottomNavigationAction value="account" icon={<AccountCircleIcon/>}/>
        </BottomNavigation>
      </AppBar>
    </React.Fragment>
  )
}

export default MobileNavigationBar
