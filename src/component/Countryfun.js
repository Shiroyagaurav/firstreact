import React, {  useState } from 'react';
import Townfun from './Townfun';

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
      <Townfun countryName={name}/>
 </div>
        
            
        
    );
}
   
        
    


export default Countryfun;