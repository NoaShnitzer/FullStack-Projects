import React, { useState , useEffect} from 'react';
import Page9_AllMovies from './Page9_AllMovies';
import Page10_AddMovie from './Page10_AddMovie'
import axios from 'axios';

const Page8_Movies = (props) => {
    const[comp, setComp] = useState("")
    const[movie, setMovie] = useState([])
    const [user, setUser] = useState("")
    const [id, setId] = useState("")


    useEffect(async() => {
        console.log(props.id);
        let id = props.id
        let response = await axios.get(`http://localhost:8000/PermissionsJson/${id}`)
        setUser(response.data)
        setId(id)
    },[])


    let GoToPg9 = () => {
        setComp(<Page9_AllMovies id={id}/>)
    }

    let GoToPg10 = () => {
        setComp(<Page10_AddMovie/>)
    }


    let searchMovie = async(e) => {
        let movies = await axios.get(`http://localhost:8001/Movies`)
        let filteredMovie = movies.data.filter(Movie => {
            return(Movie.Name.includes(e))
        })
        let searchedMovie = filteredMovie.map(Movie=>{
            return <div key={Movie._id}>{Movie.Name}, {Movie.Geners}, {Movie.Image}, {Movie.Premiered}</div>
        })
        setMovie(searchedMovie)
    }

    
    return (
        <div>
            <h2>Movies</h2>
            {user.ViewMovies && <input type="button" value="All Movies" onClick={GoToPg9}/>}
            {user.CreateMovies && <input type="button" value="Add Movie" onClick={GoToPg10}/>}
            Search Movie: <input type="text" onChange={e=>searchMovie(e.target.value)}/>
            {movie}
            {comp}

        </div>
    );
};

export default Page8_Movies;