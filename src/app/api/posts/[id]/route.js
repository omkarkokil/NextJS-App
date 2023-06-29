import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server"

export const GET = async (request, { params }) => {
    const { id } = params
    try {
        await connect()

        const post = await Post.findById(id)

        return new NextResponse(JSON.stringify(post), { status: 200 })

    } catch (error) {
        return new NextResponse("DB error", { status: 404 })
    }

}
export const DELETE = async (request, { params }) => {
    const { id } = params
    try {
        await connect()

        await Post.findByIdAndDelete(id)

        return new NextResponse("Post deleted succssfully", { status: 200 })

    } catch (error) {
        return new NextResponse("DB error", { status: 404 })
    }

}