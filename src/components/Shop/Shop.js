import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Products from '../Products/Products';

const Shop = (props) => {

    //console.log(props);

    const {products,addToCart}=props;

    return (
        <div>
            <h1>This is shop</h1>

            
          {
              products.map(pd=><Products addToCart={addToCart} key={pd.id} product={pd}></Products>)
          }
            
        </div>
    );
};

const mapStateToProps=state=>
{
    return {
        cart:state.cart.cart,
        products:state.cart.products
    }
}

const mapDispatchToProps={
    addToCart:addToCart
}



export default connect(mapStateToProps,mapDispatchToProps)(Shop);