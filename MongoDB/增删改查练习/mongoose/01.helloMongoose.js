var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/my_test', {useNewUrlParser: true});
console.log(mongoose);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected")
});

mongoose.disconnect();