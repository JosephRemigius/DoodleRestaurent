export const GET_RESTURANTS_LIST_SUCCESS = "GET_RESTURANTS_LIST_SUCCESS";
export const UPDATE_ITEM_QTY = "UPDATE_ITEM_QTY";
export const REMOVE_ITEM_QTY = "REMOVE_ITEM_QTY";

export const resturant_list = (data) => (dispatch) => {
    return dispatch({
        type: GET_RESTURANTS_LIST_SUCCESS,
        payload: data
    })
}

export const addMenuItems = (data) => (dispatch) => {
    return dispatch({
        type: UPDATE_ITEM_QTY,
        payload: data
    })
}

export const removeMenuItems = (data) => (dispatch) => {
    return dispatch({
        type: REMOVE_ITEM_QTY,
        payload: data
    })
}