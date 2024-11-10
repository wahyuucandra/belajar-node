import { Router, Request, Response } from "express";

const UserRouter = Router();

UserRouter.get("/user/:id", (req: Request, res: Response) => {
    const {id} = req.params
    res.send(`user ${id}`);
});

UserRouter.get("/about", (req: Request, res: Response) => {
    const url = req.url
    res.json({
        message: `We in ${url}`
    });
});

UserRouter.get("/user/:person", (req: Request, res: Response) => {
    const url = req.url
    res.json({
        message: `We in ${url}`
    });
});

UserRouter.get("/user/:id/posts", (req: Request, res: Response) => {
    const { id } = req.params
    res.json({
        message: `Get user id ${id} posts`
    });
});

export default UserRouter