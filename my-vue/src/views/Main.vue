<template>
  <div class="common-layout">
    <el-container class="lay-container" >

      <common-aside></common-aside>

      <el-container>
       <common-header></common-header>
      <common-tab></common-tab>
        <el-main style="overflow: auto;height:calc(100% - 124px)"> 
          <el-scrollbar>
            <router-view></router-view>        
            </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import {defineComponent} from 'vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonAside from '../components/CommonAside.vue'
import CommonTab from '../components/CommonTab.vue'
export default defineComponent({
  setup() {
    components:{
              CommonHeader,
              CommonAside,
              CommonTab
    }
  },
})
</script>
<style lang="less" scoped>
  .el-container{
    flex-wrap: wrap;
    align-items: flex-start;
    height: 100%;
  }
  .common-layout{   
    height: 100%;
    .lay-container{
      flex-wrap: nowrap;
    }

    & > .el-container {
      height: 100%;
          & > .el-aside {
      height: 100%;
      background: #545c64;
          }
    }
  }
  
</style>