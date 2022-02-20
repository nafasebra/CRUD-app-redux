import * as type from '../constants/constants';

export function setDarkTheme () {
    return{
        type: type.SET_DARK_THEME
    }
}

export function setLightTheme () {
    return{
        type: type.SET_LIGHT_THEME
    }
}