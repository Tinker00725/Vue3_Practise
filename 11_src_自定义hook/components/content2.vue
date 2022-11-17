<template> 
    <h2>我是content2的内容 {{point.x}}---{{point.y}}</h2>
</template>

<script>
import clickPoint from '../hook/usePoint'
export default {
    name:"Test2",
    setup(){
        let point = clickPoint(); //更加便于复用
        return {point}
    }
}
</script>

<style>

</style>