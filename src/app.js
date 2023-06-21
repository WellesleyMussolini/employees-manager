import express from "express";
import routes from "./routes.js";
import bodyParser from "body-parser";
import cors from "cors";
import { connection } from "./database/connection.js";

const app = express();

connection();

app.use(cors());
app.use(bodyParser.json());

// Middleware para adicionar headers à rota /schedules
app.use("/schedules", (req, res, next) => {
    res.setHeader("Header-Name", "Header-Value");
    next();
});

app.use(routes);

export default app;