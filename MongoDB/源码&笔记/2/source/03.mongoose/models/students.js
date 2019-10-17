
var  mongoose = require("mongoose");

var Schema = mongoose.Schema;


var stuSchema = new Schema({

  name:String,
  age:Number,
  gender:{
    type:String,
    default:"female"
  },
  address:String

});

/*
定义模型
 */
var stuModel  =  mongoose.model("student", stuSchema);
exports.model = stuModel;

module.exports =  stuModel;
//直接把 模型对象赋值 给model
