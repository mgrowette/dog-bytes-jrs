import { CHANGE_SEARCH_TEXT } from '../constants'

export const searchCriteria = (state = '', action) => {
  console.log('searchCriteria reducer called')
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return action.payload
    default:
      return state
  }
}
