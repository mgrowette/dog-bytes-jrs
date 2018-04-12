import React from 'react'
import { connect } from 'react-redux'
import VideoListItem from '../../components/VideoListItem'
import List from 'material-ui/List'
import { map, not, isEmpty, contains } from 'ramda'
import BottomAppBar from '../../components/BottomAppBar'
import MenuAppBar from '../../components/MenuAppBar'
import { Link } from 'react-router-dom'

const Favorites = props => {
  return (
    <div>
      <center>
        <MenuAppBar title="Favorite Videos" />
      </center>
      <List style={{ paddingTop: '55px', paddingBottom: '45px' }}>
        {not(isEmpty(props.favorites)) ? (
          map(
            video =>
              contains(
                video._id,
                JSON.parse(window.localStorage.getItem('favorites'))
              ) ? (
                <Link
                  to={`/videos/${video._id}/favorite`}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <VideoListItem video={video} />
                </Link>
              ) : null
          )(props.videos)
        ) : (
          <center>
            <h1>Sorry, no favorites found</h1>
            <h2 style={{ paddingRight: '15px', paddingLeft: '15px' }}>
              To add to your favorites, browse select the heart icon when
              viewing a video.
            </h2>
          </center>
        )}
      </List>
      <BottomAppBar />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites,
    videos: state.videos
  }
}

const connector = connect(mapStateToProps)

export default connector(Favorites)
