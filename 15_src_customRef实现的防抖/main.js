//引入不是Vue，引入的就是一个createApp的工厂函数（返回一个加工对象）
import { createApp } from "vue";
import App from "./App.vue";

// 创建app应用实例，挂载相应容器
// app类似于vue2的vm,但是身上没有那么多的方法（更轻）
const app = createApp(App);
// 挂载
app.mount("#app");

