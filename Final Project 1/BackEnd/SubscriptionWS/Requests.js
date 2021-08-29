let axios =  require('axios')
let MovieUtil = require('./Models/BL/MoviesBL')
let MemberUtil = require('./Models/BL/MembersBL')



//Members collection (in SubscriptionDB)
axios.get("https://jsonplaceholder.typicode.com/users").then(async(resp) => {
    for(let i=0; i<resp.data.length; i++){
        await MemberUtil.AddMember(resp.data[i])
    }
})
    

//Movies collection (in SubscriptionDB)
axios.get("https://api.tvmaze.com/shows").then(async(resp) => {
    for(let i=0; i<resp.data.length; i++){
        await MovieUtil.AddMovie(resp.data[i])
    }
})

module.exports




