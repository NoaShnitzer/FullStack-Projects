const { ObjectId } = require('bson')
const mongoose = require('mongoose')
const schema = mongoose.Schema

let CinemaSchema = new schema({
    UserName: String,
    Password: String
})

module.exports = mongoose.model('Users', CinemaSchema)

