import { verifyToken } from "../helpers/jwt";


export const checkAuth = async (req, res, next) => {
    const token = req.headers['authorization'].split(' ').pop();
    
    if( !token ) return res.sendStatus(401);

    try {
        const { userId } = verifyToken(token);

        req.user = { id: userId };

        next();
    } catch (error) {
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}