import { model, Schema, Types } from "mongoose";
import dayjs from "dayjs";

import { CategorySchema } from "./category";


const VideoGameSchema = new Schema({
    title: String,
    developer: String,
    description: String,
    characters: Array,
    release: Date,
    cover: String,
    category: {
        type: Types.ObjectId,
        ref: "Category"
    },
    createdAt: {
        type: Date,
        default: dayjs()
    }
},{
    timestamps: false
});


VideoGameSchema.pre("save", function (next) {
    this.release = dayjs(this.release);
    next();
});

VideoGameSchema.pre("findOneAndUpdate", function(next) {
    this._update.release = dayjs(this._update.release);
    next()
})


export default model("Videogame", VideoGameSchema);