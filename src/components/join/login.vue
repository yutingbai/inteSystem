<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <el-form-item prop="username">
        <el-input
          type="username"
          :hide-required-asterisk="false"
          v-model="ruleForm.username"
          class="login_text"
          placeholder="账户名/手机号/Email"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          :hide-required-asterisk="false"
          v-model="ruleForm.password"
          class="login_text"
          placeholder="请输入您的密码"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          class="login_btn"
          type="primary"
          @click="handleToLogin('ruleForm')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { constants } from "crypto";
import API from "../../service/api";

export default {
  name: "login",
  // inject: ["setCookie"],
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请填写用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请填写密码", trigger: "blur" }],
      },
    };
  },

  methods: {
    handleToLogin(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          API.Login(Object.assign(this.ruleForm)).then((res) => {
            console.log(res);
            if (res.status == 0) {
              this.$message({ message: "登陆成功", type: "success" });
              this.$router.push("/master/users");
            } else {
              this.$message.error("账户名或密码错误");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
*,
:after,
:before {
  box-sizing: border-box;
}
.login_body {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #f1f1f1;
}

.loginbox {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 400px;
  margin: 40px auto 0;
  padding: 40px 40px 30px;
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
  margin: 0 auto 40px;
  padding: 10px;
}
.login_text {
  width: 100%;
  border: none;
  outline: none;
}
.login_body .login_btn {
  height: 50px;
  margin: 30px 10px;
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
