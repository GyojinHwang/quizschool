import express from "express";
import morgan from "morgan";
import { AppDataSource } from "./data-source"
<<<<<<< HEAD
import studentRoutes from './routes/students';
import authRoutes from './routes/auth';
import gameRoutes from './routes/games';
import questionRoutes from './routes/questions';
import sampleRoutes from './routes/samples';
import formattedquestionRoutes from './routes/formattedquestions';
=======

import authRoutes from './routes/auth';
import subRoutes from './routes/subs';
import postRoutes from './routes/posts';
import voteRoutes from './routes/votes';
>>>>>>> 63a9535 (initial)
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
<<<<<<< HEAD
app.use("/api/auth", authRoutes) // routes폴더에 있는 auth.ts를 authRoutes라는 이름으로 사옹하겠다. api 주소는 /api/auth 다. 
app.use("/api/games", gameRoutes)
app.use("/api/questions", questionRoutes)
app.use("/api/users", userRoutes)
app.use("/api/students", studentRoutes)
app.use("/api/samples", sampleRoutes)
app.use("/api/formattedquestions", formattedquestionRoutes)

app.set('trust proxy',1)
=======
app.use("/api/auth", authRoutes)
app.use("/api/subs", subRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/votes", voteRoutes)
app.use("/api/users", userRoutes)
app.use("/api/students", userRoutes)

>>>>>>> 63a9535 (initial)

app.use(express.static("public"));

let port = 4000;
app.listen(port, async () => {
    console.log(`server running at ${process.env.APP_URL}`);

    AppDataSource.initialize().then(() => {
        console.log("database initialized")
    }).catch(error => console.log(error))

<<<<<<< HEAD
}) //서버 시작하는 함수? 
=======
})
>>>>>>> 63a9535 (initial)
