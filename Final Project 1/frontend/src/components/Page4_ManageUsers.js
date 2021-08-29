import React, { useState }from 'react';
import Page5_Users from './Page5_Users';
import Page7_AddUser from './Page7_AddUser';

const Page4_ManageUsers = () => {
    const [comp, setComp] = useState("")


    let GoToPg5 = () => {
        setComp(<Page5_Users/>)
    }

    let GoToPg7 = () => {
        setComp(<Page7_AddUser/>)
    }


    return (
        <div>
            <h2>Users</h2>
            <input type="button" value="All Users" onClick={GoToPg5}/>
            <input type="button" value="Add User" onClick={GoToPg7}/><br/>
            {comp}
        </div>
    );
};

export default Page4_ManageUsers;