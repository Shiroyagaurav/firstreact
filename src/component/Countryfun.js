import React, {  useState } from 'react';

function  Countryfun(props){

    const[name,setName] = useState('india');
    const [timezone,settimezone] =useState('GTA+5:30');


    const changecity =()=>{
        console.log("cvtfgbyhu");
        
        setName("usa")
        settimezone("GTA+5:40")
    }

    return (


        <div>
      <h1>city name</h1>
      <h2> your city is{name}</h2>
      <h3>city time {timezone}</h3>
      <button onClick={changecity}>change city </button>
 </div>
        
            
        
    );
}
   
        
    


export default Countryfun;