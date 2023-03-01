import {useContext } from 'react';
import{CartContext} from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Button from '../../components/button/button.component';
import './checkout.styles.scss';

const Checkout = () => {
   
    const {cartTotalPrice} = useContext(CartContext);
    
    return(
        <div className='checkout-container'>
            <div className="item-details-header">
                            <span>Product</span>
                            <span>Description</span>
                            <span>Quantity</span>
                            <span>Item Total</span>
                            <span>Price</span>
                            <span>Remove</span>
                            
                        </div>
            <CheckoutItem />
            
            <div className="cart-total">
                    Total Price: ${cartTotalPrice}
                    <Button>PLACE ORDER</Button>
                </div>
        </div>   
    )  
}


export default Checkout;