import { SET_FAVORITES } from '../constants'
import { append, contains, reject, equals } from 'ramda'

export function toggleFavorite(dispatch, getState) {
  const { video } = getState()
  if (window.localStorage.getItem('favorites')) {
    const favorites = JSON.parse(window.localStorage.getItem('favorites'))
    const newFavorites = contains(video._id, favorites)
      ? reject(equals(video._id), favorites)
      : append(video._id, favorites)

    window.localStorage.setItem('favorites', JSON.stringify(newFavorites))
    dispatch({
      type: SET_FAVORITES,
      payload: newFavorites
    })
  } else {
    window.localStorage.setItem('favorites', JSON.stringify([video._id]))
    dispatch({ type: SET_FAVORITES, payload: [video._id] })
  }
}
