function themeReducer(state = 'dark', action) {
    switch(action.type) {
        case "SET_DARK_THEME":
            return 'dark'
        case "SET_LIGHT_THEME":
            return 'light'
        default: return state;
    }
}

export default themeReducer;