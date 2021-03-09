import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = (props) => {

    const {cart,removeFromCart}=props.cart;

   // console.log(cart);


    return (
        <div>
            <h1>this is cart</h1>
            <ul>

                {
                   cart.map(pd=>
                        <div>
                       <h1>Name : {pd.name}</h1>
                <li>{pd.id} <button onClick={()=>removeFromCart(pd.id,pd.productId)} >X</button></li>
                </div>
                )
              
               }
            </ul>
        </div>
    );
};

const mapStateToProps=state=>
{
    console.log("11 ",state)
     return {
         cart:state.cart
     }
}

const mapDispatchToProps=
{
   
        removeFromCart:removeFromCart
    
}



export default connect(mapStateToProps,mapDispatchToProps)(Cart);