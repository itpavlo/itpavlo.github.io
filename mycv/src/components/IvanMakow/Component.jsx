import { useState } from "react";
import React from "react"; 
 

const Test =(props)=>{
const [state,setState] =useState(props.value)
    return(
        <div>
           
            <p> {state}</p>
            <button type='button' onClick ={()=>setState(state+1)}>+</button>
            <button type='button' onClick ={()=>setState(state-1)}>-</button>


        </div>
    )
}
 export default Test