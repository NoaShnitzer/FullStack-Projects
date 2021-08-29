import React, { useState } from 'react';
import axios from 'axios'

//צריכה לעשות עמוד 9_2 עם כפתור לכל סרט של עריכה ומחיקה של סרט ==> מחיקה לעשות באותו העמוד ואת העריכה להוביל לעמוד הזה

const Page11_EditMovie = (props) => {
    const [name, setName] = useState("")
    const [geners, setGeners] = useState("")
    const [imgURL, setImgURL] = useState("")
    const [premiered, setPremied] = useState("")
    
    let updateMovie = async() => {
        let currentId = props.data.id
        let newMovie = {
            Name: name.value,
            Genres: geners.value,
            ImgURL: imgURL.value,
            Premiered: premiered.value
        }
        await axios.put(`http://localhost:8001/Movies/${currentId}`, newMovie)
        props.history.push('/MainPage')
    }


    let cancelMovie = ()  => {
        props.history.push('/MainPage')
    }


    return (
        <div>
            Name: <input type="text" value={props.movie.name} onChange={e => setName({name:e.target.value})}/><br/>
            Geners: <input type="text" value={props.movie.genres} onChange={e => setGeners({geners:e.target.value})}/><br/>
            Image URL: <input type="text" value={props.movie.image.medium} onChange={e => setImgURL({imgURL:e.target.value})}/><br/>
            Premiered: <input type="date" value={props.movie.premiered} onChange={e => setPremied({premiered:e.target.value})}/><br/>
            <input type="button" value="Save" onClick={updateMovie}/>
            <input type="button" value="Cancel" onClick={cancelMovie}/>
        </div>
    );
};

export default Page11_EditMovie;