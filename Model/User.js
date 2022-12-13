import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    title: {
        type: String
    }, albumId: {
        type: Number
    }, url: {
        type: String
    }, thumbnailUrl: {
        type: String
    }


})


export default mongoose.model('User', UserSchema)