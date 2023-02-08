// Action Creators
// TODO: Create action creators as defined in tests

export function addQuote(quote) {
  console.log(quote)
  return { type: "quotes/add", payload: quote }
}

export function removeQuote(quoteID) {
  return { type: "quotes/remove", payload: quoteID }
}

export function upvoteQuote(quoteId) {
  return { type: "quotes/upvote", payload: quoteId }
}

export function downvoteQuote(quoteId) {
  return { type: "quotes/downvote", payload: quoteId }
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload]
    case "quotes/remove":
      return state.filter((quote) => quote.id !== action.payload)
    case "quotes/upvote":
      const posVote = state.find((quote) => quote.id === action.payload)
      posVote.votes += 1
      return state
    case "quotes/downvote":
      const negVote = state.find((quote) => quote.id === action.payload)
        if (negVote.votes > 0) {
          negVote.votes -= 1
        }
        return state
    default:
      return state
  }
}