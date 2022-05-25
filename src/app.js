import express from "express";
import cors from "cors";

import { api } from "./routes";
import { checkRequest } from "./middlewares/checkRequest";
import { handle404Error } from "./middlewares/error404";


const app = express();


// Settings

app.set("port", (+process.env.PORT || 3000) );


// Middlewares

app.use( cors({
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200
}) );
app.use( express.json() );
app.use( express.urlencoded({ extended: false }) );
app.use( checkRequest );


// Routes

app.get("/", (req, res) => res.json({ message: "Backend API REST" }));

for (const endpoint of api) {
    app.use(`/api/v1/${endpoint.resource}`, endpoint.route);
}

app.use(  handle404Error );


export { app };