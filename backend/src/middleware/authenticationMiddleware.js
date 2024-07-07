import jwt from "jsonwebtoken"

export const requireAuth = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization){
        res.status(401).json({error: "No authorization token"});
    }

    const token = authorization.split(' ')[1];
    try {
        const {id} = jwt.verify(token, process.env.SECRET);
        req.userId = id;
    } catch (error) {
        console.log(error);
        res.status(401).json("Request is not authorized");
    }
    
    next();
}