let member = require('../Schema/MembersSchema')

//GetAll
let GetAllMembers = () => {
    return new Promise((resolve, reject) => {
        member.find({}, (err, data) => {
            if (err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}


//GetById
let GetMemberById = (id) => {
    return new Promise((resolve, reject) => {
        member.findById(id, (err, data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })

}



//Create
let AddMember = (Member) => {
    return new Promise((resolve, reject) => {
        let newMember = new member({
            Name: Member.name,
            Email: Member.email,
            City: Member.address.city
        })
        newMember.save((err) => {
            if(err){
                reject(err)
            }else{
                resolve("Member has been added successfuly!")
            }
        })
    })
}


//Update
let UpdateMember = (id, Member) => {
    return new Promise((resolve, reject) => {
        member.findByIdAndUpdate(id, {
            name: Member.name,
            email: Member.email,
            city: Member.city
        }, (err) => {
            if(err){
                reject(err)
            }else{
                resolve("Member has been updated successfuly!")
            }
        })
    })
}



//Delete
let DeleteMember = (id) => {
    return new Promise((resolve, reject) => {
        member.findByIdAndDelete(id , (err) => {
            if(err){
                reject(err)
            }else{
                resolve("Member has been deleted successfuly!")
            }
        })
    })
}

module.exports = {GetAllMembers, GetMemberById, AddMember, UpdateMember, DeleteMember}