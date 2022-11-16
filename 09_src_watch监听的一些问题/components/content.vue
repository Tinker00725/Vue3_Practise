<template>
  现在的数字:{{num}}
  <br>
  <button @click="num++">数字加一</button>
  <br>
  现在的文字:{{str}}
  <br>
  <button @click="str+='!'">文字加感叹号</button>
  <h2>salary:{{person.job.mainJob.salary}}</h2>
  <button @click="person.job.mainJob.salary++">加薪</button>
  <h2>{{person.age}}</h2>
  <button @click="person.age++">年龄增加</button>
</template>

<script>
import {reactive, ref,watch} from 'vue'
export default {
  name:"Content",
  setup(){
    let num = ref(0);
    let str = ref('你好啊');
    let person = ref({//注意这里用了ref
      name:'Tinker',
      age:18,
      job:{
        mainJob:{
          job1:'worker',
          salary:20
        }      }
    })
    watch(num,(newVal,oldVal)=>{
      //这里不用.value，watch要监听的是一个ref实例对象
      console.log('我是第一个',newVal,oldVal)
    })
    watch(person,(newVal,oldVal)=>{
      // 这里监听的是一个ref实例对象，只有地址改变才能引起这个watch触发
      console.log(newVal,oldVal)
    })
    watch(person,(newVal,oldVal)=>{
      // 这里监听的是person里的job对象，ref会内部调用reactive实现响应式对象，是深度监听的
      //所以，job里面的对象都会引起这个watch触发
      console.log('我是第三个',newVal,oldVal)
    },{deep:true})

    return {
      num,
      str,
      person
    }
  }
}
</script>

<style>

</style>