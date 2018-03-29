import {
  SET_VIDEOS,
  GET_VIDEO,
  RESET_ADD_VIDEO_FORM,
  CHANGE_VIDEO_CHARACTER,
  TOGGLE_EXPANDED,
  EDIT_FIELD_FORM,
  TOGGLE_DELETE
} from '../constants'
import { merge, not } from 'ramda'

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

export const addVideo = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_VIDEO_CHARACTER:
      return merge(state, action.payload)
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
