<template>
  <el-container>
    <el-header>
      <div>
        <div class="title">管理系统</div>
        <div class="iconBox user">
          <i class="el-icon-user"></i>
        </div>
        <div class="iconBox bell">
          <i class="el-icon-bell"></i>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="masterRouter"
          :router="true"
          class="el-menu-vertical-demo"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/master/users">
            <i class="el-icon-user"></i>
            <span slot="title">学生管理</span>
          </el-menu-item>
          <el-menu-item index="/master/questions">
            <i class="el-icon-document"></i>
            <span slot="title">问题管理</span>
          </el-menu-item>
          <el-menu-item index="/master/talk">
            <i class="el-icon-chat-dot-round"></i>
            <span slot="title">对话管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
export default defineComponent({
  name: 'master',
  setup(props) {
    const masterRouter = ref('')
    const handleOpen = (key: any, keyPath: any) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: any, keyPath: any) => {
      console.log(key, keyPath);
    };
    return {
      handleOpen,
      handleClose,
      masterRouter
    };
  },
  mounted() {
      this.masterRouter = this.$route.path;
      // console.log(this.ma)
  },
});
</script>
<style lang='less' scoped>
.el-header {
  padding: 0;
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
  > div {
    width: 100%;
    height: 55px;
    box-shadow: 0 0 5px rgba(30, 50, 30, 0.3);
    .title {
      background-color: #001529;
      color: #fff;
      text-align: center;
      width: 200px;
      float: left;
      font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      font-size: 20px;
    }
    .iconBox {
      display: inline-block;
      line-height: 55px;
      width: 40px;
      float: right;
    }
    .user {
      margin-right: 30px;
    }
  }
}

.el-aside {
  background-color: #001529;
  color: #fff;
  text-align: center;
  line-height: 100vh;
  margin-top: -5px;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  height: calc(100vh - 60px);
}
.el-menu {
  width: 100%;
  border: 0;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
