import {useContext } from 'react';
import{CartContext} from '../../contexts/cart.context';
import Button from '../../components/button/button.component';
import './checkout.styles.scss';

const Checkout = () => {
   
    const {cartItems,cartTotal,addItemToCart,removeItemFromCart,clearItem} 
    = useContext(CartContext);
    
    return(
        <div className='checkout-container'>
            <div className="item-details-header">
                            <span>Product</span>
                            <span>Description</span>
                            <span>Quantity</span>
                            <span>Price</span>
                            <span>Remove</span>
                            
                        </div>
            <div className='checkout-items'>
               { cartItems.map((cartItem) => {
                const {id,name,imageUrl,price, quantity} = cartItem;
                    return(
                      <div key={id}>
                        <div className="item-details">
                            <span className='img'><img alt='' src={imageUrl} /></span>
                            <span className='name'>{name}</span>
                            <span className="chevron">
                            <span className="decreaseQ" onClick={() => removeItemFromCart(cartItem)}>&#8249;</span>{quantity}<span className="increaseQ" onClick={() =>addItemToCart(cartItem)}>&#8250;</span>
                            </span> 
                            <span>${price}</span>
                            
                            <Button onClick={() => clearItem(cartItem)}>X</Button>
                        </div>
                        </div>
                    ) 
                })}
            </div>
            <div className="cart-total">
                    Total Price: {cartTotal}
                    <Button>PLACE ORDER</Button>
                </div>
        </div>   
    )  
}


export default Checkout;