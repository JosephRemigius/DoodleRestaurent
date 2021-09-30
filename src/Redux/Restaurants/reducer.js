import { REMOVE_ITEM_QTY, GET_RESTURANTS_LIST_SUCCESS, UPDATE_ITEM_QTY } from "./action";


const initalState = {
    restaurantList: '',
}

export default (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_RESTURANTS_LIST_SUCCESS:
            return {
                ...state,
                restaurantList: payload
            }
        case UPDATE_ITEM_QTY:
            state.restaurantList.Starters.filter(value =>
                value.Item.id == payload.Item.id ? value.Item.qty < 20 ?
                    value.Item.qty = value.Item.qty + 1 : 0 : value.Item.qty);

            state.restaurantList.totalQty += 1;

            state.restaurantList.Starters.filter(value =>
                value.Item.id == payload.Item.id ?
                    value.Item.totalValue = value.Item.qty * value.Item.price :
                    0)
            state.restaurantList.totalAmount = 0
            state.restaurantList.Starters.map((value) => {
                value.Item.totalValue ?
                    state.restaurantList.totalAmount += value.Item.totalValue : 0
            });
            
            return { ...state };


        case REMOVE_ITEM_QTY:
            state.restaurantList.Starters.filter(value =>
                value.Item.id == payload.Item.id ?
                    value.Item.qty = value.Item.qty - 1 : 0);

            state.restaurantList.totalQty -= 1;

            state.restaurantList.Starters.filter(value =>
                value.Item.id == payload.Item.id ?
                    value.Item.totalValue = value.Item.qty * value.Item.price :
                    0)

            state.restaurantList.totalAmount = 0
            state.restaurantList.Starters.map((value) => {

                value.Item.totalValue ?
                    state.restaurantList.totalAmount += value.Item.totalValue : 0
            });
            return { ...state };
        default:
            return state;
    }
}