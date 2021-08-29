var cors = require('cors')
var bodyParser = require('body-parser')
var express = require('express')
var MembersController = require('./Controllers/MembersController')
var CinemaController = require('./Controllers/CinemaController')
var MoviesController = require('./Controllers/MoviesController')
var PermissionsJsonController = require('./Controllers/PermissionsJsonController')
var SubscriptionsController = require('./Controllers/SubscriptionsController')
var UsersJsonController = require('./Controllers/UsersJsonController')
require('./Configs/UsersDB')

var app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:true})).use(bodyParser.json())
app.use('/Users',CinemaController)
app.use('/Members',MembersController)
app.use('/Movies',MoviesController)
app.use('/PermissionsJson',PermissionsJsonController)
app.use('/Subscriptions',SubscriptionsController)
app.use('/UsersJson',UsersJsonController)


app.listen(8000,()=>{
    console.log("Server is UP");
})