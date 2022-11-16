<template>
  <Content :num="1" str="hello" @hello="sayHello">
    <template #qwe>你好</template>
    <template #asd></template>
  </Content>
</template>
<script>
import Content from "./components/content.vue";
export default {
  name: "App",
  components: { Content },
  setup() {
    function sayHello(params) {
      alert(`你好，我是hello ${params}`);
    }
    return {
      sayHello,
    };
  },
};
</script>

<style></style>
