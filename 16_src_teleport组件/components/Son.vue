<template>
  <div id="son">
    <h3>我是son组件</h3>
    <Dialog></Dialog>
  </div>
</template>

<script>
import Dialog from './dialog.vue'
export default {
    name:'Son',
    components:{Dialog}
}
</script>

<style scoped>
#son{
    background-color: orange;
}
</style>