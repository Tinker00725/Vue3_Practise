<template>
  <div id="father">
    <h3>我是App组件</h3>
      <Child></Child>
  </div>
  
</template>

<script>
import Child from './components/Child.vue'
export default {
  name:'App',
  components:{Child},
}
</script>

<style scoped>
#father{
  padding: 10px;
  margin: auto;
  background-color: gray;
}
</style>