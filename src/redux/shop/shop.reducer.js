import shopData from "../../pages/shop/shop-data";
import {UPDATE_COLLECTIONS} from "./shop.types";

console.log("main shop data",shopData);
const initialState = {
    collections:shopData
};

const shopeReducer = (state=initialState,action)=>{
    switch (action.type) {
        case UPDATE_COLLECTIONS:
            console.log(action.payload,"yahi data haii...");
        return  {
                ...state,
                collections:action.payload
            } 
      default:
           return state;
    }
}

export default shopeReducer;