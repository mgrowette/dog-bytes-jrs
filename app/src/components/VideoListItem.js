import React from 'react'
// import Icon from 'material-ui/Icon'
import { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'

const VideoListItem = props => {
  const { name, instructor, _id } = props.video
  return (
    <div>
      <Link
        to={`/videos/${_id}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <ListItem>
          <ListItemText primary={name} secondary={instructor} />
        </ListItem>
      </Link>
      <Divider />
    </div>
  )
}

export default VideoListItem
