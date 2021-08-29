let mongoose = require('mongoose')
let schema = mongoose.Schema
let axios = require('axios')
const { ObjectId } = require('bson')


let MoviesSchema = new schema({
    Name: String,
    Geners: [String], 
    Image: String,
    Premiered: Date,
})


module.exports = mongoose.model('Movies', MoviesSchema)