const jsonfile = require('jsonfile')
let fs = require('fs')
const {resolve} = require ('path')
const { Console } = require('console')




const GetAllJsonUsers = () => {
    return new Promise((resolve, reject) => {
        jsonfile.readFile('./JsonFiles/Users.json', (err, data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}



const GetJsonUserById = (id) => {
    return new Promise((resolve, reject) => {
        jsonfile.readFile('./JsonFiles/Users.json', (err, data) => {
            if(err){
                reject(err)
            }else{
                let FilterById = data.Users.filter(item => item._id == id)
                resolve(FilterById[0])
            }
        })
    })
}



const AddJsonUser = (obj) => {
    let users = GetAllJsonUsers()
    let resp = "User already in the system"
    let newUser = users.filter(item => item.id == obj.id)
    if (newUser == true){
        console.log(resp)
    }else if(newUser == false){
        jsonFile.users.push(obj)
        resp = "User has been added"
    }
    return new Promise((resolve, reject) => {
        fs.readFile('./JsonFiles/Users.json', (err,data) => {
            if(err){
                reject(err)
            }else{
                data.push(obj)
                fs.writeFile('./JsonFiles/Users.json', data , (err) => {
                    if(err){
                        reject(err)
                    }else{
                        resolve("OK")
                    }
                })
            }
        })
        
    })
}



const UpdateJsonUser = (id, obj) => {
    let UpdatedUserArray = []
    let users = GetAllJsonUsers()
    users.map(item => {
        if(item.id == id){
            item = obj
        }
        UpdatedUserArray.push(item)
        return UpdatedUserArray
    })
    users = UpdatedUserArray;
    return new Promise((resolve, reject) => {
        fs.readFile('./JsonFiles/Users.json', (err,data) => {
            if(err){
                reject(err)
            }else{
                data.push(obj)
                fs.writeFile('./JsonFiles/Users.json', data, (err) => {
                    if(err){
                        reject(err)
                    }else{
                        resolve("User has been updated")
                    }
                })
            }
        })
    })
}



const DeleteJsonUser = (id) => {
    DeletedUserArray =[]
    let users = GetAllJsonUsers()
    users.map(item => {
        if(item.id == id){
            DeletedUserArray.pop(item)
        }
        return DeletedUserArray
    })
    users = DeletedUserArray
    return new Promise((resolve, reject) => {
        fs.readFile('./JsonFiles/Users.json', (err,data) => {
            if(err){
                reject(err)
            }else{
                data.pop(item)
                fs.writeFile('./JsonFiles/Users.json', data, (err) => {
                    if(err){
                        reject(err)
                    }else{
                        resolve("User has been deleted")
                    }
                })
            }
        })
    })
}




module.exports = {GetAllJsonUsers, GetJsonUserById, AddJsonUser, UpdateJsonUser, DeleteJsonUser}

    
    
    