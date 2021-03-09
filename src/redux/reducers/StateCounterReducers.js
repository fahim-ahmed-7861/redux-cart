

import { ADD_TO_CART } from "../actions/cartActions";
import { DECREMENT, INCREMENT } from "../actions/StateCounterActions";


const initialState={
    count:0
}

const stateReducers=(state=initialState,action)=>
{
    
   switch(action.type)
   {
       case INCREMENT:
           return {...state,count:state.count+1};
        
       case DECREMENT:
           return {
            ...state,
            count:state.count-1
           }
        case ADD_TO_CART:
            return {...state,count:state.count+1}
        default: return state;



   }
}

export default stateReducers;

