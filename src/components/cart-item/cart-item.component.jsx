import './cart-item.styles.scss';


const CartItem = ({cartItem}) => {
    
    const {name,imageUrl,price, quantity} = cartItem;
    
    return(
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div  className="item-details">
            <span key="id" className='name'>{name}</span>
            <span className="chevron"><span className="decreaseQ">&#8249;</span>{quantity}<span className="increaseQ">&#8250;</span><span className="dropD">x</span></span> 
            <span>${price}</span>
        
            
            </div>
            
            
        </div>
        
    )
}

export default CartItem;