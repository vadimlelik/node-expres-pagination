const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require('./users')
const paginatedResults = require('./middleweare/paginatedResults.js')

const dotenv = require('dotenv')


dotenv.config()


const DB_NAME = process.env.DB_NAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_USER = process.env.DB_USER
const PORT = process.env.PORT


const start = async () => {
    const db = mongoose.connection

    db.once('open', async () => {
        if (await User.countDocuments().exec() > 0) return

        Promise.all([User.create({name: 'User 1'}), User.create({name: 'User 2'}), User.create({name: 'User 3'}), User.create({name: 'User 4'}), User.create({name: 'User 5'}), User.create({name: 'User 6'}), User.create({name: 'User 7'}), User.create({name: 'User 8'}), User.create({name: 'User 9'}), User.create({name: 'User 10'}), User.create({name: 'User 11'}), User.create({name: 'User 12'})]).then(() => console.log('Added Users'))
    })

    await mongoose.connect(`mongodb://${DB_USER}:j8LPDxHW3fsikwJOvW3T@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/${DB_NAME}?replicaSet=rs0`)

    app.listen(PORT || 3002, () => {
        console.log(`Server started ${PORT}`)
    })

    try {

    } catch (e) {
        console.log(e)
    }

}


app.get('/users', paginatedResults(User), (req, res) => {
    res.json(res.paginatedResults)
})

start()