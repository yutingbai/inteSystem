<template>
  <div id="singup">
    <div class="inputBox">
      <el-input
        v-model="email"
        class="email"
        type="text"
        placeholder="请输入常用Email"
        prefix-icon="el-icon-message"
      />
      <div class="verifyBtn" @click="handleToVerify">{{ verifyInfo }}</div>
    </div>
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
    <div>
      <el-input
        v-model="passwordagain"
        class="login_pass"
        type="passagain"
        placeholder="请再次输入您的密码"
        prefix-icon="el-icon-key"
      />
    </div>
    <div>
      <el-input
        v-model="verify"
        class="verify"
        type="text"
        placeholder="请输入验证码"
        prefix-icon="el-icon-turn-off"
      />
    </div>
    <div class="login_btn">
      <el-button type="primary" plain @click="handleToSignup">注册</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
export default defineComponent({
  name: 'signup',
  setup(props) {
    const username = '';
    const password = '';
    const email = '';
    const passwordagain = '';
    const verify = '';
    const verifyInfo = '发送验证码';
    const handleToSignup = () => {
      console.log('signup');
    };
    return {
      verifyInfo,
      username,
      password,
      email,
      passwordagain,
      verify,
      handleToSignup,
    };
  },
});
</script>
<style lang='less' scoped>
#singup > div{
  margin: 20px auto;
}
.inputBox {
  position: relative;
}
.verifyBtn {
  display: inline-block;
  font-size: 12px;
  width: 60px;
  padding: 0 10px;
  text-align: center;
  box-shadow: 0 0 2px #ccc;
  background-color: #f1f1f1;
  color: #e54847;
  border-radius: 5px;
  position: absolute;
  left: 218px;
  top: 5px;
  height: 30px;
  line-height: 30px;
}
</style>
