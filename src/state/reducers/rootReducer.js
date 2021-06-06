import initialState from '../store/initialState'
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INQUIRIES':
      return {
        ...state,
        inquiries: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
