<template>
  <input type="text" v-model="keyword">
  <h3>{{keyword}}</h3>
</template>

<script>
import { customRef } from 'vue';
export default {
  name:'App',
  setup(){
    function myRef(value,delay){
      return customRef((track,trigger)=>{
        let timer;
        return {
          get(){
            console.log('我被读取了',value)
            track()//追踪最新的value值，不触发获得的永远是初始化的值，没有更新，只在trigger下实现了多次触发
            //应该是输入完input后setter触发更新页面（getter触发）+getter获得最新的值并展示
            return value
          },
          set(newVal){
            console.log('newVal',newVal)
            clearTimeout(timer)//清除掉连续点击的上一次setTimeout
            timer = setTimeout(()=>{
              value = newVal;
              trigger()//通知vue重新解析模板,为了触发getter
            },delay)
          }
        }
      })
    }
    let keyword = myRef('Hello',500)
    return {
      keyword
    }
  }
}
</script>

<style>

</style>