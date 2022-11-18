<template>
  <div id="component">
    <h3>我是Child组件</h3>
  </div>
  
</template>

<script>
import {ref} from 'vue'
export default {
    name:'Child',
    async setup(){
        let num = ref(0);
        let p = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({num})
            },1000)
        })
        
        return await p
    }
}
</script>

<style scoped>
#component{
    padding: 10px;
    background-color:lightblue;
}
</style>