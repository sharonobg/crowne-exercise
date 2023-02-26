import {useContext} from 'react';
import{CartContext} from '../../contexts/cart.context';
import Button from '../../components/button/button.component';
import CartItem from '../../components/cart-item/cart-item.component';
import './checkout.styles.scss';

const Checkout = () => {
    const {cartItems} = useContext(CartContext);
    const {cartTotal} = useContext(CartContext);
    return(
            <div className='checkout-container'>
                <div className='cart-items'>
                    {cartItems.map((item) => 
                    (
                        <CartItem key={item.id} cartItem={item} />
                    ))}
                </div>
                <div className="cart-total">
                    Total Price: {cartTotal}
                    <Button>PLACE ORDER</Button>
                </div>
                
            
        </div>
        
    );
   
};
export default Checkout;