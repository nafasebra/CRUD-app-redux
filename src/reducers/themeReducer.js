import * as type from '../constants/constants'

function themeReducer(state = 'dark', action) {
    switch(action.type) {
        case type.SET_DARK_THEME:
            return 'dark'
        case type.SET_LIGHT_THEME:
            return 'light'
        default: return state;
    }
}

export default themeReducer;