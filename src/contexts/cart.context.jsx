import{createContext, useState,useEffect} from 'react';
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem)=>cartItem.id=== productToAdd.id
    );
    if(existingCartItem){
        return cartItems.map( (cartItem) => 
        cartItem.id === productToAdd.id 
        ? {...cartItem, quantity:cartItem.quantity + 1}
        :cartItem 
        );    
    }
    return(
        [...cartItems,{...productToAdd,quantity:1}]
      )
  
    //If found, increment quantity

    //return new array with modified cartItems/new cart item
    //return cartItems;
    
}

export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen:() => {},
    cartItems: [],
    addItemtoCart: ()=> {},
    totals:0

});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [totals,setTotals]=useState(0);
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd));
    }
    useEffect(() => {
        const newTotals = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,0)
            setTotals(newTotals);
        },[cartItems]);
    const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems,totals };
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
};
