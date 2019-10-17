/*
向数据插入文档
            db.<collection>.insert()
              - 向集合中插入一个或多个文档
              - 当我们向数据库或者集合中插入文档是，如果没有给文档指定_id属性，则数据库会自动为文档添加_id
                          该属性用来作为文档他的唯一标识
              -   _id我们可以自己指定，如果我们自己制定了数据库就不会再添加了，如果自己指定id一定要确保_id的唯一性
              db.collection.insert();
              两种方法都可以，但是调用的时候意图不如下面两个清晰
              db.collection.insertOne();
                只能插入一个对象
              db.collection.insertMany();
                必须传数组，哪怕数组里只有一个对象
 */

db.students.insert({name:"猪八戒", age:28, gender:"男"});
db.students.insert([
  {name:"沙和尚", age:38, gender:"男"},
  {name:"白骨精", age:16, gender:"女"},
  {name:"蜘蛛精", age:14, gender:"女"}
]);

ObjectId();
// 根据时间戳（每毫秒一个），机器码，确保数据为宜

db.students.insert({_id: "hello", name:"唐僧", age:50, gender:"男"});
//也可以自己设置

db.students.find();