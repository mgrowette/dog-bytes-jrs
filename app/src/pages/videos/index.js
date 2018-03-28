import React from 'react'
import List from 'material-ui/List'
import MenuAppBar from '../../components/MenuAppBar'
import VideoListItem from '../../components/VideoListItem'
import { map } from 'ramda'
import { connect } from 'react-redux'

const Videos = props => {
  const { videos } = props
  return (
    <div>
      <MenuAppBar title="Videos" />
      <List>{map(video => <VideoListItem video={video} />, videos)}</List>
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
