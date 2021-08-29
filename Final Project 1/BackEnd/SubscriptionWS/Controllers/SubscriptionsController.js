const express = require ('express')
const SubscriptionBL = require ('../Models/BL/SubscriptionsBL')

const router = express.Router()

//GetAll
router.route('/').get(async(req, resp) => {
    let subscriptions = await SubscriptionBL.GetAllSubscriptions()
    return resp.json(subscriptions)
})



//GetByID
router.route('/:id').get(async(req, resp) => {
    let id = req.params.id
    let subscription = await SubscriptionBL.GetSubscriptionById(id)
    return resp.json(subscription)
})



//Create
router.route('/').post(async(req, resp) => {
    let newSubscription = req.body
    let newSubscriptionToAdd = await SubscriptionBL.AddSubscription(newSubscription)
    return resp.json(newSubscriptionToAdd)
})



//Update
router.route('/:id').put(async(req, resp) => {
    let id = req.params.id
    let newData = req.body
    let subscriptionToUpdate = await SubscriptionBL.UpdateSubscription(id, newData)
    return resp.json(subscriptionToUpdate)
})



//Delete
router.route('/:id').delete(async(req, resp) => {
    let id = req.params.id
    let subcriptionToDelete = await SubscriptionBL.DeleteSubscription(id)
    return resp.json(subcriptionToDelete)
})


module.exports = router