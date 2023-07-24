import { useState } from 'react';
const Har = () =>{
    const [name,change]=useState('Harshanth');
    const But = () =>{
        change('Atchula');
    }
return(
    <div className="har">
        <h1>{name}</h1>
        <button onClick={But}>click</button>
        <h1> 
            second component
        </h1>
    </div>
);
}
export default Har;