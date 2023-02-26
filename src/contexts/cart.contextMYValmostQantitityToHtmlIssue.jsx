import{createContext, useState,useEffect} from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem)=>cartItem.id === productToAdd.id
    );
    //console.log(productToAdd);
    if(existingCartItem){
        return cartItems.map( (cartItem) => 
        cartItem.id === productToAdd.id 
        ? {...cartItem, 
            quantity:cartItem.quantity + 1,
            totalPrice:cartItem.quantity*cartItem.price+cartItem.price
        }
        :{...cartItem ,totalPrice:cartItem.price
        }
        ); 
    }
    return(
        [...cartItems,
            {...productToAdd,
                quantity:1,
                totalPrice:productToAdd.price   
        }]
        
      ) 
}


export const CartContext = createContext({
    isCartOpen:true,
    setIsCartOpen:() => {},
    addItemtoCart: ()=> {},
    removeCartItem:()=> {},
    cartItemQuantity: () => {},
    cartTotals: () => {},
    setCartTotal: () => {},
    newQuantity: () => {},
    updateCartItem:() => {}
    
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [totals,setTotals]=useState(0);
    const [itemQuantity, setItemQuantity] = useState(0);
    const [setCartTotal]=useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd));
    };

    const removeCartItem = (productToRemove) => {
        const newCartItems = cartItems.filter(cartItem => cartItem !== productToRemove)
        return ( 
            setCartItems(newCartItems)
            ) 
    };
   
    
        
 const increaseQuantity = (cartItem) => {
   setItemQuantity(cartItem.quantity + 1)
   console.log(cartItem.quantity);
 };
        
 const decreaseQuantity = (cartItem) => {
  if (cartItem.quantity !== 0) {
    setItemQuantity(cartItem.quantity - 1)
    console.log(cartItem.quantity);
   }
 };
 
    const cartTotal = cartItems.reduce((a,v) =>  a = a + v.totalPrice , 0 );
    const cartTotals = (cartItems) => {
        cartItems.reduce((a ,b) =>  a = a + b.totalPrice , 0 )
            setCartTotal(cartTotals)
            console.log(cartTotals)
    };
    
    useEffect(() => {
    const newTotals = cartItems.reduce( (total, cartItem) => total + cartItem.quantity,0)
            setTotals(newTotals);
        },[cartItems]);
    
    const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems,totals,cartTotal,setCartTotal,removeCartItem,itemQuantity,setItemQuantity,increaseQuantity,decreaseQuantity};
    //console.log(cartItems)
    //console.log(cartTotals)
    //console.log(totals)
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
};
