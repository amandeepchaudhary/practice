import React from 'react'
import { useState, useMemo } from "react"

export default function Memo() {
    const [countMe, setCountMe] = useState(0)
    const [items, setItems] = useState([])
    const [ini,setIni] = useState(false)
    
    const number =(num) =>{
        // console.log(num);
        for(let i=0;i<1000;i++){
            num +=1
        }
        // if(num===1002){

        // }
        console.log('num runs')
        return num;
    }
    
    const control = useMemo(() => number(countMe), [countMe]); //number function m countMe ko pass kra hai, phir bola hai [Memorize krlo countMe ki value ko], If [countMe] Changes then Number function will run
     
    const increase = ()=>{
        setCountMe((num)=>num + 1);
        setIni(true)
    }

    const item = (e) =>{
        setItems(()=> [...items, ' Item'])  //Pending items + new items with spread operator
        
    }


  return (
    <div>
        <h1>Memo</h1>
        <h2>Items</h2>
        <button onClick={(e)=>item(e)}>Add Item</button>
        {items.map((item,index) => {
           return <span key={`key${index}`}>{item + ` ` +(index+1) + ` Added /`}</span>
        })}
        <div>
            
        <button onClick={()=>increase()}>Add Count</button>
        {ini?control:"Click on the Add Count to Add the count"}

        </div>

    </div>
  )
}
