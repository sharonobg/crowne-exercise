import { useContext } from 'react';
import {CartContext} from '../../contexts/cart.context';
import Button from '../button/button.component';
import './cart-item.styles.scss';


const CartItem = ({cartItem}) => {
    
    const {name, imageUrl,price, quantity,totalPrice} = cartItem;
    const {removeCartItem} = useContext(CartContext);
    //const removeCartItem = () => addItemToCart(product);
    const removeProduct = () => removeCartItem(cartItem);

    return(
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className="item-details">
            <span className='name'>{name}</span>
            <span className="chevron">{quantity} <span className="dropD">x</span></span> 
            <span>${price}</span>
            <span>{totalPrice}</span>
            <Button onClick={removeProduct}>X</Button>
            
            </div>
            
            
        </div>
        
    )
}

export default CartItem;