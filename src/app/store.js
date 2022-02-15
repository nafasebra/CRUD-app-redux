import { createStore } from 'redux'
// import rootReducer from './../reducers'
import modalReducer from './../reducers/modalReducer'

export const store = createStore(modalReducer);