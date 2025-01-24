const accountRouter = require('./account.router');

const ErrorHandle = require('../middleware/error.handle');
const categoryRouter = require('./category.router');
const foodRouter = require('./food.router');
const authRouter = require('./auth.router');

module.exports = (app) => {
  app.use('/api/auth', authRouter);
  app.use('/api/accounts', accountRouter);
  app.use('/api/categories', categoryRouter);
  app.use('/api/foods', foodRouter);

  app.use(ErrorHandle);
};
