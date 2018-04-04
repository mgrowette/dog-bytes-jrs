import React from 'react'
// import { connect } from 'react-redux'
// import VideoListItem from '../../components/VideoListItem'
import MenuAppBar from '../../components/MenuAppBar'
import { ChipGroup } from '../../components/ChipGroup'
import List from 'material-ui/List'
import { compose, uniq, flatten, map } from 'ramda'
import TextField from 'material-ui/TextField'

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
          label="Search by Video Name or Description"
          margin="normal"
          value={props.searchCriteria}
          onChange={props.onSearchChange}
        />
        <List>
          <ChipGroup
            data={videoTags}
            click={props.handleClick}
            category="Difficulty"
            video={props.video}
            onDelete={props.handleDelete}
          />
        </List>
        <List>
          <ChipGroup
            data={videoTags}
            click={props.handleClick}
            category="Stack"
            video={props.video}
            onDelete={props.handleDelete}
          />
        </List>
        <List>
          <ChipGroup
            data={videoTags}
            click={props.handleClick}
            category="Content"
            video={props.video}
            onDelete={props.handleDelete}
          />
        </List>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

export default Search
