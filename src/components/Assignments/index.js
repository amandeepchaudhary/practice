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

    const update = (event)=>{
        const vl = { ...value };  //Real Time Update of state when having the objects in it, instead of "String".
        vl[event.target.name] = event.target.value;
        setValue(vl);
    }

    const firstNameComponent = useRef();
    const lastNameComponent = useRef();
    const rollNumberComponent = useRef();
    const addressComponent = useRef();

    const setValues= () =>{
        if (value.firstName && value.lastName && value.rollNumber && value.address){

            setOk(true);
        }

        // const set = value;
        // set.firstName = firstNameComponent.current.value;
        // set.lastName = lastNameComponent.current.value;
        // set.rollNumber = rollNumberComponent.current.value;
        // set.address = addressComponent.current.value;
        // setValue(set);
        // if(set.address && set.firstName && set.lastName && set.rollNumber){
        //     setOk(true)
        //     // `First Name: ${value.firstName}, Last Name: ${value.lastName}, Roll Number: ${value.rollNumber}, Address: ${value.address}`
        // }else{
        //     setOk(false)
        // }
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
                <input type="text" name="firstName" ref={firstNameComponent} onChange={(e) => update(e)} placeholder="Enter First Name" />
                <br />
                {`Last Name: `}
                <input type="text" name="lastName" onChange={(e) => update(e)} ref={lastNameComponent} placeholder="Enter Last Name" />
                <br />
                {`Roll Number: `}
                <input type="text" name="rollNumber" onChange={(e) => update(e)} ref={rollNumberComponent} placeholder="Enter Roll Number" />
                <br />
                {`Address: `}
                <input type="text" name="address" onChange={(e) => update(e)} ref={addressComponent} placeholder="Enter Address" />
                <br />
                <button type="submit" onClick={(e)=>setValues(e)}> Submit</button>
                <br />
                    {/* {ok===true && value.firstName. && value.lastName && value.address && value.rollNumber? `First Name:${value.firstName} Last Name:${value.lastName} Roll Number:${value.rollNumber} Address:${value.address}`:"Error: Give all values"} */}
                

                {/* {ok===true?`First Name: ${value.firstName}, Last Name: ${value.lastName}, Roll Number: ${value.rollNumber}, Address: ${value.address}`:'Sorry'}
                 */}
                
                {ok?`First Name: ${value.firstName}, Last Name: ${value.lastName}, Roll Number: ${value.rollNumber}, Address: ${value.address}`:"Enter all the values."}
                

            </div>
        </div>
    )

}