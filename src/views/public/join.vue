<template>
  <div class="login_body">
    <div class="loginbox">
      <h4 class="title">
        <div class="normal-title">
          <router-link tag="div" to="/join/login">登录</router-link>
          <div>
            <b>·</b>
          </div>
          <router-link tag="div" to="/join/signup">注册</router-link>
        </div>
      </h4>
     <router-view/>
      <div class="login_link">
        <router-link to="/mine/findPassword">忘记密码</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, Ref} from '@vue/composition-api';
import Login from '../../components/join/login.vue';
import Signup from '../../components/join/signup.vue';

export default defineComponent({
  components: {
    Login,
    Signup,
  },
  setup(props) {
    const alive: Ref<string> = ref('login');
    return {
      alive,
    };
  },
});
</script>
<style lang="less" scoped>
*,
:after,
:before {
  box-sizing: border-box;
}
#content .login_body {
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: #f1f1f1;
}
.loginbox {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  display: inline-block;
  margin-left: -200px;
  margin-top: -250px;
}
.title {
  font-size: 18px;
  font-weight: 400;
  color: #969696; /* #ea6f5a; */
  cursor: pointer;
  margin: 0 auto 50px;
  padding: 10px;
}
.login_body .login_text {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px #ccc solid;
  margin-bottom: 5px;
  outline: none;
  text-indent: 10px;
}
.login_body .login_btn {
  height: 50px;
  margin: 30px 10px;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
  font-size: 20px;
}
.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #e54847;
}
.normal-title {
  width: 100%;
  div {
    float: left;
    margin: 5px;
    font-size: 22px;
    color: #e54847;
  }
  b {
    color: #e54847;
  }
  margin-left: 70px;
  margin-bottom: 30px;
}
.normal-title div.active {
  color: #333;
}
.normal-title div.router-link-active {
  color: #333;
}
</style>
