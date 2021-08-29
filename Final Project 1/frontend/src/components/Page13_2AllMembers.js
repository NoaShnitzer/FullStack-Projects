import React, { useState } from 'react';
import axios from 'axios';
import Page14_EditMember from './Page14_EditMember';

const Page13_2AllMembers = (props) => {
    const [comp, setComp] = useState("")

    
    let DeleteUser = async() => {
        let CurrentId = props.data.id
        await axios.delete(`http://localhost:8001/Members/${CurrentId}`)  
    }


    let goToPg14 = () => {
        setComp(<Page14_EditMember/>)
    }


    return (
        <div>
            Member's Name: {props.data.Name}<br/>
            Member's Email: {props.data.Email}<br/>
            Member's City: {props.data.City}<br/>
            <input type="button" value="Edit" onClick={goToPg14}/>
            <input type="button" value="Delete" onClick={DeleteUser}/><br/><br/>
            {comp}
        </div>
    );
};

export default Page13_2AllMembers;