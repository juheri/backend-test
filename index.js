import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import adminRouter from "./routes/admin.js";

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use("/user", userRouter); //user routes
app.use("/admin", adminRouter); //admin routes

app.listen(process.env.PORT, async () => {
  console.log(`server running on port ${process.env.PORT}`);
});
