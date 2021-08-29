import React, { useState , useEffect }from 'react';
import Page13_AllMembers from './Page13_AllMembers';
import Page15_AddMember from './Page15_AddMember';
import axios from 'axios'

const Page12_Subscruptions = (props) => {
    const [comp, setComp] = useState("")
    const [user, setUser] = useState("")

    
    useEffect(async() => {
        let id = props.id
        let response = await axios.get(`http://localhost:8000/PermissionsJson/${id}`)
        setUser(response.data)
    },[])


    let GoToPg13 = () => {
        setComp(<Page13_AllMembers/>)
    }

    let GoToPg15 = () => {
        setComp(<Page15_AddMember/>)
    }


    return (
        <div>
            <h2>Members</h2>
            <input type="button" value="All Members" onClick={GoToPg13}/>
            {user.CreateSubscriptions && <input type="button" value="Add Member" onClick={GoToPg15}/>}<br/>
            {comp}
        </div>
    );
};

export default Page12_Subscruptions;