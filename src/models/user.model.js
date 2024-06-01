import mongoose from "mongoose";

// user: {
//     username: string,
//     email: string,
//     password: string,
//     role: string,
//     ruc: number,
//     phone: number,
//     direction: string,
// }

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    },
    ruc: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    direction: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)