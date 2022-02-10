const SET_DARK_THEME = "SET_DARK_THEME";
const SET_LIGHT_THEME = "SET_LIGHT_THEME";

export function setDarkTheme () {
    return{
        type: SET_DARK_THEME,
        info: 'togglethemedark'
    }
}

export function setLightTheme () {
    return{
        type: SET_LIGHT_THEME,
        info: 'togglethemelight'
    }
}