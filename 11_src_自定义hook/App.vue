<template>
  <button @click="show=!show">显示/消失</button>
  <br>
  <Content v-if="show"></Content>
  <Content2></Content2>
</template>
<script>
import {ref} from 'vue'
import Content from "./components/content.vue";
import Content2 from './components/content2.vue'
export default {
  name: "App",
  components: { Content ,Content2},
  setup() {
    function sayHello(params) {
      alert(`你好，我是hello ${params}`);
    }
    let show = ref(true);
    return {
      sayHello,
      show
    };
  },
};
</script>

<style></style>
