const express = require('express')
const router = express.Router()
const CinemaBL = require('../Models/BL/CinemaBL')
const UsersBL = require('../Models/BL/UsersJsonBL')


//GetAll
router.route('/').get(async(req, resp) => {
    let users = await CinemaBL.GetAllUsers()
    return resp.json(users)
})



//GetByID
router.route('/:id').get(async(req, resp) => {
    let id = req.params.id
    let user = await CinemaBL.GetUserById(id)
    return resp.json(user)
})


//Create
router.route('/').post(async(req, resp) => {
    let newUser = req.body
    let newUserToAdd = await CinemaBL.AddUser(newUser)
    return resp.json(newUserToAdd)
})


//Update
router.route('/:id').put(async(req, resp) => {
    let id = req.params.id
    let newData = req.body
    let userToUpate = await CinemaBL.UpdateUser(id, newData)
    return resp.json(userToUpate)
})


//Delete
router.route('/:id').delete(async(req, resp) => {
    let id = req.params.id
    let userToDelete = await CinemaBL.DeleteUser(id)
    return resp.json(userToDelete)
})



module.exports = router
