<template>
  <div class="qapage">
    <div class="left">
      <el-menu
        type="primary"
        :default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">推荐</el-menu-item>
        <el-menu-item index="2">关注</el-menu-item>
      </el-menu>
      <div class="content">
        <div v-for="i in 5" :key="i"><Card/></div>
       
      </div>
    </div>
    <div class="right">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item index="1">热门词条</el-menu-item>
      </el-menu>
    </div>
    <div></div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import Card from '../card/index.vue'
export default defineComponent({
    components:{
        Card
    },
    setup() {
        
    },
})
</script>

<style lang="less" scoped>
.qapage {
  width: 80%;
  background-color: rgb(254, 250, 250);
  margin: 0 auto;
  height: calc(100vh - 90px);
}
.left {
  width: calc(80% - 1px);
  float: left;
  height: 100%;
}
.right {
  width: 20%;
  height: 100%;
  float: right;
  border-left: 1px solid rgb(253, 226, 226);
}
.content {
  height: calc(100% - 60px);
  overflow: scroll;
}
.content::-webkit-scrollbar {
  display: none;
}
</style>
