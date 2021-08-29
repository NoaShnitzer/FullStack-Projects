const express = require('express')
const router = express.Router()
const axios = require('axios')

//GetAll
router.route('/').get(async(req, resp) => {
    let subscriptions = await axios.get(`http://localhost:8001/Subscriptions`)
    return resp.json(subscriptions.data)
})


//GetByID
router.route('/:id').get(async(req,resp) => {
    let id = req.params.id
    let subscription = await axios.get(`http://localhost:8001/Subscriptions/${id}`)
    return resp.json(subscription.data)
})


//Create
router.route('/').post(async(req, resp) => {
    let obj = req.body
    let answer = await axios.post(`http://localhost:8001/Subscriptions`, obj)
    return resp.json(answer.data)
})


//Update
router.route('/:id').put(async(req, resp) => {
    let id = req.params.id
    let obj = req.body
    let answer = await axios.put(`http://localhost:8001/Subscriptions${id}`, obj)
    return resp.json(answer.data)
})


//Delete
router.route('/:id').delete(async(req, resp) => {
    let id = req.params.id
    let answer = await axios.delete(`http://localhost:8001/Subscriptions/${id}`)
    return resp.json(answer.data)
})



module.exports = router