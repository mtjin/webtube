import "./db";
import  app from  "./app"; //app.js에서 exprees()를 export한걸 받아서 사용한다.

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);


app.listen(PORT , handleListening());