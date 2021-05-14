<template>
  <div class="qapage">
    <div class="left">
      <el-menu
        default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        :router="true"
      >
        <el-menu-item index="1">搜索结果</el-menu-item>
      </el-menu>
      <div class="content">
        <div v-for="item in tableData" :key="item.id">
          <Card :item="item" />
        </div>
      </div>
    </div>
    <div class="right">
      <el-menu class="el-menu-demo" mode="horizontal" default-active="1">
        <el-menu-item index="1">热门词条</el-menu-item>
      </el-menu>
      <router-link
      tag="el-button"
        type="primary"
        plain
        v-for="item in keywordList"
        :key="item.id"
        :to="`/main/QA?data=`+  item.value"
      >
        {{ item.value }}
        <i>{{ item.hot }}</i>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch, watchEffect } from '@vue/composition-api';
import getCurrentInstance from 'vue';
import Card from '../card/index.vue';
import API from '../../service/api';
import { Route } from 'vue-router';
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
    const myThis = new getCurrentInstance();

    const tableData = ref([]);
    const count = ref(props.query);
    watchEffect(async () => {
      API.searchPost({ data: props.query }).then((res: any) => {
        if (res.status === 0) {
          tableData.value = res.data;
        } else {
          myThis.$message.error(res.msg);
        }
      });
    });

    const keywordList = ref([]);
    API.keyword({ num: 6 }).then((res: any) => {
      keywordList.value = res.data;
    });
    return {
      tableData,
      keywordList,
    };
  },
});
</script>

<style lang="less" scoped>
.qapage {
  width: 80%;
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
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
  margin-top: 10px;
  height: calc(100% - 60px);
  overflow: scroll;
}
.content::-webkit-scrollbar {
  display: none;
}
</style>

