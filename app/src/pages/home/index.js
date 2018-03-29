import React from 'react'
import MenuAppBar from '../../components/MenuAppBar'
import { withStyles } from 'material-ui/styles'

const url = 'http://localhost:3000'
const imgUrl = '/jrs-coding-logo.jpg'

const styles = theme => ({
  background: {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundSize: 'cover',
    paddingTop: '200px'
  }
})

const Home = props => {
  const { classes } = props
  return (
    <div>
      <center>
        <MenuAppBar title="Home Page" />
        <div className={classes.background} />
      </center>
    </div>
  )
}

export default withStyles(styles)(Home)
