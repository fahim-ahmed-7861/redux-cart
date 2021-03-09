import { combineReducers, createStore } from "redux";
import StateCounter from "../../components/StateCounter/StateCounter";
import cartReducers from "../reducers/cartReducers";
import {songReducers,selectSongReducers} from "../reducers/songReducers"
import stateReducers from "../reducers/StateCounterReducers";

const rootReducers=combineReducers({
    
    cart:cartReducers,

    StateCounter:stateReducers,

    songReducers : songReducers,

    selectSongReducers: selectSongReducers
  });

 // console.log(combineReducers);
  //console.log(createStore(rootReducers));

export const store=createStore(rootReducers);

//console.log(store.getState)
