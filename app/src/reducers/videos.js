import {
  SET_VIDEOS,
  GET_VIDEO,
  RESET_ADD_VIDEO_FORM,
  CHANGE_VIDEO_CHARACTER,
  TOGGLE_EXPANDED,
  EDIT_FIELD_FORM,
  TOGGLE_DELETE,
  SET_PHOTO,
  ADD_CHIP
} from '../constants'
import { merge, not, map, uniq, concat, assoc, isEmpty } from 'ramda'

export const videos = (state = [], action) => {
  switch (action.type) {
    case SET_VIDEOS:
      return action.payload
    default:
      return state
  }
}

export const video = (state = {}, action) => {
  switch (action.type) {
    case GET_VIDEO:
      return action.payload
    case EDIT_FIELD_FORM:
      return merge(state, action.payload)
    case TOGGLE_DELETE:
      return merge(state, { toggleDelete: not(state.toggleDelete) })
    default:
      return state
  }
}

export const addVideo = (
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
    case CHANGE_VIDEO_CHARACTER:
      return merge(state, action.payload)
    case SET_PHOTO:
      return merge(state, { photo: action.payload })
    case ADD_CHIP:
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
    case RESET_ADD_VIDEO_FORM:
      return {}
    default:
      return state
  }
}

export const toggleExpanded = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_EXPANDED:
      return merge(state, { toggleExpanded: not(state.toggleExpanded) })
    default:
      return state
  }
}
