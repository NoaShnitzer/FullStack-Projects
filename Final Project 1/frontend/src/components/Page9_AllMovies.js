import React, { useState , useEffect } from 'react';
import axios from 'axios'
import Page9_2AllMovies from './Page9_2AllMovies'


const Page9_AllMovies = (props) => {
    const [showMovies, setMovies] = useState([])
    const [id, setId] = useState("")

    useEffect(async() => {
        let userid = props.id
        setId(userid)
        let movies = await axios.get('http://localhost:8001/Movies')
        let items = movies.data.map((movie, index) => {
            return(
                <Page9_2AllMovies key={index} data={movie} id={id}/>
            )
        })
        setMovies(items)
    },[])
   
    return (
        <div>
            <br/>
            {showMovies}
            <br/>
        </div>
    );
};

export default Page9_AllMovies;