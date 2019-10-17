/*
修改
  db.collection.update(查询条件, 修改为的新对象)
          -update()默认情况下会使用新对象来替换旧对象
          - 如果需要修改指定的属性，而不是替换需要使用“修改操作符”来修改
                  $set 可以用来修改文档中的指定属性，如果不止一次个match也会只修改一个
                  $unset 可以用来删除文档中的属性

 db.collection.updateMany()
            - $set 可以同时修改所有match条件的对象的属性

 db.collection.updateOne()
          -修改一个符合条件的文档

db.collection.replaceOne()
          -替换一个符合条件的文档


{
  <update operator>: { <field1>: <value1>, ... },
  <update operator>: { <field2>: <value2>, ... },
  ...
}

 */

db.students.find({});
//直接替换
db.students.update({name:"沙和尚"}, {age:28});
//
db.studnets.update(
  {"name":唐僧},
  {$set:{
          name: "罗本",
          age: "33",
          address:"拜仁慕尼黑"
    }
  }
);

db.students.updateMany(){
  {name: "蜘蛛精"},
  {$set:{
            name: "里贝里",
            age: "37"
  }}
};