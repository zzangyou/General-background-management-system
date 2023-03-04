<script setup>
/* import { useStore } from "vuex";
import {useRouter} from 'vue-router'
// 调用addMenu 因为app是根组件 
const store =useStore();
const router=useRouter()
store.commit('addMenu',router)
 不应该写在这里此时组件已经开始渲染 此时添加动态路由过晚
*/
</script>

<template>
<router-view></router-view>
</template>

<style>
#app{
  height: 100%;
}
</style>
