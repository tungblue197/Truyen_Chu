

import types from '../constants/UserConst';
import UserService from '../../service/userService';
export default {
    toggleModel: (open) => {
        
    },
    //add user
    addUserRequest: () => {
        return ({
            type: types.ADD_USER_REQUEST
        })
    },
    addUserSuccess: (payload) => {
        return ({
            type: types.ADD_USER_SUCCESS,
            payload
        })
    },
    addUserFailure: (payload) => {
        return ({
            type: types.ADD_USER_FAIL,
            payload
        })
    },
    addUser : () => async dispatch => {
        try{
            dispatch(addUserRequest());
            let result = await UserService.addUser(user);
            dispatch(addUserSuccess(result));
        }catch(e){
            dispatch(addUserFailure(e));
        }
    }
    //edit user

}