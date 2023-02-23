const data = [
  {title : "One",prix:100},
  {title : "Two",prix:200},
  {title : "Three",prix:300}
]

console.log((data.reduce((a,v) =>  a = a + v.prix , 0 )))

const data2 = [
    {title : "One",prix:100},
    {title : "Two",prix:200},
    {title : "Three",prix:300}
  ]
  
  console.log((data2.reduce((fish ,cat) =>  fish = fish + cat.prix , 0 )))

  /*remove cart item opts:*/
  const removeCartItem = (cartItems, productToRemove) => {
    cartItems.filter(
        (cartItem)=>cartItem.id === productToRemove.id)
    //return removeCartItem;
    console.log(productToRemove)
  }
    const removeCartItemArray = cartItems.filter(el => itemToRemove.id)
    /*const myArray = [1,2,3,4,5];
    
    let newThing = myArray.filter(el => el > 2);
    return newThing;*/
    }
  