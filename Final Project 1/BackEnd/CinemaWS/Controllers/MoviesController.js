const express = require('express')
const router = express.Router()

const axios = require('axios')

//GetAll
router.route('/').get(async(req, resp) => {
    let movies = await axios.get(`http://localhost:8001/Movies`)
    return resp.json(movies.data)
})

//GetByID
router.route('/:id').get(async(req, resp) => {
    let id = req.params.id
    let movie = await axios.get(`http://localhost:8001/Movies/${id}`)
    return resp.json(movie.data)
})


//Create
router.route('/').post(async(req, resp) => {
    let obj = req.body
    let answer = await axios.post(`http://localhost:8001/Movies`, obj)
    return resp.json(ansswer.data)
})


//Update
router.route('/:id').put(async(req, resp) => {
    let id = req.params.id
    let obj = req.body
    let answer = await axios.put(`http://localhost:8001/Movies/${id}`, obj)
    return resp.json(answer.data)
})


//Delete
router.route('/:id').delete(async(req, resp) => {
    let id = req.params.id
    let answer = await axios.delete(`http://localhost:8001/Movies/${id}`)
    return resp.json(answer.data)
})



module.exports = router