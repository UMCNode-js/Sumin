import express from 'express';
import { tempRouter } from './src/routes/user.route.js';
import { specs } from './config/swagger.config.js';
import SwaggerUi from 'swagger-ui-express';
dotenv.config();    // .env 파일 사용 (환경 변수 관리)
const app = express();
const port = 3000;

// /
// app.use('/temp', tempRouter);

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// });


app.use(express.urlencoded({extended: false})); // 단순 객체 문자열 형태로 본문 데이터 해석
// router setting
//app.use('/temp', tempRouter);
app.use('/user', userRouter);


app.use((req, res, next) => {
    const err = new BaseError(status.NOT_FOUND);
    next(err);
});

app.use((err, req, res, next) => {
    // 템플릿 엔진 변수 설정
    res.locals.message = err.message;   
    // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; 
    res.status(err.data.status).send(response(err.data));
});

app.listen(port, () => {
		console.log(`Example app listening on port ${port}`);
});

