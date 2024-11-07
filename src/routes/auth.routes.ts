import { Router } from "express";
import { 
    CLogin, 
    CRefreshToken, 
    CRegister 
} from "../controllers/auth.controller";


const userRouter = Router();

userRouter.post("/login", CLogin);
userRouter.post("/register", CRegister);
userRouter.post("/refresh-token", CRefreshToken);

export default userRouter;