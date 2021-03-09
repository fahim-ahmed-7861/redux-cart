import { combineReducers, createStore } from "redux";
import StateCounter from "../../components/StateCounter/StateCounter";
import cartReducers from "../reducers/cartReducers";
import stateReducers from "../reducers/StateCounterReducers";

 
const rootReducers=combineReducers({
    
    cart:cartReducers,

    StateCounter:stateReducers
  });

 // console.log(combineReducers);
  //console.log(createStore(rootReducers));

export const store=createStore(rootReducers);

//console.log(store.getState)
