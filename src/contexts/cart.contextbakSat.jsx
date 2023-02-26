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
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
    updateCartItem:() => {}
    
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [totals,setTotals]=useState(0);
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
    
    const updateCartItem = (itemToChange) => {
        const newCartItems = cartItems.find(
            (cartItem)=>cartItem.id === itemToChange.id),
            const increaseQ = itemToChange.quantity + 1  
        return ( 
            setCartItems(updateCartItem(cartItems,itemToChange))
            ) 
    }
/*
    useEffect(() => {
        const increaseQuantity = (productToChange) => {
            console.log(productToChange.quantity);
            const incrQuantity = productToChange.quantity +1;
            console.log(incrQuantity);
            return(
                setUpdateItem(increaseQuantity(updateItem,incrQuantity))
            )
        };
    },[cartItems] );
    
    
    const decreaseQuantity = (productToChange) => {
        console.log(productToChange.quantity);
        const decrQuantity = productToChange.quantity -1;
        return ( 
            setUpdateItem(decreaseQuantity(updateItem,decrQuantity)),
            console.log(decrQuantity)
            )
    };*/

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
    
    const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems,totals,cartTotal,setCartTotal,removeCartItem,updateCartItem};
    //console.log(cartItems)
    //console.log(cartTotals)
    //console.log(totals)
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
};
