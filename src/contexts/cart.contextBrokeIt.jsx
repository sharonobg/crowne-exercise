import{createContext, useState,useEffect} from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem)=>cartItem.id === productToAdd.id
    );
    console.log(productToAdd);
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
                totalPrice:productToAdd.price,
                
        }]
        
      ) 
}


export const CartContext = createContext({
    isCartOpen:true,
    setIsCartOpen:() => {},
    cartItems: [],
    addItemtoCart: ()=> {},
    //totals:0,
    cartItemQuantity: () => {},
   // cartTotal: () => {},
    //setCartTotal: () => {}
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [totals,setTotals]=useState(0);
    const [cartTotal,setCartTotal]=useState(0);
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd));
        //console.log(productToAdd.price) 
    }
    
    useEffect(() => {
    const newTotals = cartItems
        .reduce( (total, cartItem) => total + cartItem.quantity,0)
            setTotals(newTotals);
        },[cartItems]);

    const cartTotal = (cartItems, b) => {
            cartItems.reduce( (a,b) =>  a = a + b.totalPrice , 0 )
            setCartTotal(cartTotal)
        }
    const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems,totals,cartTotal,setCartTotal};
    console.log(cartItems)
    console.log(cartTotal)
    console.log(totals)
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
};
