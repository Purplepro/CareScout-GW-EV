let mongoose = require('mongoose'); //importing mongoose so we can create our schema


let providerSchema = new mongoose.Schema([ //creating our schema to use as a set of rules for our json data and so we can use our data on the frontend
    {
        
        FederalProviderNumber: String,
        ProviderName: {type: String, uppercase: true},
        ProviderAddress: {type: String, uppercase: true},
        ProviderCity: {type: String, uppercase: true},
        ProviderState: {type: String, uppercase: true},
        ProviderZipCode: Number,
        ProviderPhoneNumber: Number

    }
])

let Provider = mongoose.model('provider', providerSchema) //telling mongoose that this is our model

module.exports = Provider //letting node know that we want to export this model

