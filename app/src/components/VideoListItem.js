import React from 'react'
// import Icon from 'material-ui/Icon'
import { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'
import { join, filter, split, pathOr, sort } from 'ramda'

const VideoListItem = props => {
  const { name, instructor, _id, date } = props.video
  const videoDate = join(
    '',
    filter(x => x !== '/', split('', pathOr('', ['video', 'date'], props)))
  )

  return (
    <div style={{ backgroundColor: '#D6EAF8' }}>
      <Link
        to={`/videos/${_id}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <ListItem>
          <img src="/jrs-dog-logo.jpg" style={{ maxWidth: '60px' }} />
          <ListItemText key={_id} primary={name} secondary={instructor} />
        </ListItem>
      </Link>
      <Divider />
    </div>
  )
}

export default VideoListItem
