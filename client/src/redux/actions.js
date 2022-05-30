import { ADD_ITEM, REMOVE_ITEM } from "./constants";

export const addItem = (item) => {
    console.log("add", item);
    return{
        type: ADD_ITEM,
        payload: item
    }
}

export const removeItem = (item) => {
    return {
        type: REMOVE_ITEM,
        payload: item
    }
}