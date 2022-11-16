<template>
  <!-- vue3组件中的模板结构可以没有根标签 -->
  <h1>我是第一个vue3</h1>
  <h2>{{name}}</h2>
  <h2>{{age}}</h2>
  <button @click="sayHi">点我sayHi</button>
</template>

<script>
import {h} from 'vue'
export default {
  name: 'App',
  setup(){
    let name = "Tinker";
    let age = 18;
    function sayHi(){
      alert(`hello ${name} you are ${age}`)
    };
    return {//只有返回了才能被模板使用
      name, 
      age,
      sayHi
    }
    // return () => h('h1','我是渲染函数')
  }
}
</script>

<style>

</style>
