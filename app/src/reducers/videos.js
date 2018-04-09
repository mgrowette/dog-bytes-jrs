import {
  SET_VIDEOS,
  GET_VIDEO,
  RESET_ADD_VIDEO_FORM,
  CHANGE_VIDEO_CHARACTER,
  TOGGLE_EXPANDED,
  EDIT_FIELD_FORM,
  TOGGLE_DELETE,
  SET_PHOTO,
  ADD_CHIP,
  DELETE_CHIP,
  EDIT_FORM_DELETE_CHIP,
  EDIT_FORM_ADD_CHIP,
  TOGGLE_ADD_CHIP,
  NEW_TAG_TEXT,
  CREATE_TAG,
  CLEAR_NEW_TAG
} from '../constants'
import {
  merge,
  not,
  map,
  uniq,
  concat,
  assoc,
  reject,
  append,
  flatten
} from 'ramda'

export const videos = (state = [], action) => {
  switch (action.type) {
    case SET_VIDEOS:
      return action.payload
    case CREATE_TAG:
      const newState = flatten(append(state, [action.payload]))
      return newState
    default:
      return state
  }
}

export const video = (state = {}, action) => {
  switch (action.type) {
    case GET_VIDEO:
      return merge(state, action.payload)
    case EDIT_FIELD_FORM:
      return merge(state, action.payload)
    case TOGGLE_DELETE:
      return merge(state, { toggleDelete: not(state.toggleDelete) })
    case EDIT_FORM_DELETE_CHIP:
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
    case EDIT_FORM_ADD_CHIP:
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
    case DELETE_CHIP:
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

export const toggleAddChip = (state = { toggleAddChip: false }, action) => {
  switch (action.type) {
    case TOGGLE_ADD_CHIP:
      return merge(state, { toggleAddChip: not(state.toggleAddChip) })
    default:
      return state
  }
}

export const newTag = (state = {}, action) => {
  switch (action.type) {
    case NEW_TAG_TEXT:
      return merge(state, action.payload)
    case CLEAR_NEW_TAG:
      return {}
    default:
      return state
  }
}
