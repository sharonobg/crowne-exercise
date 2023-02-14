import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
const currentCart = [];
const CartDropdown = () => {
    const cartSelection = () => {
        return(
            <div class='cart-dropdown-container'>
            {/*currentCart=[]*/}
            </div>
        )
    };

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>

            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>

    )
}
export default CartDropdown;