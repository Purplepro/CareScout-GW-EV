//this is where we create our CRUD Methods(Create, Read, Update, Delete)

let providerModel = require('./model/providerModel.js')
const express = require('express');



let controller = {
    create(request, response, err) {
        let provider = request.body

        if(response.status === 200 || 201) {
            providerModel
                .create(provider)
                .then(provider => response.json(provider))
            console.log('provider info is added', provider)

        } else if(err) {
            console.log(`error on: ${err}`)
        }
    },




    readById(request, response) {
        let id = request.params.id
        providerModel
            .findById(id)
            .then(provider => response.json(provider))
            console.log('is able to read by id')
    },

    async readAll(request, response) {
        const pageSize = 15;
        const page = parseInt(request.query.page || "0");
        const totalPages = await providerModel.countDocuments((request.query))
            await providerModel
            .find(request.query)
            .limit(pageSize).skip(pageSize * page) 
            .then(provider => response.json({totalPages: Math.ceil(totalPages / pageSize), provider}))
            console.log('able to read paginated provider data')
        },

    update(request, response) {
        let provider = JSON.parse(request.body)
        let id = request.params.id
        providerModel
            .findByIdAndUpdate(id, provider, {new: true})
            .then(provider => response.json(provider))
            console.log('is able update by id')
        },

    delete(request, response) {

        providerModel
            .findByIdAndDelete
            .then(() => response.json({ok : true}))
            console.log('is able to delete')
    }
}


module.exports = controller

