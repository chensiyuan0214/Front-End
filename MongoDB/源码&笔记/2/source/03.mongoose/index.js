require("./tools/conn_mongo");
var Student = require("./models/students");

console.log(Student);

Student.find({}, function (err, docs) {
              if(!err){
                        console.log(docs);
              }
});