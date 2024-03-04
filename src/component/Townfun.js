import React, {  useState } from 'react';

function Townfun (props) {
    console.log(props.countryName);
    
    const[name ,setName]=useState('ahemdabad');
    const[population,setpopulation]=useState('20000');

    const changecity =()=>{
        console.log("cvtfgbyhu");
        
        setName("gadhinagar")
        setpopulation("30000")
    }
        return (
            <div>

                {props.countryName ==="india" ?<h3>delhi</h3> : <h4>mumbai</h4>}
                <h1>your city name{name}</h1>
                <h2>ypur city  population{population}</h2> 
                 <button onclick={changecity}>change city</button>
            
              
            </div>
        );
    
}

export default Townfun;