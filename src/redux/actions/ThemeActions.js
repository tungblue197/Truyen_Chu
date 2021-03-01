import THEME from '../constants/ThemeConst';


export const setTheme = (payload) => {
    localStorage.setItem('theme', payload);
    return ({
        type: THEME.SET_THEME,
        payload: payload
    })
}