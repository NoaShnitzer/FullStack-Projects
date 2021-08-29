const express = require('express')
const router = express.Router()
const UsersBL = require('../Models/BL/UsersJsonBL')

//GetAll
router.route('/').get(async(req, resp) => {
    let users = await UsersBL.GetAllJsonUsers()
    return resp.json(users)
})


//GetByID
router.route('/:id').get(async(req, resp) => {
    let id = req.params.id
    let user = await UsersBL.GetJsonUserById(id)
    return resp.json(user)
})


//Create
router.route('/').post(async(req, resp) => {
    let obj = req.body
    console.log(obj)
    let NewUser = await UsersBL.AddJsonUser(obj)
    return resp.json(NewUser)
})


//Update
router.route('/:id').put(async(req, resp) => {
    let id = req.params.id
    let obj = req.body
    let UpdatedUser = await UsersBL.UpdateJsonUser(id, obj)
    return resp.json(UpdatedUser)
})


//Delete
router.route('/:id').delete(async(req, resp) => {
    let id = req.params.id
    let DeletedUser = await UsersBL.DeleteJsonUser(id)
    return resp.json(DeletedUser)
})



module.exports = router