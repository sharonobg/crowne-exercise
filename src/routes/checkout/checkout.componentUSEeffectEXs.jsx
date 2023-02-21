import React, { useState, useEffect } from 'react';

const Checkout = () => {
    const [count, setCount] = useState(0);
    const [num, setNum]= useState(1);
    let changeNum = () => {
      setNum((n) => n + 1);
      console.log(num);
    }
    let changeCount = () => {
      setCount(count + 1)
      console.log(count);
    }
    //means: [variable, function to call to change the state]= useState(initial value)
    /*useEffect( () => {    // Update the document title using the browser API    
       console.log({count})
    }
    );*/
    /*use Effect*/
    useEffect( () => {console.log('I re-rendered')});

    useEffect( () => {//first arg is function, then callback 
      console.log('only the first mount')
    },[]// emty [] so only 1x(class:component did mount)

    ) 
    useEffect( () => {//first arg is function, then callback 
      //console.log(`I updated num to ${num}, and count to ${count}`);
      console.log(`I updated num , and count to ${count}`);
      return () =>{
        console.log('we undo before we redo')
      };
        
    },[num,count]//callback list(array) of dependencies (class:component did update - this variable)
//THIS IS TOO MUCH WORK BETTER [](ANDREMOVE DEPENCENCY IN THE CONSOLE LOG
    ) 
    /*end use Effect*/
    return (
                <div>
                <h1 onClick={changeNum}>Change the fish</h1>
                  <p>You clicked {count} times</p>
                  <button onClick={changeCount}>
                    Click me
                  </button>
                </div>
              );
        
            }

export default Checkout