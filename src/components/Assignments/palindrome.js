import { useState } from "react";
import React from "react";

const Palindrome = () =>{
    
    // const [palin, setPalin] = useState(false)

    const [check, setCheck] =useState("") 

    const enter =(e)=>{
        setCheck(()=>check,[e.target.value]);
        check.map((enter,index)=>{
            return <span key={`check_${index}`}>{enter}</span>
        })
        if (check === {enter}){
            <h1>True</h1>
        }
        else{
            <h2>False</h2>
        }
    }
    // const checks = ()=>{
    //     setCheck(()=>check,e.target)
    // }
    // const ch =()=>{
    //     if (check===check.reversed()){
    //         setPalin(true)
    //     }
    // }
        // abba = abba ulta same 
    

    return(
        <div>
            <h1>Palindrome</h1>
            <h3>Given string</h3>
            <input name="enter" type="text"></input>
            {/* {check.map((enter,index)=>{
                return <span key={`string_${index}`}>{enter}</span>
            })} */}
            <button type="submit" onClick={(e)=>enter(e)}>Its me</button>
            {/* <div>
                if( {check===check.reversed()}){
                "This is a Palindrome"
                }
                else{
                    "This is not a Palindrome"
                };
                
            </div> */}
            <br />
                {check}
        </div>
    )

}

export default Palindrome;