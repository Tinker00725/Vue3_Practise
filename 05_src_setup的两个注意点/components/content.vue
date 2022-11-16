<template>
  <h1>我是子组件</h1>
  <h3>{{ num }}+++{{ str }}</h3>
  <button @click="showEvent">测试事件</button>
  <slot name="qwe"> 和啦啦啦啦啦啦啦咯 </slot>
  <slot name="asd"> 我是asd </slot>
</template>

<script>
export default {
  name: "Content",
  props: ["num", "str"],
  emits: ["hello"], //接收传入的自定义事件，消除警告
  setup(props, context) {
    //这个是函数，里面正常写代码
    console.log(context.slots);
    //content.attrs 获取到props中的参数（没写props的情况下）
    //content.emit 触发自定义事件
    //content.slots 插槽传入的信息
    function showEvent() {
      context.emit("hello", 666); //触发自定义事件
    }
    return {
      showEvent,
    };
  },
};
</script>

<style></style>
