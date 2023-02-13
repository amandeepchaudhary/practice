import React, { useEffect, useState, useRef } from 'react';
// import { useContext } from 'react';
// import { context } from '../../useContext/index';
import Component1 from './component1';
import Component2 from './component2';


export default function HookTest (props){
    const [user, setUser] = useState({ firstName: "", lastName: "" });
    const [showElement, setShowElement] = useState(false);
    // const useMe = useContext(context);
    

    const firstNameComponent= useRef();
    const lastNameComponent= useRef();

    useEffect(()=>{

    },[user]);  //in [] we have the depedency of the State in it which have the object in it, if we have many object state then we use the class 

    const update = (e) => {
        // console.log(user)
        const username = { ...user };
        username[e.target.name] = e.target.value;  //Not rendering even after we are typing on the server it is not showing itself with the typing because we have given an object i.e.,{firstName:"", lastName:""} in useState of user, this will work if we give string that is a variable in usestate i.e., useState(""), If we want to use rendering when we give the object in useState then we have to use useEffect().
        // console.log(username)
        
        setUser(username);
        // console.log(user)
        
        //Also written as
        // setUser(e.target.value);
    }
    // console.log(user)

    const onClickChange = () => {
        setShowElement(true);  //Toggle = true h false, false h toh true
        console.log()
        const username = user;
        username.firstName = firstNameComponent.current.value;
        username.lastName = lastNameComponent.current.value;
        setUser(username);
    }

    return (
        // <useMe.Provider value={user}>
            <div>
                <div className='color-text'>
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
                <Component1 firstName={user.firstName}/> {/* Provider didn't work so i have to use the props to pass the properties of the component from one to another*/}
                <Component2 lastName={user.lastName}/>
            </div>
        // </useMe.Provider>  
    )
}