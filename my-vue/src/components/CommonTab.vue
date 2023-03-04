<template>
<div class="tags">
  <el-tag v-for="(tag,index) in tags"
  :key="tag.name" :closable="tag.name!=='home'" :disable-transitions="false" :effect="$route.name===tag.name?'dark':'plain'" @click="changeMenu(tag)" @close="handleClose(tag,index)"
  >
{{tag.label}}
  </el-tag>
</div>
</template>
<script>
import {useRouter,useRoute} from 'vue-router'
import{useStore} from 'vuex'
// 引入组件时才需要defineproperty
export default {
  setup(){
    const store=useStore()
    const router=useRouter()
    const route=useRoute()
    const tags =store.state.tabsList;
    const changeMenu=(item)=>{
      router.push({name:item.name})
    }
    const handleClose=(tag,index)=>{
      // 保持与索引一致
         let length=tags.length -1;
        //  处理vuex中的tabslist
        store.commit('closeTab',tag);
        // 做一个判断
        if(tag.name!==route.name){
          return;
        }
        if(index===length){
          router.push({
            name:tags[index-1].name
          })
        }else{
          router.push({
            name:tags[index].name
          })
        }
    }
    return{
          tags,
          changeMenu,
          handleClose

    }
  }
}
</script>
<style lang="less" scoped>
 .tags{
   padding: 20px;
   width: 100%;
   .el-tag{
     margin-right: 15px;
     cursor: pointer;
   }
 }
</style>