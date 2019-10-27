import shopData from "../../pages/shop/shop-data";
const initialState = {
    collections:shopData
};

const shopeReducer = (state=initialState,action)=>{
    switch (action.type) {
      default:
           return state;
    }
}

export default shopeReducer;