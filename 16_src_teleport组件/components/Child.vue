<template>
  <div id="component">
    <h3>我是Child组件</h3>
    <Son></Son>
  </div>
  
</template>

<script>
import Son from './Son.vue'
export default {
    name:'Child',
    components:{Son}
}
</script>

<style scoped>
#component{
    padding: 10px;
    background-color:lightblue;
}
</style>