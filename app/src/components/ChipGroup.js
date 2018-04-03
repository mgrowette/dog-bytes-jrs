import React from 'react'
import { compose, uniq, flatten, map, filter, contains, propOr } from 'ramda'
import { ListItem } from 'material-ui/List'
import Chip from 'material-ui/Chip'

export const ChipGroup = props => {
  return (
    <div>
      <h2>{props.category}</h2>
      <ListItem>
        {compose(
          map(chip => (
            <Chip
              label={chip}
              id={chip}
              onClick={e => props.click(props.category, chip)}
              category={props.category}
              data={props.data}
              style={{
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
