import React from "react"
import { AppBar, Button, Toolbar } from "@material-ui/core"
import DashboardIcon from "@material-ui/icons/Dashboard"
import AccountBalanceIcon from "@material-ui/icons/AccountBalance"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import AnnouncementIcon from "@material-ui/icons/Announcement"
import SearchBar from "./SearchBar"
import { NavigationBarProps } from "./RootNavigation";

export default function WebNavigationBar(props: NavigationBarProps) {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <AccountBalanceIcon style={{marginInlineEnd: 12}}/>
          <Button color="inherit" onClick={() => props.selectTab("home")}><DashboardIcon/></Button>
          <SearchBar/>
          <Button color="inherit" onClick={() => props.selectTab("notifications")}><AnnouncementIcon/></Button>
          <Button color="inherit" onClick={() => props.selectTab("account")}><AccountCircleIcon/></Button>
        </Toolbar>
      </AppBar>
      <div style={{height: 64}}/>
      {props.children(props.selectedTabName)}
    </React.Fragment>
  )
}
