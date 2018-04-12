import React from 'react'
import { compose, uniq, flatten, map, filter, contains, propOr } from 'ramda'
import Chip from 'material-ui/Chip'

export const ChipGroup = props => {
  const tags = compose(
    uniq,
    flatten,
    map(tag => tag.chips),
    filter(tag => tag.title === `${props.category}`)
  )(props.data)
  const sortedTags = tags.sort()
  return (
    <div>
      <h2>{props.category}</h2>
      {compose(
        map(chip => (
          <Chip
            key={chip}
            label={chip}
            onClick={e => props.click(props.category, chip)}
            category={props.category}
            data={props.data}
            style={{
              margin: '5px',
              background: contains(
                chip,
                flatten(
                  map(
                    category => category.chips,
                    propOr([], ['tags'], props.video)
                  )
                )
              )
                ? 'white'
                : null
            }}
            onDelete={
              contains(
                chip,
                flatten(
                  map(
                    category => category.chips,
                    propOr([], ['tags'], props.video)
                  )
                )
              )
                ? e => props.onDelete(props.category, chip)
                : null
            }
          />
        ))
      )(sortedTags)}
    </div>
  )
}
