// temp.route.js

export const tempRouter = express.Router();

tempRouter.get('/test', tempTest);

// temp.route.js

tempRouter.get('/exception/:flag',tempException);