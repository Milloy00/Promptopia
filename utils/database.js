import mongoose from 'mongoose'
import { StrictMode } from 'react'

let isConnected = true

export const connectToDB = async () => {
    mongoose.set('StrictQuery', true)

    if(isConnected) {
        console.log('mongoDB is already connected')
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true 

        console.log('MongoDB is conected')

    } catch (error) {
        console.log(error)
    }

}