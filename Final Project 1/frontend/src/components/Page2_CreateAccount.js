import axios from 'axios';
import React, { useState } from 'react';


const Page2_CreateAccount = (props) => {
    const [user, setUser] = useState({UserName:"", Password:""})

   const CreateAccount = async(e) => {
        e.preventDefault()
        let resp = await axios.get(`http://localhost:8000/Users`)
        for(let i=0; i<resp.data.length; i++){
            if(user.UserName === resp.data[i].UserName){
                let CurrentId = resp.data[i].id
                let updatedUserInfo = {
                    UserName: user.UserName,
                    Password: user.Password
                }
                await axios.put(`http://localhost:8000/Users/${CurrentId}`, updatedUserInfo)
                props.history.push('/')
            }
            alert("Unsuccessful Creation Attempt")
        }
    }

    return ( 
            <div>
                <h1> Movies - Subscriptions WebSite </h1>
                <h3>Create An Account:</h3>
                <form onSubmit={CreateAccount}>
                    UserName: <input type="text" onChange={e => setUser({...user,UserName:e.target.value})}/><br/>
                    Password: <input type="text" onChange={e => setUser({...user,Password:e.target.value})}/><br/><br/>  
                    <input type="submit" value="Create Account"/>
                </form>  
            </div>
        );

};

export default Page2_CreateAccount;