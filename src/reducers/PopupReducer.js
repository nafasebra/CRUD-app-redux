import * as type from '../constants/constants'

const initialState = {
    show: false,
    title: ''
}

function popupReducer(state = initialState, action) {
    switch(action.type) {
        case type.SET_SHOW_POPUP:
            return {
                show: true,
                title: action.title
            }
        case type.SET_HIDE_POPUP:
            return {
                ...state,
                show: false
            }
        default: return state;
    }
}

export default popupReducer;