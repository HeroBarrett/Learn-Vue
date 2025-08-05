<template>
  <div class="school">
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age + 1 }}</h2>
  </div>
</template>

<script>
export default {
  name: "SchoolName",
  data() {
    return {
      msg: "我是一个学生",
    };
  },
  props:['name', 'sex', 'age']
  // props: {
  //   name:String,
  //   age:Number,
  //   sex:String
  // }
  // props: {
  //   name: {
  //     type: String, //name的类型是字符串
  //     required: true, // 名字必须传
  //   },
  //   age: {
  //     type: Number,
  //     default: 99,
  //   },
  //   sex: {
  //     type: String,
  //     required: true,
  //   },
  // },
};
</script>
