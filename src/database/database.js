
var mongoose =  require('mongoose');
//  URI do MLab
mongoose.connect('mongodb://admin:ADL4Fea55R9ZmPf@ds215961.mlab.com:15961/buteco-app', {useCreateIndex: true,
useNewUrlParser: true});
mongoose.Promise = global.Promise;


module.exports = mongoose;