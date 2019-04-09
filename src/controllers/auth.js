const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config/auth');


function generateToken(params = {}){
    return jwt.sign(params, secret.secret, {
        expiresIn : 86400,
    });
}


module.exports.registerUser = async (ctx, next) => {
    const { name, email, password } = ctx.request.body;
    try {
        if (await User.findOne({ email })) {
            ctx.response.status = 400
            ctx.response.body = { error: 'User already exists' };
        }
        const user =await  User.create({ name, email, password } );
        user.password = undefined;
        ctx.response.status = 200
        ctx.response.body = {
            user, 
            token: generateToken({ id: user.id})
        };
        next()
    } catch (err) {
        ctx.response.status = 400
        ctx.response.body = { error: 'Erro ao criar usuario' };
        next()
    }

}

module.exports.authenticate = async (ctx, next) => {
    const { email, password } = ctx.request.body;
    const user = await User.findOne({ email }).select('+password');
  
    if ( !user ){
        ctx.response.status = 400
        ctx.response.body = { error: 'User not found' };
    }    
    
    if ( !await bcrypt.compare(password, user.password)){
        ctx.response.status = 400
        ctx.response.body = { error: 'Invalid Password' };
    }

    user.password = undefined; 

    ctx.response.status = 200
    ctx.response.body = { 
        user, 
        token: generateToken({ id: user.id})
    };
    next()

}