import{createContext, useState} from 'react';
import CARTITEMS from '../products.context.json';//MAYBE product-card

export const CartContext = createContext({
    cartItems:[],
});
export const CartProvider = ({children}) => {
    const [cartItems, setCartI] = useState(CARTITEMS);
    const value = {cartItems};

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
};
