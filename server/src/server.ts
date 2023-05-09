import express from "express";
import morgan from "morgan";
import { AppDataSource } from "./data-source"
import studentRoutes from './routes/students';
import authRoutes from './routes/auth';
import gameRoutes from './routes/games';
import questionRoutes from './routes/questions';
import sampleRoutes from './routes/samples';
import formattedquestionRoutes from './routes/formattedquestions';
import userRoutes from './routes/users';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

const app = express();

const origin = process.env.ORIGIN;
app.use(cors({
    origin,
    credentials: true
}))
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
dotenv.config();

app.get("/", (_, res) => res.send("running"));
app.use("/api/auth", authRoutes)
app.use("/api/games", gameRoutes)
app.use("/api/questions", questionRoutes)
app.use("/api/users", userRoutes)
app.use("/api/students", studentRoutes)
app.use("/api/samples", sampleRoutes)
app.use("/api/formattedquestions", formattedquestionRoutes)

app.set('trust proxy',1)

app.use(express.static("public"));

let port = 4000;
app.listen(port, async () => {
    console.log(`server running at ${process.env.APP_URL}`);

    AppDataSource.initialize().then(() => {
        console.log("database initialized")
    }).catch(error => console.log(error))

})
