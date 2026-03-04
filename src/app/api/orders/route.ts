import { NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import Order from "@/models/Order";

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();

        const { customerDetails, items, total } = body;

        if (!customerDetails || !items || items.length === 0) {
            return NextResponse.json({ error: "Missing order details" }, { status: 400 });
        }

        const newOrder = new Order({
            customerDetails,
            items,
            total,
            status: "pending",
        });

        await newOrder.save();

        return NextResponse.json({
            message: "Order created successfully",
            orderId: newOrder._id
        }, { status: 201 });

    } catch (error) {
        console.error("Order API Error:", error);
        return NextResponse.json({ error: "Failed to process order" }, { status: 500 });
    }
}
