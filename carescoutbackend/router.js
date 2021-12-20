let express = require('express');
let router = new express.Router();
let providerRouter = require('./providerRouter');
require('serverless-http');



router.use('/provider', providerRouter)


module.exports = router