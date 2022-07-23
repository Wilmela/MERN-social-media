const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDb = require("./config/db");

const morgan = require("morgan");
const helmet = require("helmet");

const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");

const PORT = process.env.PORT || 8000;

const app = express();
connectDb();

//Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

//Routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
