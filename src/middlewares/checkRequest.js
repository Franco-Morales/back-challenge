
export const checkRequest = async(req, res, next) => {
    const ALLOWED = [
        "OPTIONS",
        "HEAD",
        "CONNECT",
        "GET",
        "POST",
        "PUT",
        "DELETE",
        "PATCH"
    ];

    if( !ALLOWED.includes( req.method) ) return res.send(405).json({ message: `${req.method} not allowed !`});

    next();
}