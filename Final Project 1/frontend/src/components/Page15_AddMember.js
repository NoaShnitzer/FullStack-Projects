import React, { useState } from 'react';
import axios from 'axios';

const Page15_AddMember = (props) => {
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[city, setCity] = useState("")


    let saveUser = async(e) => {
        e.preventDefault()
        let updatedInfo = {
            Name: name,
            Email: email,
            City: city,
        }
        await axios.post(`http://localhost:8001/Members`, updatedInfo)
        props.history.push('/MainPage')
    }



    let cancelUser = (props) => {
        props.history.push('/MainPage')
    }


    return (
        <div>
            <form>
                <br/>
            Name: <input type="text" onChange={e => setName({name: e.target.value})}/> <br/>
            Email: <input type="text" onChange={e => setEmail({email: e.target.value})}/> <br/>
            City: <input type="text" onChange={e => setCity({city: e.target.value})}/> <br/>
            <br/><br/>
                <input type="button" value="Save" onClick = {saveUser}/>
                <input type="button" value="Cancel" onClick = {cancelUser}/>
            </form>  
        </div>
    );
};

export default Page15_AddMember;