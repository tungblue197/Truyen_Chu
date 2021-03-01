import types  from '../constants/MenuConst';
const initialState = {
    data: [],
    total: 0,
    loading: false,
    loaded: false,
    error: false,
    errorMessage: '',
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case types.GET_ALL_MENU_REQUEST:
        return { ...state, loading: true, loaded: false, error : false }
    case types.GET_ALL_MENU_SUCCESS:
        return { ...state, loading: false , loaded: true , error: false, data: payload.data, total: payload.total}
    case types.GET_ALL_MENU_FAILURE:
        return {...state, loading: false, loaded: false, error: true, errorMessage: payload?.message }
    default:
        return state
    }
}
