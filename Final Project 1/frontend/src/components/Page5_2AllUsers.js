import axios from 'axios';
import React, { useState } from 'react';
import Page6_EditUsers from './Page6_EditUser'

const Page5_2Users = (props) => {
    const [comp, setComp] = useState("")




    let DeleteUser = async() => {
        let CurrentId = props.data.id
        await axios.delete(`http://localhost:8000/Users/${CurrentId}`)  
    }


    let goToPg6 = () => {
        setComp(<Page6_EditUsers/>)
    }



    return (
        <div>
            UserName: {props.data.UserName} <br/>
            Password: {props.data.Password} <br/>
            {props.data.FirstName}
            {props.data.isAdmin}
            <input type="button" value="Edit" onClick={goToPg6}/>
            <input type="button" value="Delete" onClick={DeleteUser}/>
            <br/><br/>
            {comp}
        </div>
    );
};

export default Page5_2Users;