import React from 'react'
import BottomNavigation, {
  BottomNavigationAction
} from 'material-ui/BottomNavigation'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'
import HomeIcon from 'material-ui-icons/Home'
import SearchIcon from 'material-ui-icons/Search'
import AddBox from 'material-ui-icons/AddBox'
import FavoriteBorder from 'material-ui-icons/FavoriteBorder'
import ViewList from 'material-ui-icons/ViewList'

const styles = theme => ({
  icon: {
    color: 'black'
  },
  bottomBar: {
    position: 'fixed',
    left: '0px',
    bottom: '0px',
    width: '100%'
  }
})

const BottomAppBar = props => {
  const { classes } = props
  return (
    <BottomNavigation position="fixed" className={classes.bottomBar}>
      <Link to="/">
        <BottomNavigationAction icon={<HomeIcon />} className={classes.icon} />
      </Link>
      <Link to="/videos">
        <BottomNavigationAction icon={<ViewList />} className={classes.icon} />
      </Link>
      <Link to="/videos/search">
        <BottomNavigationAction
          icon={<SearchIcon />}
          className={classes.icon}
        />
      </Link>
      <Link to="/videos/add">
        <BottomNavigationAction icon={<AddBox />} className={classes.icon} />
      </Link>
      <Link to="/videos/favorites">
        <BottomNavigationAction
          icon={<FavoriteBorder />}
          className={classes.icon}
        />
      </Link>
    </BottomNavigation>
  )
}

export default withStyles(styles)(BottomAppBar)
