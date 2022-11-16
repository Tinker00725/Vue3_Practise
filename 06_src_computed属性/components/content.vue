<template>
  <h1>我是子组件</h1>
  名；<input type="text" v-model="person.firstName">
  姓；<input type="text" v-model="person.lastName">
  <br>
  全名:<input type="text" v-model="person.fullName">
  <p>{{person.someThing()}}</p>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
  name: "Content",
  setup() {
    let person = reactive({
      firstName:'Tinker',
      lastName:'D',
      age:18,
      someThing(){
        return this.firstName;
      },
      // 完成版computed
      fullName:computed({
        get(){
          return person.firstName +" "+ person.lastName
        },
        set(value){
          let arr = value.split(" ");
          person.firstName = arr[0];
          person.lastName = arr[1];
        }
      })
    });
    // 只读简易版
    // let fullName = computed(()=>{
    //   return person.firstName + person.lastName
    // })
    return {
      person,
    };
  },
};
</script>

<style></style>
