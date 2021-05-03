<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    class="signup-ruleForm"
  >
    <el-form-item prop="email">
      <el-input
        type="email"
        :hide-required-asterisk="false"
        v-model="ruleForm.email"
        class="login_text"
        placeholder="Email"
      ></el-input>
    </el-form-item>
    <el-form-item prop="verify" v-if="ruleForm.email != ''">
      <el-input
        type="verify"
        :hide-required-asterisk="false"
        v-model="ruleForm.verify"
        class="login_text"
        style="padding-right: 96px"
        placeholder="请输入验证码"
      ></el-input>
      <div
        class="clickbtn"
        :disabled="disabled"
        @click="handleToVerify(ruleForm.email)"
      >
        {{ verifyInfo }}
      </div>
    </el-form-item>
    <el-form-item prop="username">
      <el-input
        type="username"
        :hide-required-asterisk="false"
        v-model="ruleForm.username"
        class="login_text"
        placeholder="请输入用户名"
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
    <el-form-item prop="ckeckpass">
      <el-input
        type="password"
        :hide-required-asterisk="false"
        v-model="ruleForm.ckeckpass"
        class="login_text"
        placeholder="请再次输入您的密码"
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button
        class="login_btn"
        type="primary"
        @click="handleToSignup('ruleForm')"
        >注册</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import API from "../../service/api";

export default {
  name: "signup",
  // inject: ["reload"],
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.ckeckpass !== "") {
          this.$refs.ruleForm.validateField("ckeckpass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        verify: "",
        email: "",
        username: "",
        password: "",
        ckeckpass: "",
      },
      verify: "",
      verifyInfo: "发送验证码",
      disabled: false,
      rules: {
        email: [
          { required: true, message: "请填写邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        username: [
          { required: true, message: "请填写用户名", trigger: "blur" },
        ],
        password: [{ validator: validatePass, trigger: "blur" }],
        ckeckpass: [{ validator: validatePass2, trigger: "blur" }],
        verify: [{ required: true, message: "验证码", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleToVerify(email) {
      console.log(email);
      if (this.disabled) {
        return;
      }
      this.disabled = true;
      API.Verify({email:email}).then((res) => {
        var status = res.status;
        if (status == 0) {
          this.countDown();
          this.$message("验证码已发送!");
        } else {
          this.disabled = false;
          this.$message("验证码发送失败!" + res.errmsg);
        }
      });
    },
    countDown() {
      this.disabled = true;
      var count = 60;
      var timer = setInterval(() => {
        count--;
        this.verifyInfo = "剩余" + count + "秒";
        if (count === 0) {
          this.disabled = false;
          count = 60;
          this.verifyInfo = "发送验证码";
          clearInterval(timer);
        }
      }, 1000);
    },
    handleToSignup(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          API.Signup(Object.assign(this.ruleForm)).then((res) => {
            console.log(res);
            if (res.status == 0) {
              this.$message({ message: "注册成功", type: "success" });
              this.$router.push("/join/login");
            } else {
              this.$message.error("注册失败" + res.msg);
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
  padding: 40px 50px 30px;
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
  width: 100%;
  height: 100%;
  background: #42c02e;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
  margin-top: 25px;
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

.clickbtn {
  display: inline-block;
  font-size: 12px;
  width: 70px;
  padding: 0 5px;
  text-align: center;
  box-shadow: 0 0 2px #ccc;
  background-color: #f1f1f1;
  color: #e54847;
  border-radius: 5px;
  position: absolute;
  left: 230px;
  top: -5px;
}
</style>
