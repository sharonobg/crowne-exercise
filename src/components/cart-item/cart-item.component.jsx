import './cart-item.styles.scss';
const CartItem = ({cartItem}) => {
    
    const {name, imageUrl,price, quantity} = cartItem;
    //const totalPrice = quantity * price;
    return(
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className="item-details">
            <span className='name'>{name}</span>
            <span>{quantity} x ${price}</span>
            <span>{cartItem.totalPrice}</span>
            </div>
            
        </div>
        
    )
}

export default CartItem;