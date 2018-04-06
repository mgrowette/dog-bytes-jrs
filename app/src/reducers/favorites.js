import { SET_FAVORITES } from '../constants'

// import { append, reject, equals, contains } from 'ramda'

export const favorites = (
  state = window.localStorage.getItem('favorites')
    ? window.localStorage.getItem('favorites')
    : [],
  action
) => {
  console.log('FAVORITES STATE', state)
  switch (action.type) {
    case SET_FAVORITES:
      return action.payload
    // case ADD_FAVORITE:
    //   if (contains(action.payload, state)) {
    //     return reject(equals(action.payload), state)
    //   } else {
    //     return append(action.payload, state)
    //   }
    default:
      return state
  }
}

//  window.localStorage.getItem('favorites')
