import { QUOTE } from '../constants'

export const quotes = (state = '', action) => {
  switch (action.type) {
    case QUOTE:
      return action.payload
    default:
      return state
  }
}
