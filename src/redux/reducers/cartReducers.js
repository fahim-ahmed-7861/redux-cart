import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions"

const initialState={
    cart:[],
    products:[ {name:"ASUS", id:1},
    {name:"SAMSUNG", id:2},
    {name:"TOSHIBA", id:3},
    {name:"HP", id:4},
    {name:"MAX", id:5},]
}

const cartReducers=(state=initialState,action)=>
{
   switch(action.type)
   {
       case ADD_TO_CART:

       const newObj={id:action.id,
        name:action.name,
        productId:state.cart.length
    }

           return {
               ...state,
               cart:[...state.cart,newObj],
               
           }
        case REMOVE_FROM_CART:
            console.log(action.productId);
            const newCart=state.cart.filter(pd=>pd.productId!=action.productId);

            console.log(newCart);

            return {
                ...state,
                cart:newCart,
                
                
            }
        default:
            return state;
   }
}

export default cartReducers;