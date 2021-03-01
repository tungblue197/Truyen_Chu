import THEME from '../../constants/ThemeConst';
console.log(THEME);
const initialState = !localStorage.getItem('theme') ? THEME.TYPES.DEFAULT : localStorage.getItem('theme');

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case THEME.SET_THEME:
        return payload;
    default:
        return state
    }
}
