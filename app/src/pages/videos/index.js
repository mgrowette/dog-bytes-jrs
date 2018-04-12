import React from 'react'
import List from 'material-ui/List'
import MenuAppBar from '../../components/MenuAppBar'
import VideoListItem from '../../components/VideoListItem'
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
      <List style={{ paddingTop: '55px', paddingBottom: '45px' }}>
        {map(video => <VideoListItem key={video._id} video={video} />)(videos)}
      </List>
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
