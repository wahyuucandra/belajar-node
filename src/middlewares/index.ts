import { RequestHandler } from "express"
import { formatResponse } from "../utils/formatResponse";
import env from "../config/env.config";

const checkHeader:RequestHandler = ( req, res, next ) => {
    const contentType = req.headers['content-type'];
    const apiKey = req.headers['api-key'];

    if(contentType !== "application/json"){
        res.status(400).json(formatResponse(400, "Invalid Content Type", null))
        return
    }

    if(apiKey !== env.API_KEY){
        res.status(401).json(formatResponse(401, "Invalid Api Key", null))
        return
    }

    return next();
}

export default checkHeader