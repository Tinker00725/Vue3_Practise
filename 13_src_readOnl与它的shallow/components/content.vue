<template>
  <h3>当前求和为:{{num}}</h3>
  <button @click="num++">点我++</button>
  <br>
  <h3>姓名：{{name}}</h3>
  <h3>年龄：{{age}}</h3>
  <h3>薪资：{{job.mainJob.salary}}K</h3>
  <button @click="changeName">改变name</button>
  <button @click="age++">改变age</button>
  <button @click="job.mainJob.salary++">改变salary</button>
</template>

<script>
import { reactive,toRefs ,ref, readonly, shallowReadonly} from '@vue/reactivity'
export default {
  name:'Demo',
  setup(){
    let num = ref(0);
    let person = reactive({
      name:'Tinker',
      age:18,
      job:{
        mainJob:{
          salary:20
        }
      }
    })
    function changeName(){
      person.name +="!"
    }
    //加上readonly之后只读不可改,重新覆盖响应式person
    // person = readonly(person)
    // 第一层不能改，更深层次的数据可以改（salary）
    person = shallowReadonly(person)
    return {
      changeName,
      ...toRefs(person),
      num
    }
  }
}
</script>

<style>

</style>