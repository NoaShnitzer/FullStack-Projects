import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React, { useState } from 'react';


const Page7_AddUser = () => {

    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [userName, setuserName] = useState("")
    const [sessionTimeOut, setsessionTimeOut] = useState("")
    const [permissions, setpermissions] = useState({
        ViewSubscriptions:"",
        CreateSubscriptions:"",
        DeleteSubscriptions:"",
        UpdateSubscriptions:"",
        ViewMovies:"",
        CreateMovies:"",
        DeleteMovies:"",
        UpdateMovies:""
    })
    


    let saveUser = async(e) => {
        e.preventDefault()
        console.log(firstName);
        let newUser = {
            FirstName: firstName,
            LastName: lastName,
            UserName: userName,
            SessionTimeOut: sessionTimeOut,
            Permissions: permissions
        }
    
        //console.log(newUser)
        await axios.post(`http://localhost:8000/Users`, newUser);

        let obj = {
            isAdmin: false,
            FirstName: firstName,
            LastName: lastName,
            CreatedDate: {currentTime: new Date().toLocaleString()},
            SessionTimeOut: ""
        }
        await axios.post(`http://localhost:8000/UsersJson`, obj)

        let item = {
            isAdmin: false,
            ViewSubscriptions: permissions.ViewSubscriptions,
            CreateSubscriptions: permissions.CreateSubscriptions,
            DeleteSubscriptions: permissions.DeleteSubscriptions,
            ViewMovies: permissions.ViewMovies,
            CreateMovies: permissions.CreateMovies,
            DeleteMovies: permissions.DeleteMovies
        }
        await axios.post(`http://localhost:8000/PermissionsJson`, item)
        
    }


    let cancelUser = (props) => {
        props.history.push('/MainPage')
    }



    return (
        <div>
            <form>
                First Name: <input type="text" onChange = {e => setfirstName ({firstName:e.target.value})}/><br/>
                Last Name: <input type="text" onChange = {e => setlastName ({lastName:e.target.value})}/><br/>
                UserName: <input type="text" onChange = {e => setuserName ({userName:e.target.value})}/><br/>
                Session Time Out: <input type="number" onChange = {e => setsessionTimeOut ({sessionTimeOut:e.target.value})}/><br/>
                Permissions:
                <div>
                    View Subscriptions: <input type="checkbox" onChange={e => setpermissions ({...permissions,ViewSubscriptions:e.target.checked})}/><br/>
                    Create Subscriptions: <input type="checkbox" onChange={e => setpermissions ({...permissions,CreateSubscriptions:e.target.checked})}/><br/>
                    Delete Subscriptions: <input type="checkbox" onChange={e => setpermissions ({...permissions,DeleteSubscriptions:e.target.checked})}/><br/>
                    Update Subscriptions: <input type="checkbox" onChange={e => setpermissions ({...permissions,UpdateSubscriptions:e.target.checked})}/><br/>
                    View Movies: <input type="checkbox" onChange={e => setpermissions ({...permissions,ViewMovies:e.target.checked})}/><br/>
                    Create Movies: <input type="checkbox" onChange={e => setpermissions ({...permissions,CreateMovies:e.target.checked})}/><br/>
                    Delete Movies: <input type="checkbox" onChange={e => setpermissions ({...permissions,DeleteMovies:e.target.checked})}/><br/>
                    Update Movies: <input type="checkbox" onChange={e => setpermissions ({...permissions,UpdateMovies:e.target.checked})}/>
                </div>
                <br/><br/>
                <input type="button" value="Save" onClick = {saveUser}/>
                <input type="button" value="Cancel" onClick = {cancelUser}/>


            </form>
            
        </div>
    );
};

export default Page7_AddUser;