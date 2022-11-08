import express from "express";
import dotenv from "dotenv";
dotenv.config();

import employerRouter from "./routes/employersRoute";

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/employer", employerRouter);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
