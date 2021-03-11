<template>
  <div id="login">
    <div>
      <el-input
        v-model="username"
        class="login_name"
        type="text"
        placeholder="账户名/手机号/Email"
        prefix-icon="el-icon-user"
      />
    </div>
    <div>
      <el-input
        v-model="password"
        class="login_pass"
        type="password"
        placeholder="请输入您的密码"
        prefix-icon="el-icon-key"
      />
    </div>
    <div class="login_btn">
      <el-button type="primary" plain @click="handleToLogin">登录</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
export default defineComponent({
  name: 'login',
  emits: ['login'],
  setup(props, {emit}) {
    const username = '';
    const password = '';
    const handleToLogin = () => {
      console.log('login');
    };
    return {
      username,
      password,
      handleToLogin,
    };
  },
});
</script>
<style >
#login > div {
  margin: 20px auto;
}
</style>
