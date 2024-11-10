import { NextFunction, RequestHandler } from "express"
import { formatResponse } from "../utils/formatResponse";
import env from "../config/env.config";
import { verifyToken } from "../utils/jwt";

const checkHeader: RequestHandler = (req, res, next) => {
    const contentType = req.headers['content-type'];
    const apiKey = req.headers['api-key'];

    if (contentType !== "application/json") {
        res.status(400).json(formatResponse(400, "Invalid Content Type", null))
        return
    }

    if (apiKey !== env.API_KEY) {
        res.status(401).json(formatResponse(401, "Invalid Api Key", null))
        return
    }

    return next();
}

const checkAuth: RequestHandler = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        res.json(formatResponse(401, "Unauthorized", null));
        return;
    }

    try {
        verifyToken(token, env.ACCESS_TOKEN_SECRET);
    }catch(err: any){
        res.status(500).json(formatResponse(500, err.message, null));
    }
    
    return next();
};

export { checkHeader, checkAuth }
