import React, { useState , useEffect } from 'react';
import {Link} from 'react-router-dom'
import './Page3.css'
import Page4_ManageUsers from './Page4_ManageUsers';
import Page8_Movies from './Page8_Movies';
import Page12_Subscruptions from './Page12_Subscruptions';
import axios from 'axios';

const Page3_MainPage = (props) => {
    const [comp, setComp] = useState("")
    const [user, setUser] = useState("")
    const [user2, setUser2] = useState("")
    const [id, setId] = useState("")
    


    useEffect(async() => {
        let id = props.match.params.id
        let response = await axios.get(`http://localhost:8000/UsersJson/${id}`)
        setUser(response.data)
        setId(id)
        let response2 = await axios.get(`http://localhost:8000/PermissionsJson/${id}`)
        setUser2(response2.data)
    },[])



    let showMoviesComp = () => {
        setComp(<Page8_Movies id = {id}/>)
    }

    let showSubscriptionsComp = () => {
        setComp(<Page12_Subscruptions id = {id}/>)
    }
   

    let showManagingComp = () => {
        setComp(<Page4_ManageUsers id = {id}/>)
    }
    
   
    let GoToPg1 = () => {
        return props.history.push('/')
    }


    return (
        <div>
            <h1> Movies - Subscriptions WebSite </h1>
            <input type="button" value="Movies" onClick={showMoviesComp}/>
            {user2.ViewSubscriptions && <input type="button" value="Subscriptions" onClick={showSubscriptionsComp}/>}
            <input type="button" value="Log Out" onClick={GoToPg1}/>
            {user.isAdmin && <input type="button" value="Manage Users" onClick={showManagingComp}/>}      

            {comp}
            
        </div>
    );
};

export default Page3_MainPage;