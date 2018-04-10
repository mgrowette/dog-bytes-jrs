import { SET_FAVORITES } from '../constants'

export const favorites = (
  state = window.localStorage.getItem('favorites')
    ? window.localStorage.getItem('favorites')
    : [],
  action
) => {
  switch (action.type) {
    case SET_FAVORITES:
      return action.payload
    default:
      return state
  }
}
