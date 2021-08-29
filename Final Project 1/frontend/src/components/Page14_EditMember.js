import React, { useState } from 'react';
import axios from 'axios'


const Page14_EditMember = (props) => {
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[city, setCity] = useState("")


    
    let updateUser = async(e) => {
        e.preventDefault()
        let currentId = props.data.id
        let updatedInfo = {
            Name: name.value,
            Email: email.value,
            City: city.value,
        }
        await axios.put(`http://localhost:8001/Members/${currentId}`, updatedInfo)
        props.history.push('/MainPage')
    }


    let cancelUser = (props) => {
        props.history.push('/MainPage')
    }


    return (
        <div>
            <form>
            Name: <input type="text" onChange={e => setName({name: e.target.value})}/> <br/>
            Email: <input type="text" onChange={e => setEmail({email: e.target.value})}/> <br/>
            City: <input type="text" onChange={e => setCity({city: e.target.value})}/> <br/>
            <br/>
                <input type="button" value="Update" onClick = {updateUser}/>
                <input type="button" value="Cancel" onClick = {cancelUser}/>
            </form>
        </div>
    );
};

export default Page14_EditMember;