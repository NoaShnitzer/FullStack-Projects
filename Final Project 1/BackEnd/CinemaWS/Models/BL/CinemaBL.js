let user = require('../Schema/CinemaSchema')
const jsonfile = require('jsonfile')
let fs = require('fs')

//GetAll
let GetAllUsers = () => {
    return new Promise((resolve, reject) => {
        user.find({}, (err, data) => {
            if (err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })

}




//GetById
let GetUserById = (id) => {
    return new Promise((resolve, reject) => {
        user.findById(id, (err, data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })

}



//Create
let AddUser = (User) => {
    //ךהדפיס את הפרמטר שמגיע מבקליינט
    //save to database
    //save to user json file
    //save to Permissions json file
    return new Promise((resolve, reject) => {
        let newUser = new user({
            UserName: User.userName,
            Password: User.password
        })

        newUser.save((err) => {
            if(err){
                reject(err)
            }else{
                resolve("User has been added successfuly!")
            }
        })
    })
}


//Update
let UpdateUser = (id, User) => {
    return new Promise((resolve, reject) => {
        user.findByIdAndUpdate(id, {
           UserName: User.userName,
           Password: User.password
        }, (err) => {
            if(err){
                reject(err)
            }else{
                resolve("User has been updated successfuly!")
            }
        })
    })
}



//Delete
let DeleteUser = (id) => {
    return new Promise((resolve, reject) => {
        user.findByIdAndDelete(id , (err) => {
            if(err){
                reject(err)
            }else{
                resolve("User has been deleted successfuly!")
            }
        })
    })
}

module.exports = {GetAllUsers, GetUserById, AddUser, UpdateUser, DeleteUser}