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
  <button @click="changeNoReact">改变响应式(age)</button>
  <button @click="addCar">添加座驾</button>
  <div  v-show="person.car">
    <h2>座驾：{{person.car}}</h2>
    <button @click="person.car.name += '!'">改车名</button>
    <button @click="person.car.price += '+10K'">改车价</button>
  </div>
</template>

<script>
import { reactive,toRefs ,ref, toRaw, markRaw} from '@vue/reactivity'
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
    function changeNoReact(){
      let p = toRaw(person)
      p.age++;
      console.log(p)
    }
    function addCar(){
      let car = {name:'大奔',price:'40W'}
      person.car = markRaw(car);
    }
    return {
      changeName,
      person,
      ...toRefs(person),
      num,
      changeNoReact,
      addCar
    }
  }
}
</script>

<style>

</style>