import React from 'react'
import { connect } from 'react-redux'
import VideoListItem from '../../components/VideoListItem'
import MenuAppBar from '../../components/MenuAppBar'
import { ChipGroup } from '../../components/ChipGroup'
import List from 'material-ui/List'
import { compose, uniq, flatten, map } from 'ramda'
import TextField from 'material-ui/TextField'
import { ADD_SEARCH_CHIP, DELETE_SEARCH_CHIP } from '../../constants'
import {
  not,
  isNil,
  isEmpty,
  filter,
  contains,
  toLower,
  join,
  propOr
} from 'ramda'
import { searchField } from '../../action-creators/videos'

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
          label="Search"
          helperText="Video Name, Instructor, or Description"
          margin="normal"
          value={props.searchCriteria.search}
          onChange={e => props.onSearchChange('search', e.target.value)}
        />
      </div>
      <List>
        <ChipGroup
          data={videoTags}
          click={props.handleClick}
          category="Difficulty"
          video={props.searchCriteria}
          onDelete={props.handleDelete}
        />
      </List>
      <List>
        <ChipGroup
          data={videoTags}
          click={props.handleClick}
          category="Stack"
          video={props.searchCriteria}
          onDelete={props.handleDelete}
        />
      </List>
      <List>
        <ChipGroup
          data={videoTags}
          click={props.handleClick}
          category="Content"
          video={props.searchCriteria}
          onDelete={props.handleDelete}
        />
      </List>
      <List>
        {not(
          isNil(props.searchCriteria.search) ||
            isEmpty(props.searchCriteria.search)
        ) ||
        not(isEmpty(flatten(map(tag => tag.chips)(props.searchCriteria.tags))))
          ? compose(
              map(video => <VideoListItem video={video} key={video.name} />),
              filter(
                video =>
                  contains(
                    toLower(propOr('', ['search'], props.searchCriteria)),
                    toLower(video.name) +
                      toLower(video.desc) +
                      toLower(video.instructor)
                  ) &&
                  contains(
                    compose(join(' '), flatten, map(tag => tag.chips))(
                      props.searchCriteria.tags
                    ),
                    compose(join(' '), flatten, map(tag => tag.chips))(
                      video.tags
                    )
                  )
              )
            )(props.videos)
          : null}
      </List>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('Search State:', state.searchCriteria)
  console.log('Search state tags:', state.searchCriteria.tags)
  return {
    videos: state.videos,
    searchCriteria: state.searchCriteria
  }
}

const mapActionsToProps = dispatch => {
  return {
    onSearchChange: (field, value) => dispatch(searchField(field, value)),

    handleClick: (category, chip) => {
      dispatch({
        type: ADD_SEARCH_CHIP,
        payload: { title: category, chip: chip }
      })
    },
    handleDelete: (category, chip) => {
      dispatch({
        type: DELETE_SEARCH_CHIP,
        payload: { title: category, chip: chip }
      })
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Search)
