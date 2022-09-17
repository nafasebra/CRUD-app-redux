import { combineReducers } from "redux";

import modalReducer from './modalReducer'
import postReducer from './postReducer'
import themeReducer from './themeReducer'
import popupReducer from "./PopupReducer"

export default combineReducers({
    modalReducer,
    postReducer,
    themeReducer,
    popupReducer
})