import { model, Schema } from "mongoose";
import { genSaltSync, compareSync, hashSync } from "bcrypt";
import dayjs from "dayjs";




const UserSchema = new Schema({
    email: String,
    username: String,
    password: String,
    createdAt: {
        type: Date,
        default: dayjs()
    }
},{
    timestamps: false
});


UserSchema.pre("save", function (next) {
    try {
        let salt = genSaltSync(10);
        this.password = hashSync(this.password, salt);

        next();
    } catch (error) {
        console.error(`User pre[ save ] error -> ${error.message}`);
    }
});

UserSchema.methods.comparePassword = function(pwdInput) {
    return compareSync(pwdInput, this.password);
}


export default model("User", UserSchema);