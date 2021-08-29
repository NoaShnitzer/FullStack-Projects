const jsonfile = require('jsonfile')
let fs = require('fs')
const {resolve} = require ('path')




const GetAllPermissions = () => {
    return new Promise((resolve, reject) => {
        jsonfile.readFile('./JsonFiles/Permissions.json', (err, data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}



const GetPermissionById = (id) => {
    return new Promise((resolve, reject) => {
        jsonfile.readFile('./JsonFiles/Permissions.json', (err, data) => {
            if(err){
                reject(err)
            }else{
                let FilterById = data.Permissions.filter(item => item._id == id)
                resolve(FilterById[0])
            }
        })
    })
}



const AddPermission = (obj) => {
    let permissions = GetAllPermissions()
    let resp = "Permission already in the system"
    let newPermission = permissions.filter(item => item.id == obj.id)
    if(newPermission == true){
        console.log(resp)
    }else if(newPermission == false){
        permissions.push(obj)
        resp = "Permission has been added"
    }
    return new Promise((resolve, reject) => {
        fs.readFile('./JsonFiles/Permissions.json', (err,data) => {
            if(err){
                reject(err)
            }else{
                data.push(obj)
                fs.writeFile('./JsonFiles/Permissions.json', data , (err) => {
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



const UpdatePermission = (id, obj) => {
    let UpdatedPermissionArray = []
    let permissions = GetAllPermissions()
    permissions.map(item => {
        if(item.id == id){
            item = obj
        }
        UpdatedPermissionArray.push(item)
        return UpdatedPermissionArray
    })
    permissions = UpdatedPermissionArray;
    return new Promise((resolve, reject) => {
        fs.readFile('./Users.json', (err,data) => {
            if(err){
                reject(err)
            }else{
                data.push(obj)
                fs.writeFile('./JsonFiles/Permissions.json', data, (err) => {
                    if(err){
                        reject(err)
                    }else{
                        resolve("Permission has been updated")
                    }
                })
            }
        })
    })
}



const DeletePermission = (id) => {
    let DeletedPermissionArray = []
    let permissions = GetAllPermissions()
    permissions.map(item => {
        if(item.id == id){
            DeletedPermissionArray.pop(item)
        }
        return DeletedPermissionArray
    })
    permissions = DeletedPermissionArray
    return new Promise((resolve, reject) => {
        fs.readFile('./JsonFiles/Permissions.json', (err,data) => {
            if(err){
                reject(err)
            }else{
                data.pop(item)
                fs.writeFile('./Permissions.json',data, (err) => {
                    if(err){
                        reject(err)
                    }else{
                        resolve("Permission has been deleted")
                    }
                })
            }
        })
    })
}




module.exports = {GetAllPermissions, GetPermissionById, AddPermission, UpdatePermission, DeletePermission}