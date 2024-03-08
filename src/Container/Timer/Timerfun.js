// import React, { useState, useEffect } from 'react';

// function Timerfun() {
//     const [time, setTime] = useState(new Date());

//     const tick = () => {
//         setTime(new Date());
//     };

//     useEffect(() => {
//         console.log("componentDidMount");
//         const timerID = setInterval(tick, 1000);

//         return () => {
//             console.log("componentWillUnmount");
//             clearInterval(timerID);
//         };
//     }, []);

//     useEffect(() => {
//         console.log("componentDidUpdate");
//     }, [time]);

//     return (
//         <div>
//             <h2>Timer</h2>
//             <p>{time.toLocaleTimeString()}</p>
//         </div>
//     );
// }

// export default Timerfun;

// import { clear } from '@testing-library/user-event/dist/clear';
import React, { useEffect, useState } from 'react';

function Timerfun() {

    const [time,settime]=useState=(new Date ());

    const tick=()=>{
        settime( new Date());
    }
    useEffect(()=>{
        const timeref=setInterval(tick,1000)

        return()=>{
            clearInterval(timeref);
        }
    },[])


   
    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timerfun;
