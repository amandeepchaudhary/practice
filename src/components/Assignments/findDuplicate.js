import React, { useState } from 'react';

export default function FindDuplicate() {
    const [com , setCom] = useState("");
    // const [values , setValues] = useState("");
    
    const enter = (e) =>{
        setCom(e.target.value);
    }

    const p=[]

    // const pr = () =>{
    //     for(var ni = 0;p.length>ni;ni++){
    //         if (p[ni]!=="NO"){
    //             console.log(p[ni])
    //         }

    //     }
    // }

    const pic = []
    const compare = () =>{
        // setCom(e.target.value)  //<<<<<Here enter the string you want to compare<<<<<
        for(var i=0;com.length>i;i++){
            var o = 0
            for(let j=0;com.length>j;j++){
                // console.log(n[i])
                if(com[i]===com[j+i+1]){
                    p[i]=com[i]
                    o=o+1;
                }
            if (o===0){
                p[i] = 'NO'
            }
        }
    }
    
    var b =0
    for(var ni = 0;p.length>ni;ni++){
            if (p[ni]!=="NO"){
                // console.log(p[ni])
                // document.innerHTML= (p[ni]);
                pic[b]= p[ni];
                b++;
            }
            
        }
        console.log(pic)
    // var op = pic.toString
    // console.log(p)
    document.getElementById('showw').innerHTML = pic;
    //         // console.log(p[i])
    }

  return (
    <div>
        <input type='text' placeholder='Type string to get repeated words!' id='word' name='word' onChange={(e)=>enter(e)}></input>
        <button onClick={()=>compare()}>Compare</button>
        <p id='showw'></p>
        {/* <textarea value={pic} onChange={()=>compare()}></textarea> */}
        {/* <textarea >{pic}</textarea> */}
        {/* {document.write(p)} */}
        {/* {document.getElementById('showw').innerHTML = 5} */}
        

        
    </div>
  )
}
