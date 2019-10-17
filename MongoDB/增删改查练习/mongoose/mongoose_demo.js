var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/my_test', {useNewUrlParser: true});
// console.log(mongoose);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected")
});
//创建schema对象
var mongoose = require('mongoose');

//将mongoose.Schema 赋值给一个变量
var Schema = mongoose.Schema;

//创建模式对象
var stuSchema = new Schema({
      name: String,
      age: Number,
      gender: {
              type: String,
              default:"female"
      },
      address: String
});

// 通过schema来 创建model
// model代表的是数据库中的集合， 通过model才能对数据库进行操作
//mongoose.model(modelName, schema)
// modelName 就是要map的数据库里集合的名字,  stuSchema就是对他的约束
//名字会自动帮助你变成负数
var stuModel = mongoose.model("student", stuSchema);
/*

 */

stuModel.remove({});

// mongoose.disconnect();

//向数据库中插入 一个文档
// stuModel.create(doc, function(err){});
stuModel.create(
  {name: "孙悟空",
    age:18,
    gender:"male",

    address:"花果山"}
,function (err) {
        if(!err){
              console.log("插入成功");
        }
  });
//去查model.js的api
//model是一个构造函数，可以创建 对象
/*
语法：Model.create(doc(s), [callback])
            - 用来创建一个文档，并且添加到数据库中
            - 参数：
                    doc(s) 可以使一个文档对象，也可以是一个文档对象的数组
                    callback 当操作完成以后调用的回调函数
 */

stuModel.create([
  {
    name: "猪八戒",
    age:28,
    gender:"male",
    address:"女儿国"
  },{
  name:"唐僧",
    age:16,
    gender: "male",
    address: "女儿国"
  }
], function (err) {
          if(!err){
                  console.log("插入成功~~");
          }
});



stuModel.create([
  {
    name: "西门庆",
    age:30,
    gender:"male",
    address:"临清县"
  },{
    name:"潘金莲",
    age:24,
    gender: "female",
    address: "临清县"
  }
], function (err) {
  if(!err){
    //console.log(arguments);
    /*
    可以利用arguments[1]来查看插入的参数是什么
    Arguments] {
  '0': null,
  '1':
   [ { gender: 'male',
       _id: 5da8a7956f5f6c5a849b24ae,
       name: '西门庆',
       age: 30,
       address: '临清县',
       __v: 0 },
     { gender: 'female',
       _id: 5da8a7956f5f6c5a849b24af,
       name: '潘金莲',
       age: 24,
       address: '临清县',
       __v: 0 } ] }
     */
  }
});




/*
查询的：
          Model.find(conditions, [projection],[options],[callback])
            -查询所有符合条件的文档, 总会返回一个数组
            -通过find（）查询的结果，返回的对象，就是document，文档对象
            - document对象是model的实例
            Model.findById(id,[projection],[options], [callback])
            -根据文档的id属性查询文档
            Model.findOne([conditions], [projection], [option], [callback])
            - 查询符合条件的第一个文档


                conditions 查询的条件
                projection 投影，是不是要显示所有的字段
                                 -两种方式
                                          {name:!, _id:0}
                                          {"name _id "} 不要的某个东西就在哪个前面加 -号
                option        查询选项（skip limit）
                callback      回调函数，查询结果会通过回调函数返回
                                          回调函数必须传，如果不传回调函数，压根不会查询
 */
stuModel.find({name: "潘金莲"}, function(err, docs){
  if(!err){
        console.log(docs[0].name);
  }else {
    console.log("完全难受");
  }
});

stuModel.find({},{name:1,  _id:0}, function(err, docs){
          if(!err){
                  console.log(docs);
          }

});

stuModel.find({},{name:1,  _id:0}, function(err, docs){
  if(!err){
    console.log(docs);
  }

});