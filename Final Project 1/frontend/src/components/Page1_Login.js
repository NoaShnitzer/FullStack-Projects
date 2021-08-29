import axios from 'axios';
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Page3_MainPage from './Page3_MainPage'


const Page1_Login = (props) => {
    const [user, setUser] = useState({UserName:"", Password:""})


    let CheckUsersExistence = async() => {
        let resp = await axios.get(`http://localhost:8000/Users`)
        console.log(resp.data);
        for(let i = 0; i < resp.data.length; i++){
            if(user.Password === resp.data[i].Password && user.UserName === resp.data[i].UserName){
                console.log(resp.data[i])
                console.log(resp.data[i].id)
                return (props.history.push(`/MainPage/${resp.data[i]._id}`))                
                
                
            }
        } 
        alert("Unsuccessful login attempt")
    }


    return (
        <div>
            <h1> Movies - Subscriptions WebSite </h1>
            <h3> Log in Page </h3>
            UserName: <input type="text" onChange={e => setUser({...user,UserName:e.target.value})}/><br/>
            Password: <input type="text" onChange={e => setUser({...user,Password:e.target.value})}/><br/>
            <input type="button" value="Login" onClick={CheckUsersExistence}/><br/>
            New User? <Link to="/CreateAccount">Create Account</Link>
        </div>
    );
};

export default Page1_Login;