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
import {onBeforeMount, onUpdated,onMounted,onBeforeUpdate, onBeforeUnmount,onUnmounted,reactive, ref,watch, watchEffect} from 'vue'
export default {
  name:"Content",
  setup(){
    console.log('---setup---')//这里就是beforeCreate和Created
    onBeforeMount(()=>{
      console.log('---onBeforeMount---')
    })
    onMounted(()=>{
      console.log('---Mounted---')
    })
    onBeforeUpdate(()=>{
      console.log('---onBeforeUpdate---')
    })
    onUpdated(()=>{
      console.log('---onUpdate---')
    })
    onBeforeUnmount(()=>{
      console.log('---onBeforeUnmount---')
    })
    onUnmounted(()=>{
      console.log('---onMounted---')
    })
    let num = ref(0);
    let str = ref('你好啊');
    let person = reactive({
      name:'Tinker',
      age:18,
      job:{
        mainJob:{
          job1:'worker',
          salary:20
        }      
      }
    })
  
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