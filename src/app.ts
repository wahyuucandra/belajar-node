import express, { Request, Response, NextFunction} from "express";
import router from '../src/routes'
import { checkHeader } from "./middlewares";
import { loggerWinston, loggerMoreAdvance } from "./config/winston.config";
import { errorHandler } from "./utils/error";

const app = express();
const port = 3000;

// app.use(express.json());

// app.get("/user/:id", (req: Request, res: Response) => {
//     const {id} = req.params
//   res.send(`user ${id}`);
// });

app.use(express.json())
app.use(express.static("public"));
app.use((req: Request, res: Response, next: NextFunction) => {
  // loggerMoreAdvance.info(`${req.method} ${req.url} - Winston`)
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    loggerMoreAdvance.info(`${req.method} ${req.url} - ${duration}ms`);
  });

  next()
})
app.use(checkHeader)
app.use("/", router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
