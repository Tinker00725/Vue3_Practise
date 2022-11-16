<template>
  <!-- vue3组件中的模板结构可以没有根标签 -->
  <h1>我是第一个vue3</h1>
  <h2>{{name}}</h2>
  <h2>{{age}}</h2>
  <h2>{{job.type}}</h2>
  <h2>{{job.salary}}</h2>
  <button @click="change">点我show ref</button>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  setup(){
    let name = ref('Tinker')//设置为双向绑定数据
    let age = 18;
    let job = ref({
      type:'前端工程师',
      salary:'30K'
    })//多层的时候用的proxy代理，所以不用再value
    function change(){
      console.log(name)
      name.value = 'T';//修改数据
      job.value.type = 'UI工程师',
      job.value.salary = '60K'
    };
    return {//只有返回了才能被模板使用
      name, 
      age,
      change,
      job
    }
    // return () => h('h1','我是渲染函数')
  }
}
</script>

<style>

</style>
