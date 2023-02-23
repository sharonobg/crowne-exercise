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
/*const removeCartItem = (cartItems, productToRemove) => {
cartItems.filter(
    (cartItem)=>cartItem.id === productToRemove.id)
//return removeCartItem;
console.log(productToRemove)
const myArray = [1,2,3,4,5];
let newThing = myArray.filter(el => el > 2);
return newThing;
}*/
const removeCartItem = (cartItems, itemToRemove) => {
    const removeCartItemArray = cartItems.filter(el => itemToRemove.id)
    console.log(itemToRemove)
}
export const CartContext = createContext({
    isCartOpen:true,
    setIsCartOpen:() => {},
    //cartItems: [],
    addItemtoCart: ()=> {},
    removeCartItem:()=> {},
    cartItemQuantity: () => {},
    cartTotals: () => {},
    setCartTotal: () => {}
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [totals,setTotals]=useState(0);
    const [setCartTotal]=useState(0);
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd));
        //console.log(productToAdd.price) 
    }
    /*const cartTotal = () => {
        cartItems.reduce( (a,b) =>  a = a + b.totalPrice , 0 ) 
        setCartTotal(cartTotal);
        console.log(cartTotals)
    }*/
    const cartTotal = cartItems.reduce((a,v) =>  a = a + v.totalPrice , 0 )
    console.log(cartTotal)
    const cartTotals = (cartItems) => {
        cartItems.reduce((a ,b) =>  a = a + b.totalPrice , 0 )
            setCartTotal(cartTotals)
            console.log(cartTotals)
    }
    
    useEffect(() => {
    const newTotals = cartItems.reduce( (total, cartItem) => total + cartItem.quantity,0)
            setTotals(newTotals);
        },[cartItems]);

    const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems,totals,cartTotal,setCartTotal};
    console.log(cartItems)
    console.log(cartTotals)
    console.log(totals)
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
};
