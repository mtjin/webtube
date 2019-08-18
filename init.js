import  app from  "./app"; //app.js에서처럼 default로 export하면 이렇게 import할 수 있다.그에반해 router.js는 default가 아닌 userRouter로 export했으므로
//그에맞는 이름으로 import해야함

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);


app.listen(PORT , handleListening());