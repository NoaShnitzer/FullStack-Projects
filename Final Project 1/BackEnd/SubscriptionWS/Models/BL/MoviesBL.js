let movie = require('../Schema/MoviesSchema')

//GetAll
let GetAllMovies = () => {
    return new Promise((resolve, reject) => {
        movie.find({}, (err, data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}



//GetById
let GetMovieById = (id) => {
    return new Promise((resolve,reject) => {
        movie.findById(id, (err,data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}



//Create
let AddMovie = (Movie) => {
    return new Promise((resolve, reject) => {
        let newMovie = new movie( {
            Name: Movie.name,
            Geners: Movie.genres,
            Image: Movie.image.medium,
            Premiered: Movie.premiered
        })
        newMovie.save((err) => {
            if(err){cl
                reject(err)
            }else{
                resolve("Movie has been added successfuly!")
            }
        })
    })
}



//uUpdate
let UpdateMovie = (id, Movie) => {
    return new Promise((resolve, reject) => {
        movie.findByIdAndUpdate(id, {
            Name: Movie.Name,
            Geners: Movie.Geners,
            Image: Movie.Image,
            Premiered: Movie.Premiered
        }, (err) => {
            if(err){
                reject(err)
            }else{
                resolve("Movie has been updated successfuly!")
            }
        })
    })
}



//Delete
let DeleteMovie = (id) => {
    return new Promise((resolve, reject) => {
        movie.findByIdAndDelete(id, (err) => {
            if(err){
                reject(err)
            }else{
                resolve("Movie has been deleted successfuly!")
            }
        })
    })
}

module.exports = {GetAllMovies, GetMovieById, AddMovie, UpdateMovie, DeleteMovie}