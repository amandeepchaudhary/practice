import React, { useState } from 'react';

export default function FindDuplicate() {
    const [com , setCom] = useState("");

    const enter = (e) =>{
        setCom(e.target.value);
    }
    const compare = (e) =>{
        // setCom(e.target.value)  //<<<<<Here enter the string you want to compare<<<<<
        for(var i=0;com.length>i;i++){
            for(let j=0;com.length>j;j++){
                // console.log(n[i])
                if(com[i]===com[j+1+i]){
                    console.log(com[i])
                    
                }
            }
        }
    }

  return (
    <div>
        <input type='text' placeholder='Type string to get repeated words!' id='word' name='word' onChange={(e)=>compare(e)}></input>
        <button onClick={()=>compare()}>Compare</button>
    </div>
  )
}
