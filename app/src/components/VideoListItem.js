import React from 'react'
// import Icon from 'material-ui/Icon'
import { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'

const VideoListItem = props => {
  const { name, instructor, _id, imgPath } = props.video

  return (
    <div style={{ backgroundColor: '#D6EAF8' }}>
      <Link
        to={`/videos/${_id}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <ListItem>
          <img src={imgPath} alt="video content" style={{ maxWidth: '60px' }} />
          <ListItemText primary={name} secondary={instructor} />
        </ListItem>
      </Link>
      <Divider />
    </div>
  )
}

export default VideoListItem
