export const handle404Error = async (req, res, next) => {
    let resource = req.originalUrl.split("/v1").pop();

    return res.status(404).json({ message: `Resource: [ ${resource} ] not found` })
}