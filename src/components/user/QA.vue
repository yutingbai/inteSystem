<template>
  <div class="qapage">
    <div class="left">
      <el-menu
        :default-active="activeRouter"
        class="el-menu-demo"
        mode="horizontal"
        :router="true"
      >
        <el-menu-item index="/main/QA/recommend">推荐</el-menu-item>
        <el-menu-item index="/main/QA/follow">关注</el-menu-item>
      </el-menu>

      <div class="QAContent">
        <router-view />
      </div>
    </div>
    <div class="right">
      <el-menu class="el-menu-demo" mode="horizontal" default-active="1">
        <el-menu-item index="1">热门词条</el-menu-item>
      </el-menu>
      <router-link
        v-for="item in keywordList"
        :key="item.id"
        :to="`/main/QA/question?data=` + item.value"
      >
        <el-button type="primary" plain>
          {{ item.value }} <i>{{ item.hot }}</i></el-button
        >
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import getCurrentInstance from "vue";
import Card from "../card/index.vue";
import API from "../../service/api";
export default defineComponent({
  components: {
    Card,
  },
  props: {
    query: {
      type: String,
    },
  },
  setup(props) {
    const activeRouter = ref('');
    const _this = new getCurrentInstance();
    const tableData = ref([]);
    API.Postslist().then((res: any) => {
      console.log(res);
      if (res.status == 0) {
        tableData.value = res.data;
      } else {
        _this.$message.error("错误");
      }
    });
    const keywordList = ref([]);
    API.keyword({ num: 6 }).then((res: any) => {
      keywordList.value = res.data;
    });
    return {
      tableData,
      keywordList,
      activeRouter,
    };
  },
  mounted() {
      this.activeRouter = this.$route.path;
  },
});
</script>

<style lang="less" scoped>
.qapage {
  width: 80%;
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  margin: 0 auto;
  height: calc(100vh - 71px);
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
.QAContent {
  // width:90%;
  height: calc(100% - 60px);
  overflow: scroll;
}
.QAContent::-webkit-scrollbar {
  display: none;
}
</style>
