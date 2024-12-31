import userReducer from "./userRedux";
import alertReducer from "./alertReducer";
import productReducer from "./productReducer";
import allUserReducer from "./allUserReducer";
// import cartItems from "./cartItemsReducer";
import cartReducer from "./cartItemsReducer";
import displayCartReducer from "./displayCartReducer";
import orderReducer from "./orderReducer";
import { combineReducers } from "redux";

const myReducers = combineReducers({
  user: userReducer,
  alert: alertReducer,
  products: productReducer,
  allUsers: allUserReducer,
  cart: cartReducer,
  isCart: displayCartReducer,
  orders: orderReducer,
});
export default myReducers;
