require('./database.js');
let providerModel = require('./model/providerModel');
let providerJson = require('./providerJson.json');


providerModel.deleteMany({}) 
    .then(() => {
        providerModel.create(providerJson)
            .then(provider => {
                
            })
    })


