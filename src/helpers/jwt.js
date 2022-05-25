import { verify } from "jsonwebtoken";
import { sign } from "jsonwebtoken"


const createToken = ( payload ) => {
    return sign(payload, process.env.SECRET_KEY, { expiresIn: "8h" });
}


const verifyToken = ( token ) => {
    return verify( token, process.env.SECRET_KEY);
}


export { createToken, verifyToken };