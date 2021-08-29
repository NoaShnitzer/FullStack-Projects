import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Page5_2AllUsers from './Page5_2AllUsers'


const Page5_Users = () => {
     const [showUsers,setUsers] = useState([])

    useEffect(async()=>{
        let users = await axios.get(`http://localhost:8000/Users`)
        let items = users.data.map((user, index) => {
            return(
                <Page5_2AllUsers key={index} data={user}/>
            )
        })
        setUsers(items)
    },[])

    


    return (
        <div>
            <br/>
            {showUsers}
            <br/>
        </div>
    );
};

export default Page5_Users;