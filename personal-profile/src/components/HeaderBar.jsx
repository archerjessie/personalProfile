import React from 'react'
import {
  Tabs,
  Tab,
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Hidden,
} from '@material-ui/core'
import MultiMenuList from './MultiMenuList'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    whiteSpace: 'nowrap',
  },
}))

const HeaderBar = (props) => {
  const classes = useStyles()
  const [selectedTab, setSelectedTab] = React.useState(0)

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
    props.handleChange(newValue)
  }

  return (
    <header>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Jessie Liu
            </Typography>
            <Hidden xsDown>
              <Tabs
                indicatorColor="primary"
                value={selectedTab}
                onChange={handleChange}
                variant="scrollable"
              >
                <Tab label="Home" />
                <Tab label="Skills" />
                <Tab label="Experience" />
                <Tab label="Education" />
                <Tab label="Contact" />
              </Tabs>
            </Hidden>
            <Hidden smUp>
              <MultiMenuList onChange={handleChange} />
            </Hidden>
          </Toolbar>
        </AppBar>
      </div>
    </header>
  )
}

export default HeaderBar
