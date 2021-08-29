import React, { useState } from 'react';
import axios from 'axios'

const Page10_AddMovie = (props) => {
    const [name, setName] = useState("")
    const [geners, setGeners] = useState("")
    const [imgURL, setImgURL] = useState("")
    const [premiered, setPremied] = useState("")



    let saveMovie = async() => {
        let newMovie = {
            Name: name,
            Geners: geners,
            ImgURL: imgURL,
            Premiered: premiered
        }
        await axios.post(`http://localhost:8001/Movies`, newMovie)
        props.history.push('/MainPage')
    }


    let cancelMovie = ()  => {
        props.history.push('/MainPage')
    }


    return (
        
        <div>
            <br/>
            Name: <input type="text" onChange={e => setName({name:e.target.value})}/><br/>
            Geners: <input type="text" onChange={e => setGeners({geners:e.target.value})}/><br/>
            Image URL: <input type="text" onChange={e => setImgURL({imgURL:e.target.value})}/><br/>
            Premiered: <input type="date" onChange={e => setPremied({premiered:e.target.value})}/><br/>
            <br/>
            <input type="button" value="Save" onClick={saveMovie}/>
            <input type="button" value="Cancel" onClick={cancelMovie}/>
        </div>
    );
};

export default Page10_AddMovie;