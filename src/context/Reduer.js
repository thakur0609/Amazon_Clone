export const initialState = {
    basket: [],
}
export const getbasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

function Reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            // 
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
            break;
        case "REMOVE_FROM_BASKET":
            // 
            let newbasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if (index >= 0) {
                newbasket.splice(index, 1);
            }
            else {
                console.warn("Can't remove product id")
            }
            return {
                ...state,
                basket: newbasket,
            }
            break;
        default:
            return state;

    }
}

export default Reducer;