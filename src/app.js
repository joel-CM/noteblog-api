import express from "express";
import morgan from "morgan";
import routes from "./routes/index.js";
import cors from "cors";

const app = express();
// ! middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));

// ! settings
app.set("port", process.env.PORT || 3001);

//! rotues
app.use("/", routes);

export default app;
