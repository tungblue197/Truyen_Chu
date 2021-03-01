import { combineReducers } from 'redux';
import ThemeReducer from './themeReducer/themeReducer';
import MenuReducer from './menuReducer';



const uiReducers = {
    theme: ThemeReducer,
    menu: MenuReducer
}

export default combineReducers({
    ...uiReducers,
});