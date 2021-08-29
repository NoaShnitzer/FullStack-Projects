let mongoose = require('mongoose')
let schema = mongoose.Schema
const { ObjectId } = require('bson')

let MembersSchema = new schema({
    Name: String,
    Email: String,
    City: String
})


module.exports = mongoose.model('Members', MembersSchema)