import React, { useEffect, useState } from 'react';

function Useeffect(props) {

    const [num,setnum]=useState(0);
    const[nums,setnums]=useState(0);

    useEffect(()=>{
alert("i am clicked");
    },[nums])
    return (
<>
<button onClick={()=>{setnum(num+1)
}}>click me{num}</button>

<button onClick={()=>{setnums(nums+1)
}}>click me{nums}</button>
</>

        
    );
}

export default Useeffect;