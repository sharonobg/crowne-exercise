import {useContext } from 'react';
import{CartContext} from '../../contexts/cart.context';
import Button from '../../components/button/button.component';
import './checkout-item.styles.scss';

const CheckoutItem = () => {
    const {cartItems,addItemToCart,reduceItemFromCart,clearItem} 
    = useContext(CartContext);
    return(
<div className="checkout-item-container">
<div className='checkout-items'>
    
               { cartItems.map((cartItem) => {
                const {id,name,imageUrl,price, quantity} = cartItem;
                    return(
                      <div key={id}>
                        <div className="item-details">
                            <span className='img'><img alt='' src={imageUrl} /></span>
                            <span className='name'>{name}</span>
                            <span className="chevron">
                            <span className="decreaseQ" onClick={() => reduceItemFromCart(cartItem)}>&#8249;</span>{quantity}<span className="increaseQ" onClick={() =>addItemToCart(cartItem)}>&#8250;</span>
                            </span> 
                            <span className="totalPr">{cartItem.totalPrice}</span>
                            <span>${price}</span>
                            
                            <Button onClick={() => clearItem(cartItem)}>X</Button>
                        </div>
                        
                        </div>
                        
                    ) 
                })}
            </div>
</div>
    )
}
export default CheckoutItem