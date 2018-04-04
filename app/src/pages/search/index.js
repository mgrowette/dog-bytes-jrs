import React from 'react'
import { connect } from 'react-redux'
import VideoListItem from '../../components/VideoListItem'
import MenuAppBar from '../../components/MenuAppBar'
import { ChipGroup } from '../../components/ChipGroup'
import List from 'material-ui/List'
import { compose, uniq, flatten, map } from 'ramda'
import TextField from 'material-ui/TextField'
import { CHANGE_SEARCH_TEXT } from '../../constants'
import { not, isNil, isEmpty, filter, contains, toLower } from 'ramda'

const Search = props => {
  const videoTags = compose(uniq, flatten, map(video => video.tags))(
    props.videos
  )

  return (
    <div>
      <MenuAppBar title="Search" showBackArrow={true} />
      <div>
        <TextField
          id="search"
          label="Name, Instructor, or Description"
          margin="normal"
          value={props.searchCriteria}
          onChange={props.onSearchChange}
        />
      </div>
      <List>
        {not(isNil(props.searchCriteria) || isEmpty(props.searchCriteria))
          ? compose(
              map(video => <VideoListItem video={video} key={video.name} />),
              filter(video =>
                contains(
                  toLower(props.searchCriteria),
                  toLower(video.name) +
                    toLower(video.desc) +
                    toLower(video.instructor)
                )
              )
            )(props.videos)
          : null}
      </List>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('STATE.SEARCHCRITERIA', state.searchCriteria)
  return {
    videos: state.videos,
    video: state.video,
    searchCriteria: state.searchCriteria
  }
}

const mapActionsToProps = dispatch => {
  return {
    onSearchChange: e =>
      dispatch({ type: CHANGE_SEARCH_TEXT, payload: e.target.value })
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Search)

// <List>
//   <ChipGroup
//     data={videoTags}
//     click={props.handleClick}
//     category="Difficulty"
//     video={props.video}
//     onDelete={props.handleDelete}
//   />
// </List>
// <List>
//   <ChipGroup
//     data={videoTags}
//     click={props.handleClick}
//     category="Stack"
//     video={props.video}
//     onDelete={props.handleDelete}
//   />
// </List>
// <List>
//   <ChipGroup
//     data={videoTags}
//     click={props.handleClick}
//     category="Content"
//     video={props.video}
//     onDelete={props.handleDelete}
//   />
// </List>
