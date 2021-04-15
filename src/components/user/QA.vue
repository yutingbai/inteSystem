<template>
  <div class="qapage">
    <div class="left">
      <el-menu
        :default-active="'/main/QA/recommend'"
        class="el-menu-demo"
        mode="horizontal"
        :router="true"
      >
        <el-menu-item index="/main/QA/recommend">推荐</el-menu-item>
        <el-menu-item index="/main/QA/follow">关注</el-menu-item>
      </el-menu>

      <div class="content">
        <div v-for="i in 5" :key="i"><Card /></div>
      </div>
    </div>
    <div class="right">
      <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">热门词条</el-menu-item>
      </el-menu>
    </div>
    <div></div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import { getCurrentInstance } from "vue";
import Card from "../card/index.vue";
export default defineComponent({
  components: {
    Card,
  },
  setup() {
    console.log(getCurrentInstance().$router)
    const activeObj = { follow: 1, recommend: 2 };
    const Vthis = getCurrentInstance();

    return {
      activeObj,
    };
  },
});
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
