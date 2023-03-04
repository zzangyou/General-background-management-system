<template>
<el-header>
    <div class="l-content">
        <!-- 图标展示 -->
        <el-button size="small" plain @click="handleCollapse" style="margin-right:20px;margin-left:0">
            <el-icon>
                <Menu />
            </el-icon>
        </el-button>
        <el-breadcrumb separator="/" class="bread">
            <!-- 首页一定存在 写死 -->
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="current.path" v-if="current">{{current.label}}</el-breadcrumb-item>

  </el-breadcrumb>
    </div>
    <div class="r-content">
          <el-dropdown>
    <span class="el-dropdown-link">
     <img class="user" :src="getImgSrc('user')" alt="">
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLoginOut">退出</el-dropdown-item>
    
      </el-dropdown-menu>
    </template>
  </el-dropdown>
    </div>
</el-header>
</template>
<script>
import {useRouter} from 'vue-router'
import { computed,defineComponent } from '@vue/runtime-core';
import {useStore} from 'vuex'
export default {
    setup(){
        let store=useStore();
        //  const imgSrc=require("../assets/images/user.png")
        let getImgSrc = (user) => {
            // vite 引入静态资源的方法
            return new URL(`../assets/images/${user}.png`,import.meta.url).href;
        };
        let handleCollapse=()=>{
            // 调用vuex中的mutation
            store.commit('updateIscollapse')
        };
        // 用计算属性
        const current = computed(()=>{
            return store.state.currentMenu;
        })
        const router = useRouter()
        const handleLoginOut =()=>{
         store.commit("cleanMenu")
         router.push({
             name:'login'
         })
        }
        return{
          getImgSrc,
          handleCollapse,
          current,
          handleLoginOut
        }
    }
}
</script>
<style lang="less" scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: #333;
}
    .r-content{
        .user{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
    .l-content{
        display: flex;
        align-items: center;
        .el-button{
            margin-left: 20px;
        }
        h3{
            color: #fff;
        }
    }
    // 样式穿透 这样才能生效
    .bread :deep span{
        color:#fff !important;
        cursor: pointer !important;
    }
</style>