import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post";

export const GET = async (req) => {

    try {

        const url = new URL(req.url);
        const username = url.searchParams.get("username")
        await connect();

        const posts = await Post.find(username && { username })

        return new NextResponse(JSON.stringify(posts), { status: 404 })

    } catch (error) {
        return new NextResponse("DB error", { status: 404 })
    }

}

export const POST = async (req) => {
    const body = await req.json();

    const newPost = new Post(body);

    try {
        await connect();
        await newPost.save()

        return new NextResponse("Post created successfully", { status: 201 })
    } catch (error) {
        console.log(error);
    }
}