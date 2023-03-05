import React, { useState } from 'react';

export default function FindDuplicate() {
    const [com , setCom] = useState("");

    const enter = (e) =>{
        setCom(e.target.value);
    }
<<<<<<< HEAD
    const compare = () =>{
=======
    const compare = (e) =>{
>>>>>>> a66ec69e2045c9d7e030e2b64e19f6abd54451b2
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
<<<<<<< HEAD
        <input type='text' placeholder='Type string to get repeated words!' id='word' name='word' onChange={(e)=>enter(e)}></input>
=======
        <input type='text' placeholder='Type string to get repeated words!' id='word' name='word' onChange={(e)=>compare(e)}></input>
>>>>>>> a66ec69e2045c9d7e030e2b64e19f6abd54451b2
        <button onClick={()=>compare()}>Compare</button>
    </div>
  )
}
