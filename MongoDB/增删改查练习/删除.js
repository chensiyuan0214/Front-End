/*
db.collection.remove()
            -remove()可以根据条件来删除，传递的条件的方式和find()一样
             - 删除所有符合条件的文档(默认情况下删除所有match)
             - 如果向第二个参数值传递一个true，只会删除一个
             - 如果只传递一个空对象，则会删除所有的文档
db.collection..deleteOne()
            -
db.collection.deleteMany()

db.collection.drop()
把整个集合全部删除

 */

db.students.remove({_id:"hello"});
db.students.remove({age:28},true);
db.students.insert(
  [
    {age:28},
    {age:28}
  ]
);

db.students.remove({}); //删除所有