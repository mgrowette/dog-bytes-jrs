import React from 'react'
import List from 'material-ui/List'
import MenuAppBar from '../../components/MenuAppBar'
import VideoListItem from '../../components/VideoListItem'
import { map } from 'ramda'
import { connect } from 'react-redux'
import BottomAppBar from '../../components/BottomAppBar'
import { Link } from 'react-router-dom'

const Videos = props => {
  const { videos } = props
  return (
    <div>
      <center>
        <MenuAppBar position="fixed" title="Videos" />
      </center>
      <List style={{ paddingTop: '55px', paddingBottom: '45px' }}>
        {map(
          video =>
            video._id ? (
              <Link
                to={`/videos/${video._id}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <VideoListItem key={video._id} video={video} />
              </Link>
            ) : null
        )(videos)}
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
