//const express = require('express'); //express import (프로젝트에서 express를 찾고 없으면  node_modules패키지에서 찾는다)
import express from "express"; //위의 최신코드
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {localsMiddleware} from "./middlewares";
import userRouter from "./routers/userRouter"; //userRouter에서 export를 default로 했으므로 이렇게 받아서 쓸 수 있다. 만약 export const userRouter 이런식으로 했다면  import { userRouter } from "/router" 이렇게 해야함
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();  //app변수를 선언해서 express실행

app.use(helmet()); // 어플리케이션이 더안전하도록 만들어줌
app.set("view engine", "pug"); //pug는 뷰엔진이다.
app.use(cookieParser()); //cookie를 전달받아서 사용할 수 있도록 만들어주는 미들웨어
app.use(bodyParser.json({extended: true})); //사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev")); //어플리케이션에서 발생하는 모든 일들을 logging
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); //use는 누군가 /user경로로 접속하면 이 userRouter전체를 전체를 사용하겠다는 의미이다.
app.use(routes.videos, videoRouter); // 이건 첫번쨰매배견수가 homt('/')과 다르게 videos로 되있다. 따라서 videos에 접근할려면 /videos/videos 이렇게 접근이 되는거다.

export default app; //app.js를 init.js에서 사용할 수 있게끔 export 해준다. , 누군가 이 파일을 불러올떄(import) app object를 주겠다는 의미이다.