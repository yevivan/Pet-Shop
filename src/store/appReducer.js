import { combineReducers } from "redux";
import getcardsReducer from "./Getting cards/GetCardsReducer";
import addToCartreducer from "./Add to cart/AddToCartReducer";
import checkOutfromReducer from "./Check our form/checkOutFormReducer"

const appReducer = combineReducers({
  getCards: getcardsReducer,
  addToCart: addToCartreducer,
  checkOut: checkOutfromReducer,
});

export default appReducer;
