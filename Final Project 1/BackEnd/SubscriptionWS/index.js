let cors = require('cors')
let bodyParser = require('body-parser')
let express = require('express')
let SubscriptionsController = require('./Controllers/SubscriptionsController')
let MoviesController = require('./Controllers/MoviesController')
let MembersController = require('./Controllers/MembersController')
require('./Configs/SubscriptionDB')
require('./Requests')

let app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:true})).use(bodyParser.json())
app.use('/Subscriptions',SubscriptionsController)
app.use('/Movies',MoviesController)
app.use('/Members',MembersController)




app.listen(8001,()=>{
    console.log("Server is UP");
})