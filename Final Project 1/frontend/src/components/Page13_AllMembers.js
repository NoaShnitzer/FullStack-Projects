import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Page13_2AllMembers from './Page13_2AllMembers'

const Page13_AllMembers = () => {
    const [showMembers,setMembers] = useState([])

    useEffect(async()=>{
        let members = await axios.get(`http://localhost:8001/Members`)
        let items = members.data.map((member, index) => {
            return(
                <Page13_2AllMembers key={index} data={member}/>
            )
        })
        setMembers(items)
    },[])

    


    return (
        <div>
            <br/>
            {showMembers}
            <br/>
        </div>
    );
};

export default Page13_AllMembers;