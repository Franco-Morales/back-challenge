import { model, Schema } from "mongoose";
import dayjs from "dayjs";


const CategorySchema = new Schema({
    name: String,
    createdAt: {
        type: Date,
        default: dayjs()
    }
},{
    timestamps: false
});


export default model("Category", CategorySchema);