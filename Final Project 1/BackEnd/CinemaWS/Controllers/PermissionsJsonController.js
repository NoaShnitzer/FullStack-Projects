const express = require('express')
const router = express.Router()
const PermissionsBL = require('../Models/BL/PermissionsJsonBL')

//GetAll
router.route('/').get(async(req, resp) => {
    let permissions = await PermissionsBL.GetAllPermissions()
    return resp.json(permissions)
})


//GetByID
router.route('/:id').get(async(req, resp) => {
    let id = req.params.id
    let permission = await PermissionsBL.GetPermissionById(id)
    return resp.json(permission)
})


//Create
router.route('/').post(async(req, resp) => {
    let obj = req.body
    let NewPermission = await PermissionsBL.AddPermission(obj)
    return resp.json(NewPermission)
})


//Update
router.route('/:id').put(async(req, resp) => {
    let id = req.params.id
    let obj = req.body
    let UpdatedPermission = await PermissionsBL.UpdatePermission(id, obj)
    return resp.json(UpdatedPermission)
})


//Delete
router.route('/:id').delete(async(req, resp) => {
    let id = req.params.id
    let DeletedPermission = await PermissionsBL.DeletePermission(id)
    return resp.json(DeletedPermission)
})



module.exports = router