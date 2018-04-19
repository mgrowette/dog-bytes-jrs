import { QUOTE, RANDOM_QUOTE } from '../constants'

export const quotes = (state = [], action) => {
  switch (action.type) {
    case QUOTE:
      return action.payload
    default:
      return state
  }
}

export const quote = (state = '', action) => {
  switch (action.type) {
    case RANDOM_QUOTE:
      return action.payload
    default:
      return state
  }
}
