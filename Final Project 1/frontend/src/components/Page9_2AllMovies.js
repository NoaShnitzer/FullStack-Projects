import React, { useState, useEffect } from 'react';
import Page11_EditMovie from './Page11_EditMovie'
import axios from 'axios'

const Page9_2AllMovies = (props) => {
    const[comp, setComp] = useState("")
    const [user, setUser] = useState("")
    const [id, setId] = useState("")


    useEffect(async() => {
        let userId = props.id
        setId(userId)
        let response = await axios.get(`http://localhost:8000/PermissionsJson/${id}`)
        setUser(response.data)
    },[])

    
    let DeleteMovie = async() => {
        let CurrentId = props.data.id
        await axios.delete(`http://localhost:8001/Movies/${CurrentId}`)  
    }


    let goToPg11 = () => {
        setComp(<Page11_EditMovie/>)
    }


    return (
        <div>
            Geners: {props.data.Geners}<br/>
            Movie's Name: {props.data.Name}<br/>
            Image : <img src={props.data.Image}/><br/>
            Premiered: {props.data.Premiered}<br/>
            {user.UpdateMovies && <input type="button" value="Edit" onClick={goToPg11}/>}
            {user.DeleteMovies && <input type="button" value="Delete" onClick={DeleteMovie}/>}
            <br/><br/>
            {comp}
        </div>
    );
};

export default Page9_2AllMovies;