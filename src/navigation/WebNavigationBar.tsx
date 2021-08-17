import React from "react"
import { alpha, AppBar, Button, createStyles, InputBase, makeStyles, Theme, Toolbar } from "@material-ui/core"
import DashboardIcon from '@material-ui/icons/Dashboard'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SearchIcon from '@material-ui/icons/Search'

/**
 * account balance
 * account circle
 * announcement
 * bar chart
 */



export type NavigationBarProps = {
  selectedTab: string,
  selectTab: any,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
)

type WebNavigationBarProps = {
  selectTab: any
}

function WebNavigationBar(props: WebNavigationBarProps) {

  const classes = useStyles()

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <AccountBalanceIcon style={{marginInlineEnd: 12}}/>
          <Button color="inherit" onClick={() => props.selectTab("home")}><DashboardIcon/></Button>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{'aria-label': 'search'}}
            />
          </div>
          <Button color="inherit" onClick={() => props.selectTab("account")}><AccountCircleIcon/></Button>
        </Toolbar>
      </AppBar>
      <div style={{height: 64}}/>
    </React.Fragment>
  )
}

export default WebNavigationBar
