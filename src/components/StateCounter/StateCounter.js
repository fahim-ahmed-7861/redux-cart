import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../../redux/actions/StateCounterActions';

const StateCounter = (props) => {

   const {count,increment,decrement,cart}=props;

   console.log("FAHIM ",props,count);


    return (
        <div>
            <h1>Counter : {count}</h1>

            <h2>CART LEN : {cart.length}</h2>

            <button onClick={()=>increment()}>Increment</button>

            <button onClick={()=>decrement()} style={{marginLeft:'20px'}}>Decrement</button>
        </div>
    );
};


const mapStateToProps=state=>
{
    //console.log(state);
    return {

        ...state.StateCounter,

        ...state.cart

       
       
       
        
    }
}

const mapDispatchToProps={
    increment:increment,
    decrement:decrement
}




export default connect(mapStateToProps,mapDispatchToProps)(StateCounter);


