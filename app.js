//const express = require('express'); //옛날코드
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {localsMiddleware} from "./middlewares";
import userRouter from "./routers/userRouter"; //userRouter에서 export를 default로 했으므로 이렇게 받아서 쓸 수 있다. 만약 export const userRouter 이런식으로 했다면  import { userRouter } from "/router" 이렇게 해야함
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();  // express

//미들웨어
app.use(helmet()); // 어플리케이션이 더안전하도록 만들어줌
app.set("view engine", "pug"); //pug는 뷰엔진이다.
app.use(cookieParser()); //cookie를 전달받아서 사용할 수 있도록 만들어주는 미들웨어
app.use(bodyParser.json({extended: true})); //사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어
app.use(bodyParser.urlencoded({extended: true})); //json이 아닌 post형식으로올때 파서
app.use(morgan("dev")); //어플리케이션에서 발생하는 모든 일들을 logging
app.use(localsMiddleware);

//라우터
app.use(routes.home, globalRouter);  //  localhost::4000/ 에 접속하면 글로벌라우터로 넘어간다.
app.use(routes.users, userRouter); // localhost:4000/users/~~ 접속하면 유저라우터로 넘어간다.
app.use(routes.videos, videoRouter); // localhost:4000/videos/~~ 에 접속하면 비디오라우터로 넘어간다.

export default app; //다른 파일에서도 사용할 수 있게 export해준다.