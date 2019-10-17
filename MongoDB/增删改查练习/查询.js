/*
查询
  db.collection.find()
    =find()用来查询集合中所有符合条件的文档
     - find() 可以接受一个对象作为条件参数
              {} 表示查询集合中的所有文档
              {属性:值}  查询属性是指定值的文档
              可以同时传多个，用逗号隔开 例子{age:16, name:"白骨精"}
     -find()返回的是一个array

  db.collection.findOne()
      -用来查询集合中符合条件的第一个文档
      - findOne()返回的就是一个文档对象
db.collection.find({}).count();
-查询所有结果的数量
 */

db.students.find({_id: "hello"});
db.students.find({age:16, name:"白骨精"})[1];
db.students.find({}).count();