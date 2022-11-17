<template>
  <h1>现在的点坐标：{{point.x}}_{{point.y}}</h1>
</template>

<script>
import {ref} from 'vue'
import clickPoint  from '../hook/usePoint'
export default {
  name:"Content",
  setup(){
    let num = ref(0);
    let point = clickPoint();
  
    return {
      num,
      point
    }
  }
}
</script>

<style>

</style>