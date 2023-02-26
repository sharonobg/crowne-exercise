import { useContext } from 'react';

import {CartContext} from '../../contexts/cart.context';
import Button from '../button/button.component';
import './cart-item.styles.scss';


const CartItem = ({cartItem}) => {
    
    const {name,imageUrl,price, quantity,totalPrice} = cartItem;
    const {removeCartItem,increaseQuantity,decreaseQuantity} = useContext(CartContext);
    const removeItemFromCart = () => removeCartItem(cartItem);
    const increaseItemQuantity = () => increaseQuantity(cartItem);
    const decreaseItemQuantity = () => decreaseQuantity(cartItem);
    //const decreaseQ = () => decreaseQuantity(cartItem);
    //const updateCartItemQ = () => updateCartItem(cartItem);
    
    return(
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div  className="item-details">
            <span key="id" className='name'>{name}</span>
            <span className="chevron"><span className="decreaseQ" onClick={decreaseItemQuantity}>&#8249;</span>{quantity}<span className="increaseQ" onClick={increaseItemQuantity}>&#8250;</span><span className="dropD">x</span></span> 
            <span>${price}</span>
            <span>{totalPrice}</span>
            <Button onClick={removeItemFromCart}>X</Button>
            
            </div>
            
            
        </div>
        
    )
}

export default CartItem;