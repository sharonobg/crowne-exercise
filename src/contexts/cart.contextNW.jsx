import{createContext, useState,useEffect} from 'react';
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem)=>cartItem.id=== productToAdd.id
    );
    if(existingCartItem){
        return cartItems.map( (cartItem) => 
        cartItem.id === productToAdd.id 
        ? {...cartItem, 
            quantity:cartItem.quantity + 1,
            totalItem:cartItem.quantity + 1*cartItem.price}
        :cartItem 
        );    
    }
    return(
        [...cartItems,{...productToAdd,
            quantity:1,
            totalItem:productToAdd.price}]
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
    totalItem: () => {},
    totalCart: () => {}
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [totalCart,setTotalCart]=useState(0);
    const [totalItem,setTotalItem]=useState(0);

    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd));
    }
    useEffect(() => {
        const newTotals = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,0)
            
        },[cartItems]);
    const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems,totalItem,setTotalItem,totalCart,setTotalCart };
    console.log({children})
    console.log({cartItems})
    console.log('cartItems' +cartItems)       
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
};
