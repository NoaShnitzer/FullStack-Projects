const express = require ('express')
const MoviesBL = require ('../Models/BL/MoviesBL')

const router = express.Router()

//GetAll
router.route('/').get(async(req, resp) => {
    let movies = await MoviesBL.GetAllMovies()
    return resp.json(movies)
})



//GetByID
router.route('/:id').get(async(req, resp) => {
    let id = req.params.id
    let movie = await MoviesBL.GetMovieById(id)
    return resp.json(movie)
})



//Create
router.route('/').post(async(req, resp) => {
    let newMovie = req.body
    let newMovieToAdd = await MoviesBL.AddMovie(newMovie)
    return resp.json(newMovieToAdd)
})



//Update
router.route('/:id').put(async(req, resp) => {
    let id = req.params.id
    let newData = req.body
    let movieToUpdate = await MoviesBL.UpdateMovie(id, newData)
    return resp.json(movieToUpdate)
})



//Delete
router.route('/:id').delete(async(req, resp) => {
    let id = req.params.id
    let movieToDelete = await MoviesBL.DeleteMovie(id)
    return resp.json(movieToDelete)
})


module.exports = router
