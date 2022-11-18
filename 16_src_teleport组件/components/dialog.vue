<template>
    <button @click="show = true">点我弹窗</button>
    <teleport to="body">
        <div class="container" v-if="show">
            <div class="box" >
                我是弹窗
                <button @click="show = false">点击关闭</button>
            </div>
        </div>
    </teleport>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name:'cheat',
    setup(){
        let show = ref(false)

        return {
            show
        }
    }
}
</script>

<style>
.container{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);

}
.box{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 200px;
    height: 200px;
    background-color: green;
}
</style>