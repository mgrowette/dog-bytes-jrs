import React from 'react'
import Icon from 'material-ui/Icon'
import { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'

const VideoListItem = props => {
  const { name, instructor } = props.video
  return (
    <div>
      <ListItem>
        <ListItemText primary={name} secondary={instructor} />
      </ListItem>
      <Divider />
    </div>
  )
}

export default VideoListItem
