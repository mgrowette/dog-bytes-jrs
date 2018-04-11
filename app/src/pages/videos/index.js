import React from 'react'
import List from 'material-ui/List'
import { Link } from 'react-router-dom'
import MenuAppBar from '../../components/MenuAppBar'
import VideoListItem from '../../components/VideoListItem'
import Button from 'material-ui/Button'
import { map } from 'ramda'
import { connect } from 'react-redux'
import BottomAppBar from '../../components/BottomAppBar'

const Videos = props => {
  const { videos } = props
  return (
    <div>
      <center>
        <MenuAppBar position="fixed" title="Videos" />
      </center>
      <List style={{ paddingTop: '45px' }}>
        {map(video => <VideoListItem video={video} />, videos)}
      </List>
      <Link to="/videos/add">
        <Button>Add Video</Button>
      </Link>
      <BottomAppBar />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    videos: state.videos
  }
}

const connector = connect(mapStateToProps)

export default connector(Videos)
