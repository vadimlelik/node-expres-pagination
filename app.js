import express from 'express'
import chalk from "chalk";
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/user.js'
import {initDataBase} from "./startUp/initDatabase.js";


const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

mongoose.set('strictQuery', false)


// routes

app.use('/api/user', userRoute)


const start = async () => {
    try {

        mongoose.connection.once('open', () => {
            initDataBase()
        })

        await mongoose.connect(`mongodb+srv://vadim:${process.env.USERPASSWORD}@cluster0.2msoxzy.mongodb.net/?retryWrites=true&w=majority`)
        app.listen(process.env.PORT, () => {
            console.log(chalk.bgMagenta('Server started'))
        })
    } catch (e) {
        console.log(chalk.bgBlue('Server failed'))

    }
}

start()