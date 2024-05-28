import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        tipoPrendas: {
            type: String,
            required: true,
        },
        ubicacionRecojo:  {
            type: String,
            required: true,
        },
        ubicacionEntrega:  {
            type: String,
            required: true,
        },
        peso: {
            type: Number,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true
    },
);

export default mongoose.model("Order", orderSchema);