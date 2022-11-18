<template>
  <div id="father">
    <h3>我是App组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child></Child>
      </template>
      <template v-slot:fallback>
        <!-- Child正在加载的时候就会显示这里的内容 -->
        <h3>请稍后，正在加载组件</h3>
      </template>
    </Suspense>
  </div>
  
</template>

<script>
// import Child from './components/Child.vue'
import { defineAsyncComponent } from 'vue';
const Child =  defineAsyncComponent(()=>import('./components/Child.vue'))
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