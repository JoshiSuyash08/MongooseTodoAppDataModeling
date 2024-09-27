import mongoose from "mongoose"
import { User } from "./user.models";
import { Product } from "./product.models";

//mini Schema
const orderItemsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },

    quantity: {
        type: Number,
        required: true
    }
})


//main Schema
const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
    },

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    orderItems: {
        type:[orderItemsSchema]
    },

    address: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"], //enum: choose from this only
        default: "PENDING"
    }

}, {timestamps: true});

export const Order = mongoose.model('Order', orderSchema);