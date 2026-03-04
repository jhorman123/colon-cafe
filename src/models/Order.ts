import mongoose, { Schema, model, models } from "mongoose";

export interface IOrderItem {
    productId: string;
    name: string;
    price: string;
    quantity: number;
    image: string;
}

export interface IOrder {
    customerDetails: {
        name: string;
        email: string;
        address: string;
    };
    items: IOrderItem[];
    total: number;
    status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
    createdAt: Date;
}

const OrderSchema = new Schema<IOrder>(
    {
        customerDetails: {
            name: { type: String, required: true },
            email: { type: String, required: true },
            address: { type: String, required: true },
        },
        items: [
            {
                productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
                name: { type: String, required: true },
                price: { type: String, required: true },
                quantity: { type: Number, required: true },
                image: { type: String, required: true },
            },
        ],
        total: { type: Number, required: true },
        status: {
            type: String,
            enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
            default: "pending",
        },
    },
    { timestamps: true }
);

const Order = models.Order || model<IOrder>("Order", OrderSchema);

export default Order;
