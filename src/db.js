import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://tesisdev:tesisdev@shiroclean.2pnxskg.mongodb.net/");
        console.log(">>> DB is connected")
    } catch (error) {
        console.log(error);
    }
};