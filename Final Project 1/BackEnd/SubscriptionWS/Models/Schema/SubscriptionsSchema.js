let mongoose = require('mongoose')
let schema = mongoose.Schema
let axios = require('axios')
const { ObjectId } = require('bson')


let SubscriptionsSchema = new schema({
    MemberId: ObjectId,
    Movies: [
        {
            MovieId: ObjectId,
            SubDate: Date
        }
    ]
})

module.exports = mongoose.model('Subscriptions', SubscriptionsSchema)