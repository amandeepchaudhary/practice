import React, { useRef } from "react";
import { useState } from "react";

//Assignment of Lect on 25/02/2022 making a form

export default function Assignment(){
    const [count, setCount] = useState(0);

    const [value,setValue] = useState({firstName:"", lastName:"", rollNumber:"", address:""})

    const [ok, setOk] = useState(false);

    const coun = ()=>{
        const con = count + 1;
        setCount(con)
    }

    const firstNameComponent = useRef();
    const lastNameComponent = useRef();
    const rollNumberComponent = useRef();
    const addressComponent = useRef();

    const setValues= () =>{
        const set = value;
        set.firstName = firstNameComponent.current.value;
        set.lastName = lastNameComponent.current.value;
        set.rollNumber = rollNumberComponent.current.value;
        set.address = addressComponent.current.value;
        setValue(set);
        if(set.address && set.firstName && set.lastName && set.rollNumber){
            setOk(true)
            // `First Name: ${value.firstName}, Last Name: ${value.lastName}, Roll Number: ${value.rollNumber}, Address: ${value.address}`
        }else{
            setOk(false)
        }
    }


    return (
        <div>
            {/* useState */}
            useState....
            <p >
                Count = {count !==0?count:"Click the Button Please"}
            </p>
            <button type="submit" onClick={(e)=>coun(e)}>Click to Add a count</button>

            <br />
            <hr />
            {/* Form */}
            <div>
                Form....
                <br />
                <br />
                {`First Name: `}
                <input type="text" ref={firstNameComponent} placeholder="Enter First Name" />
                <br />
                {`Last Name: `}
                <input type="text" ref={lastNameComponent} placeholder="Enter Last Name" />
                <br />
                {`Roll Number: `}
                <input type="text" ref={rollNumberComponent} placeholder="Enter Roll Number" />
                <br />
                {`Address: `}
                <input type="text" ref={addressComponent} placeholder="Enter Address" />
                <br />
                <button type="submit" onClick={(e)=>setValues(e)}> Submit</button>
                <br />
                    {/* {ok===true && value.firstName. && value.lastName && value.address && value.rollNumber? `First Name:${value.firstName} Last Name:${value.lastName} Roll Number:${value.rollNumber} Address:${value.address}`:"Error: Give all values"} */}
                

                {ok===true?`First Name: ${value.firstName}, Last Name: ${value.lastName}, Roll Number: ${value.rollNumber}, Address: ${value.address}`:'Sorry'}
                
                

            </div>
        </div>
    )

}