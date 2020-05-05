const mongoose = require('mongoose');

try {
  mongoose.connect('mongodb://mongo:27017/dockernodedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log('Ok, database connected!');

} catch (err) {
  console.log(err);
}

mongoose.Promise = global.Promise;

module.exports = mongoose;
