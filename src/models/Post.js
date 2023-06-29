import mongoose from "mongoose";

const { Schema } = mongoose
const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    content: {
        type: String,
    },
    username: {
        type: String,
        required: true
    }
}, { timestanps: true });


export default mongoose.models.Post || mongoose.model("Post", postSchema);