import React from 'react'
import { compose, uniq, flatten, map, filter, tap } from 'ramda'
import List, { ListItem } from 'material-ui/List'
import Chip from 'material-ui/Chip'

export const ChipGroup = props => {
  return (
    <div>
      <h2>{props.category}</h2>
      <ListItem>
        {compose(
          map(tag => (
            <Chip
              label={tag}
              id={tag}
              onClick={props.click}
              category={props.category}
              data={props.data}
            />
          )),
          uniq,
          flatten,
          map(tag => tag.chips),
          filter(tag => tag.title === `${props.category}`)
        )(props.data)}
      </ListItem>
    </div>
  )
}

// const stackTags = compose(
//   map(tag => (
//     <ListItem id={tag}>
//       <Chip label={tag} onClick={props.handleClick} />
//     </ListItem>
//   )),
//   uniq,
//   flatten,
//   map(tag => tag.chips),
//   filter(tag => tag.title === 'Stack')
// )(videoTags)
//
//
// const difficultyTags = compose(
//   map(tag => (
//     <ListItem id={tag}>
//       <Chip label={tag} onClick={props.handleClick} />
//     </ListItem>
//   )),
//   uniq,
//   flatten,
//   map(tag => tag.chips),
//   filter(tag => tag.title === 'Difficulty')
// )(videoTags)

// const mapStateToProps = state => {
//   return {
//     videos: state.videos
//   }
// }
