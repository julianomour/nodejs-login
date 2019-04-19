const userCtrl = require('../controllers/auth')

module.exports = ({userRouter}) => {
 
  userRouter.post('/register', async (ctx, next ) => {
    await userCtrl.registerUser(ctx, next);
  })

  userRouter.post('/authenticate', async (ctx, next ) => {
    await userCtrl.authenticate(ctx, next);
  })
}