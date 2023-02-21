import {useContext} from 'react';
import{CartContext} from '../../contexts/cart.context';
import Button from '../../components/button/button.component';
import CartItem from '../../components/cart-item/cart-item.component';
import './checkout.styles.scss';

const Checkout = () => {
    const {cartItems} = useContext(CartContext);
    return(
            <div className='checkout-container'>
                <div className='cart-items'>
                    {cartItems.map((item) => 
                    (<CartItem key={item.id} cartItem={item} />
                    ))}
                </div>
                
            <Button>PLACE ORDER</Button>
        </div>
    );
};
export default Checkout;