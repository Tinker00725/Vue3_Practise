<template>
  <h3>{{name}}</h3>
  <h3>{{age}}</h3>
  <h3>{{job.mainJob.salary}}</h3>
  <button @click="changeName">改变name</button>
</template>

<script>
import { reactive, toRef, toRefs } from '@vue/reactivity'
export default {
  name:'Demo',
  setup(){
    let person = reactive({
      name:'Tinker',
      age:18,
      job:{
        mainJob:{
          salary:'20k'
        }
      }
    })
    function changeName(){
      person.name +="!"
    }
    let b = toRef(person,'name')
    console.log(b)
    let a = toRefs(person)
    console.log(a)
    return {
      changeName,
      ...toRefs(person)
    }
  }
}
</script>

<style>

</style>