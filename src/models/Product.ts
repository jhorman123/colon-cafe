import mongoose, { Schema, model, models } from "mongoose";

export interface IProduct {
    _id?: string;
    name: string;
    description: string;
    price: string;
    image: string;
    category: string;
    isFeatured: boolean;
}

const ProductSchema = new Schema<IProduct>(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: String, required: true },
        image: { type: String, required: true },
        category: { type: String, required: true },
        isFeatured: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const Product = models.Product || model<IProduct>("Product", ProductSchema);

export default Product;
