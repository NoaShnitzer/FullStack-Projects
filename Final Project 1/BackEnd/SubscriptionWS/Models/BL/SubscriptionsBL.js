let subscription = require('../Schema/SubscriptionsSchema')

//GetAll
let GetAllSubscriptions = () => {
    return new Promise((resolve,reject) => {
        subscription.find({}, (err, data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}



//GetById
let GetSubscriptionById = (id) => {
    return new Promise((resolve, reject) => {
        subscription.findById(id, (err, data) => {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}


//Create
let AddSubscription =  (Subscription) => {
    return new Promise((resolve, reject) => {
        let newSubscription = new subscription({
            MemberId: Subscription.memberId,
            Movies: Subscription.movies
        })
        newSubscription.save((err) => {
            if(err){
                reject(err)
            }else{
                resolve("Subscription has been added successfuly!")
            }
        })
    })
}


//Update
let UpdateSubscription = (id, Subscription) => {
    return new Promise((resolve, reject) => {
        subscription.findByIdAndUpdate(id,{
            MemberId: Subscription.MemberId,
            Movies: Subscription.Movies
        }, (err) => {
            if(err){
                reject(err)
            }else{
                resolve("Subscription has been updated successfuly!")
            }
        })
    })

}


//Delete
let DeleteSubscription = (id) => {
    return new Promise((resolve, reject) => {
        subscription.findByIdAndDelete((err) => {
            if(err){
                reject(err)
            }else{
                resolve("Subscription has been deleted successfuly!")
            }
        })
    })
} 



module.exports = {GetAllSubscriptions, GetSubscriptionById, AddSubscription, UpdateSubscription, DeleteSubscription}