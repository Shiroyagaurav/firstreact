import React, {  useState } from 'react';

function Button (props) {


    const[count,setCount]=useState(0);



   const handleplus=()=>{
        // console.log("crdfvgbh");
        setCount(count+1);
    }
    
   const handleminus=()=>{
    // console.log("crdfvgbh");
    setCount(count-1);
}


        return (
            <div>
                <button>reset</button>
                <button onClick={handleplus} disabled={count<5?false:true}>+</button>
                <span>{count}</span>
                <button onClick={handleminus} disabled={count<0?false:true}>-</button>
            </div>
        );
     
}

export default Button;