import { combineReducers } from "redux";

import modalReducer from './modalReducer'
import postReducer from './postReducer'
import themeReducer from './themeReducer'

export default combineReducers({
    modal: modalReducer,
    post: postReducer,
    theme: themeReducer
})