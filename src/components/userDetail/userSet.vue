<template>
  <div class="resiveBody">
    <div class="body">
      <router-link router-linktag="div" to="/user" class="btn backbtn">
        <svg
          t="1591018607486"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2663"
          width="200"
          height="200"
        >
          <path
            d="M615.253066 718.50613197c-4.14856431 0-8.3433138-1.47468496-11.52360967-4.42486515L397.22291921 522.69389682c-6.36099689-5.89995527-6.36099689-15.48783836 0-21.38779364L603.72945633 309.91873318c6.36099689-5.89995527 16.68622247-5.89995527 23.04762446 0 6.36099689 5.90036041 6.36099689 15.48824351 0 21.38819875L431.79455848 512l194.98252231 180.69306807c6.36099689 5.89995527 6.36099689 15.48824351 0 21.38819875-3.18070102 2.95018021-7.3754505 4.42486517-11.5240148 4.42486516z"
            p-id="2664"
            fill="#ea6f5a"
          />
        </svg>
        回到我的主页
      </router-link>
      <div class="avatarBox">
        <div class="avatar">
          <img :src="user.user_pic" />
        </div>
        <div class="btn btn-hollow">
          <input
            unselectable="on"
            name="file"
            type="file"
            class="hide"
            @change="handleToUpload"
          />
          更改头像
        </div>
      </div>
      <div class="nickBox">
        <div class="setting-title">昵称</div>
        <div>
          <input type="text" v-model="user.user_name" />
        </div>
      </div>
      <div class="emailBox">
        <div class="setting-title">电子邮件</div>
        <div>
          <input type="text" readonly :placeholder="user.user_email" />
        </div>
      </div>

      <div class="radioBox">
        <div class="setting-title setting-editor">常用编辑器</div>
        <div>
          <input type="radio" value="markdown" checked="checked" />
          <span>Markdown</span>
        </div>
      </div>
      <div class="langBox">
        <div class="setting-title setting-verticle">语言设置</div>
        <div>
          <input type="radio" value="zh-CN" checked />
          <span>中文简体</span>
        </div>
      </div>
      <div class="majorBox">
        <div class="setting-title setting-verticle">年级和专业</div>
        <div>
          <div>
            <input type="text" v-model="user.userInfo[0].user_class" />
          </div>
          <div>
            <input type="text" v-model="user.userInfo[0].user_gender" />
          </div>
        </div>
      </div>
      <div class="passBox">
        <div class="setting-title setting-verticle">修改密码</div>
        <div>
          <div>
            <input type="password" v-model="password" placeholder="旧密码" />
          </div>
          <div>
            <input type="password" v-model="newpassword" placeholder="新密码" />
          </div>
          <div>
            <input
              type="password"
              v-model="againpassword"
              placeholder="重复新密码"
            />
          </div>
          <div class="saveBtn passwordSave" @click="updatePassword">
            保存修改
          </div>
        </div>
      </div>
      <div class="saveBtn" @click="upUserinfo">保存</div>
    </div>
  </div>
</template>

<script>
import API from "@/service/api";
import { mapGetters } from "vuex";

export default {
  name: "resive",
  data() {
    return {
      user: {},
      nickname: "",
      major: "",
      grade: "",
      id: "",
      password: "",
      newpassword: "",
      againpassword: "",
    };
  },
  computed: {
    // ...mapGetters(["userName", "userId", "userHead"])
  },
  mounted() {
    let cookie = document.cookie.split(";");
    var res = {};
    cookie.forEach((item) => {
      var result = item.split("=");
      if (result[0] && result[1]) {
        res[result[0].trim()] = result[1].trim();
      }
    })
    API.userInfo({id:res.userid}).then(res => {
      this.user = res.data;
    });
  },
  beforeRouteEnter(to, from, next) {
    let cookie = document.cookie.split(";");
    var res = {};
    cookie.forEach((item) => {
      var result = item.split("=");
      if (result[0] && result[1]) {
        res[result[0].trim()] = result[1].trim();
      }
    });
    if (res.userid) {
      next();
    } else {
      next({ path: "/join/login" });
    }
  },
  methods: {
    handleToUpload(ev) {
      console.log(ev.target.files[0]);
      var file = ev.target.files[0];
      var param = new FormData();
      param.append("file", file);
      console.log(param , this);
      API.editImg(this.user.user_id, param).then((res) => {
        if (res.code == 200) {
          this.user.user_pic=res.url
          this.$message({ message: "上传成功", type: "success" });
        } else {
          this.$message.error("上传失败" + res.errmsg);
        }
      });
    },
    upUserinfo() {
      API.UpdateUser(this.user).then((res) => {
        if (res.code == 0) {
          this.$message({ message: "修改成功", type: "success" });
        } else {
          this.$message.error("修改失败" + res.errmsg);
        }
      });
    },
    updatePassword() {
      var data = {
        againPassword: this.againpassword,
        id: this.id,
        newPassword: this.newpassword,
        password: this.password,
      };
      console.log(data);
      API.PostPass(data).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.$message({ message: "修改成功", type: "success" });
          this.reload();
        } else {
          this.$message.error("修改失败" + res.errmsg);
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
#content .resiveBody {
  position: absolute;
  top: 70px;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: #fff;
}
.body {
  position: absolute;
  left: 50%;
  // top: 70px;
  min-width: 1010px;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  display: inline-block;
  margin-left: -505px;
  // margin-top: -35%;
  text-align: left;
}
.btn-hollow {
  border: 1px solid rgba(59, 194, 29, 0.7);
  color: #42c02e !important;
}
.btn-delete,
.btn-gray,
.btn-hollow {
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  border-radius: 40px;
  background: none;
}
.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.hide {
  position: absolute;
  display: block !important;
  width: 82px;
  opacity: 0;
}
.setting-title {
  font-size: 15px;
  color: #969696;
}

.avatarBox {
  .avatar {
    width: 100px;
    height: 100px;
  }
  .avatar img {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
    vertical-align: middle;
  }
  div {
    display: inline-block;
  }
  .btn {
    border: 1px solid rgba(59, 194, 29, 0.7);
    padding: 4px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    border-radius: 40px;
    margin-left: 30px;
  }
}
.passBox,
.nickBox,
.emailBox,
.radioBox,
.langBox,
.majorBox {
  margin-top: 30px;
  div {
    display: inline-block;
  }
  input {
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #c8c8c8;
    border-radius: 4px;
    background-color: hsla(0, 0%, 71%, 0.1);
    margin-left: 100px;
  }
}
.emailBox {
  input {
    margin-left: 70px;
  }
}
.radioBox,
.majorBox {
  input {
    margin-left: 55px;
  }
}
.langBox {
  input {
    margin-left: 70px;
  }
}
.passBox {
  input {
    margin-left: 70px;
    display: block;
  }
  .passwordSave {
    margin-left: 30px;
  }
}
.saveBtn {
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  width: 100px;
  margin: 30px 0 60px;
  border-radius: 20px;
  border: none;
  color: #fff;
  background-color: #42c02e;
  padding: 4px 12px;
}
.backbtn {
  float: right;
  font-size: 14px;
  // font-weight: 600;
  text-align: center;
  // width: 100px;
  margin: -20px -20px 0;
  border-radius: 20px;
  color: #ea6f5a;
  border: 1px solid #ea6f5a;
  padding: 4px 12px;
  svg {
    width: 1.5em;
    height: 1.5em;
    vertical-align: -0.4em;
    margin-right: 0.5em;
  }
}
</style>
