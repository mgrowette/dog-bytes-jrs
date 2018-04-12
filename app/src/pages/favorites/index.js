import React from 'react'
import { connect } from 'react-redux'
import VideoListItem from '../../components/VideoListItem'
import List from 'material-ui/List'
import { map, not, isEmpty, contains } from 'ramda'
import BottomAppBar from '../../components/BottomAppBar'
import MenuAppBar from '../../components/MenuAppBar'

const Favorites = props => {
  return (
    <div>
      <center>
        <MenuAppBar title="Favorite Videos" />
      </center>
      <List style={{ paddingTop: '45px', paddingBottom: '45px' }}>
        {not(isEmpty(props.favorites)) ? (
          map(
            video =>
              contains(
                video._id,
                JSON.parse(window.localStorage.getItem('favorites'))
              ) ? (
                <VideoListItem video={video} />
              ) : null
          )(props.videos)
        ) : (
          <h1>Sorry, no favorites found</h1>
        )}
      </List>
      <BottomAppBar />
    </div>
  )
}

const mapStateToProps = state => {
  console.log('not(isEmpty(props.favorites))', not(isEmpty(state.favorites)))
  return {
    favorites: state.favorites,
    videos: state.videos
  }
}

const connector = connect(mapStateToProps)

export default connector(Favorites)
