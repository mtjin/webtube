import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/webtube",
    {
        useNewUrlParser: true,
        useFindAndModify: false
    });

const db = mongoose.connection;

const handleOpen = () => console.log("V Connected to DB");
const handleError = () => console.log(`X Error on DB connection: ${error}`);
db.once("open", handleOpen); //한번만 실행
db.on("error", handleError);