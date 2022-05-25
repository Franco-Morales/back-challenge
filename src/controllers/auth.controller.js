import { User } from "../models";
import { createToken } from "../helpers/jwt";


const signUp = async (req, res) => {
    let { email, password, username } = req.body;

    try {
        const userDoc = new User({ email, password, username });
        await userDoc.save();

        res.status(201).json({ message: "User created" });
    } catch (error) {
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}


const loggIn = async (req, res) => {

    let { email, password } = req.body;


    try {
        const userDoc = await User.findOne({ email });

        if( !userDoc.comparePassword( password ) ) {
            return res.status(400).json({ 
                errors: { 
                    password : { msg: "Invalid Password" } 
                }
            });
        }

        const accessToken = createToken({ userId: userDoc._id });
        
        const { _id: id, username } = userDoc;


        res.json({ 
            data : { 
                accessToken,
                user: {
                    id,
                    username
                }
            } 
        });
    } catch (error) {
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}


export { signUp, loggIn };