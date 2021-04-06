<template>
  <div class="resiveBody">
    <div class="body">
      <router-link tag="div" to="/users" class="btn backbtn">
        <svg
          t="1568711524690"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4324"
          width="200"
          height="200"
        >
          <path
            d="M425.640718 363.245708l0-170.978945-299.323927 299.251272 299.323927 299.378162 0-175.361761c213.758218 0 363.447299 68.396695 470.302872 218.076566C853.226739 619.799572 724.955435 406.087403 425.640718 363.245708"
            p-id="4325"
            fill="#ea6f5a"
          />
        </svg>
        回到个人主页
      </router-link>
      <div class="avatarBox">
        <div class="avatar">
          <img :src="user.avatarUrl" />
        </div>
        <div class="btn btn-hollow">
          <input unselectable="on" name="file" type="file" class="hide" @change="handleToUpload" />
          更改头像
        </div>
      </div>
      <div class="nickBox">
        <div class="setting-title">昵称</div>
        <div>
          <input type="text" v-model="nickname" />
        </div>
      </div>
      <div class="emailBox">
        <div class="setting-title">电子邮件</div>
        <div>
          <input type="text" readonly :placeholder="user.email" />
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
            <input type="text" v-model="major" />
          </div>
          <div>
            <input type="text" v-model="grade" />
          </div>
        </div>
      </div>
      <div class="passBox">
        <div class="setting-title setting-verticle">修改密码</div>
        <div>
          <div>
            <input type="password" v-model="password"  placeholder="旧密码"/>
          </div>
          <div>
            <input type="password" v-model="newpassword" placeholder="新密码"/>
          </div>
          <div>
            <input type="password" v-model="againpassword" placeholder="重复新密码"/>
          </div>
          <div class="saveBtn passwordSave" @click="updatePassword">保存修改</div>
        </div>
      </div>
      <div class="saveBtn" @click="upUserinfo">保存</div>
    </div>
  </div>
</template>

<script>
import { constants } from "crypto";

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
      againpassword: ""
    };
  },
  mounted() {
    let userId = window.localStorage.getItem("userId");
    this.axios.get("/xuptbbs/user/" + userId).then(res => {
      // console.log(res)
      this.user = res.data;
      this.nickname = res.data.nickname;
      this.major = res.data.major;
      this.grade = res.data.grade;
      this.id = res.data.id;
      console.log(this.user);
    });
  },
  beforeRouteEnter(to, from, next) {
    var username = window.localStorage.getItem("name");
    var userHead = window.localStorage.getItem("userHead");
    let userId = window.localStorage.getItem("userId");
    console.log(username,userHead,userId)
    if (username !== userHead) {
      next(vm => {
         
      });
    } else {
      console.log(1);
      next({ path: "/users/login" });
    }
  },
  methods: {
    handleToUpload(ev) {
      var file = ev.target.files[0];
      var param = new FormData();
      param.append("file", file, file.name);
      var config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      var id = window.localStorage.getItem("userId");
      this.axios.post("/xuptbbs/upphoto?id=" + id, param, config).then(res => {
        var status = res.data.code;
        var This = this;
        if (status == 0) {
          alert("上传成功");
        } else {
          alert("上传失败" + res.data.errmsg);
        }
      });
    },
    upUserinfo() {
      var data = {
        id: this.id,
        major: this.major,
        nickname: this.nickname,
        grade: this.grade
      };
      // console.log(this.nickname, this.major, this.grade, this.id, data);
      this.axios.post("/xuptbbs/up_user", data).then(res => {
        if (res.data.code == 0) {
          alert("修改成功");
        } else {
          alert("修改失败");
        }
      });
    },
    updatePassword() {
      var data = {
        againPassword: this.againpassword,
        id: this.id,
        newPassword: this.newpassword,
        password: this.password
      };
      console.log(data)
       this.axios.post("/xuptbbs/user", data).then(res => {
        if (res.data.code == 0) {
          alert("修改成功");
        } else {
          alert("修改失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
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
.passBox{
  input {
    margin-left: 70px;
    display: block;
  }
  .passwordSave{
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
