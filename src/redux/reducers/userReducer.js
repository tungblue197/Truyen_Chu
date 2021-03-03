const initialState = {
    modelOpen: false,
    data: [],
    loading: false,
    editing: false,
    adding: false,
    error: false,
    errorMessage:'',
    success: false,
    successMessage: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case typeName:
        return { ...state, ...payload }

    default:
        return state
    }
}
