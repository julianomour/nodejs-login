
var mongoose =  require('mongoose');
//  URI do MLab Connection
mongoose.connect('mongodb://admin:ADL4Fea55R9ZmPf@ds153593.mlab.com:53593/node-angular-login', {useCreateIndex: true,
useNewUrlParser: true});
mongoose.Promise = global.Promise;


module.exports = mongoose;