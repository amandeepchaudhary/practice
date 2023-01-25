import { useState } from "react";

export default function Palindrome (){
    
    const [palin, setPalin] = useState(false)

    const check = "abba";
    const ch =()=>{
        if (check===check.reversed()){
            setPalin(true)
        }
    }
        // abba = abba ulta same 
    

    return(
        <div>
            <h1>Palindrome</h1>
            <h3>Given string</h3>
            {check.map((string,index)=>{
                return <span key={`string_${index}`}>{string}</span>
            })}
            <button onClick={(e)=>check(e)}></button>
            <div>
                if( {check===check.reversed()}){
                "This is a Palindrome"
                }
                else{
                    "This is not a Palindrome"
                };
                
            </div>
                
        </div>
    )

}