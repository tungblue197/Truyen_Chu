import types from "../constants/MenuConst";
import MenuService from "../../service/menuService";
const getMenu = async (disaptch) => {
  try {
    disaptch(getMenuRequest());
    let result = await MenuService.getAll();
    disaptch(getMenuSuccess(result));
  } catch (error) {
    disaptch(getMenuFailure(error));
  }
};
const getMenuRequest = () => {
  return {
    type: types.GET_ALL_MENU_REQUEST,
  };
};

const getMenuSuccess = (payload) => {
    return {
        type: types.GET_ALL_MENU_SUCCESS,
        payload: payload.data
    }
}

const getMenuFailure = (payload) => {
    return {
        type: types.GET_ALL_MENU_FAILURE,
        payload: payload
    }
}


export default { getMenu }