import {
  CHANGE_SEARCH_TEXT,
  ADD_SEARCH_CHIP,
  DELETE_SEARCH_CHIP
} from '../constants'
import { merge, assoc, map, uniq, concat, reject } from 'ramda'

export const searchCriteria = (
  state = {
    name: '',
    instructor: '',
    tags: [
      { title: 'Difficulty', chips: [] },
      { title: 'Stack', chips: [] },
      { title: 'Content', chips: [] }
    ],
    desc: '',
    youTubeVideoURL: ''
  },
  action
) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return merge(state, action.payload)
    case ADD_SEARCH_CHIP:
      return assoc(
        'tags',
        map(
          t =>
            t.title === action.payload.title
              ? merge(t, {
                  chips: uniq(concat([action.payload.chip], t.chips))
                })
              : t,
          state.tags
        ),
        state
      )
    case DELETE_SEARCH_CHIP:
      return assoc(
        'tags',
        map(
          tag =>
            tag.title === action.payload.title
              ? merge(tag, {
                  chips: reject(chip => chip === action.payload.chip, tag.chips)
                })
              : tag
        )(state.tags),
        state
      )
    default:
      return state
  }
}
