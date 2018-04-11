import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import BottomNavigation, {
  BottomNavigationAction
} from 'material-ui/BottomNavigation'
// import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
// import GoBackIcon from 'material-ui-icons/KeyboardArrowLeft'
import { withStyles } from 'material-ui/styles'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import HomeIcon from 'material-ui-icons/Home'
import SearchIcon from 'material-ui-icons/Search'
import AddBox from 'material-ui-icons/AddBox'
import FavoriteBorder from 'material-ui-icons/FavoriteBorder'

const styles = theme => ({
  icon: {
    paddingLeft: '100px',
    paddingRight: '100px'
  },
  bottomBar: {
    color: 'black'
  }
})

const BottomAppBar = props => {
  const { classes } = props
  return (
    <BottomNavigation position="fixed" className="bottomBar">
      <Link to="/">
        <BottomNavigationAction icon={<HomeIcon />} />
      </Link>
      <Link to="/videos/search">
        <BottomNavigationAction icon={<SearchIcon />} />
      </Link>
      <Link to="/videos/add">
        <BottomNavigationAction icon={<AddBox />} />
      </Link>
      <Link to="/videos/favorites">
        <BottomNavigationAction icon={<FavoriteBorder />} />
      </Link>
    </BottomNavigation>
  )
}

export default withStyles(styles)(BottomAppBar)
