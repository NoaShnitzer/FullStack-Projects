const express = require ('express')
const MembersBL = require ('../Models/BL/MembersBL')

const router = express.Router()

//GetAll
router.route('/').get(async(req, resp) => {
    let members = await MembersBL.GetAllMembers()
    return resp.json(members)
})


//GetByID
router.route('/:id').get(async(req, resp) => {
    let id = req.params.id
    let member = await MembersBL.GetMemberById(id)
    return resp.json(member)
})


//Create
router.route('/').post(async(req, resp) => {
    let newMember = req.body
    let newMemberToAdd = await MembersBL.AddMember(newMember)
    return resp.json(newMemberToAdd)
})


//Update
router.route('/:id').put(async(req, resp) => {
    let id = req.params.id
    let newData = req.body
    let memberToUpate = await MembersBL.UpdateMember(id, newData)
    return resp.json(memberToUpate)
})


//Delete
router.route('/:id').delete(async(req, resp) => {
    let id = req.params.id
    let memberToDelete = await MembersBL.DeleteMember(id)
    return resp.json(memberToDelete)
})



module.exports = router
