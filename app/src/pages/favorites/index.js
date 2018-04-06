import React from 'react'
import { connect } from 'react-redux'
import VideoListItem from '../../components/VideoListItem'
import List from 'material-ui/List'
import { map, not, isEmpty, contains } from 'ramda'

const Favorites = props => {
  console.log('PROPS.FAVORITES', props.favorites)
  console.log(
    `JSON.parse(window.localStorage.getItem('favorites')`,
    JSON.parse(window.localStorage.getItem('favorites'))
  )
  return (
    <div>
      <List>
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
