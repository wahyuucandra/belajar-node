import express from "express";
import router from '../src/routes'
import { checkHeader } from "./middlewares";

const app = express();
const port = 3000;

// app.use(express.json());

// app.get("/user/:id", (req: Request, res: Response) => {
//     const {id} = req.params
//   res.send(`user ${id}`);
// });

app.use(express.json())
app.use(express.static("public"));
app.use(checkHeader)
app.use("/", router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
