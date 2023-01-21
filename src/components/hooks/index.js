import React, { Component, useEffect, useRef } from 'react';
import { useState } from 'react';

export default function HookTest (){
    const [user, setUser] = useState({ firstName: "", lastName: "" });
    const [showElement, setShowElement] = useState(false);
    

    const firstNameComponent= useRef();
    const lastNameComponent= useRef();

    useEffect(()=>{

    },[user]);  //in [] we have the depedency of the State in it which have the object in it, if we have many object state then we use the class 

    const update = (e) => {
    //     const username = user;
    //     username[e.target.name] = e.target.value;  //Not rendering even after we are typing on the server it is not showing itself with the typing because we have given an object i.e.,{firstName:"", lastName:""} in useState of user, this will work if we give string that is a variable in usestate i.e., useState(""), If we want to use rendering when we give the object in useState then we have to use useEffect().

        // console.log(username)
        // setUser(username);
        //Also written as
        // setUser(e.target.value);
    }

    const onClickChange = () => {
        setShowElement(!showElement);  //Toggle = true h false, false h toh true
        const username = user;
        username.firstName = firstNameComponent.current.value;
        username.lastName = lastNameComponent.current.value;
        setUser(username);
    }

    return (
        <div>
            <div>
                {`First name:`}
                <input ref={firstNameComponent} type="text" name="firstName" onChange={(e) => update(e)} /><br />
                {`Last name:`}
                <input ref={lastNameComponent} type="text" name="lastName" onChange={(e) => update(e)} />
                <br />
                {`Last entered values are below>>>`}
                <br />
                {`First name: ${user.firstName}`}
                <br />
                {`Last name: ${user.lastName}`}
            </div>
            <button type="submit" onClick={(e) => onClickChange(e)}>Set the Value for User</button>
            {showElement && <div>React Show element</div>}
            
        </div>)
}