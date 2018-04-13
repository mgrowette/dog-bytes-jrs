import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import GoBackIcon from 'material-ui-icons/KeyboardArrowLeft'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  flex: {
    flex: 1
  },
  firstButton: {
    marginLeft: -12,
    marginRight: 12
  }
})

const MenuAppBar = props => {
  const { classes } = props

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          {props.showBackArrow ? (
            <IconButton
              className={classes.firstButton}
              color="secondary"
              aria-label="Menu"
              onClick={props.navigateBack}
            >
              <GoBackIcon />
            </IconButton>
          ) : null}
          <Typography
            className={classes.flex}
            variant="title"
            color="secondary"
          >
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(MenuAppBar)
