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
    // //监测单一ref
    // watch(num,(newVal,oldVal)=>{
    //   console.log(oldVal,newVal)
    // })

    // 监测多个ref,watch有三个配置项
    // watch([num,str],(newVal,oldVal)=>{
    //   console.log(newVal,oldVal)
    // },{immediate:true})

    // // 监视reactive所定义的全部属性
    // /*
    //   1.但是这样的oldVal是检测不到的
    //    2.默认开启关不掉的深度监听
    //  */
    // watch(person,(newVal,oldVal)=>{
    //   console.log(newVal,oldVal)
    // })

    // // 监视reactive所定义的单一属性，这样可以得到oldVal
    // watch(()=>person.age,(newVal,oldVal)=>{
    //   console.log(newVal,oldVal)
    // })

    // // 监听reactive所定义的多个属性
    // watch([()=>person.name,()=>person.age],(newVal,oldVal)=>{
    //   console.log(newVal,oldVal)
    // })

    //坑：对象里面的属性需要开启deep
    /*不加deep，此时改变job里面的属性，不会触发这个watch*/
    watch(()=>person.job,(newVal,oldVal)=>{
      console.log(newVal,oldVal)
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