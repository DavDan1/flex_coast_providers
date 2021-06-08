const rootReducer = (state, action) => {
  switch (action.type) {
    case 'SET_INQUIRIES':
      return {
        ...state,
        inquiries: action.payload,
      }
    case 'SET_ERROR_MESSAGE':
      return {
        ...state,
        error: true,
        open: true,
        message: action.payload,
      }
    default:
      return state
  }
}
export default rootReducer
