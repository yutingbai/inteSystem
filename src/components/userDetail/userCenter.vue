<template>
  <div id="main">
    <div class="userCenter">
      <div>
        <el-card class="headbox" shadow="hover">
          <div class="main-top">
            <a class="avatar" href="/#/user/setting">
              <img class="imgCercle" :src="user.user_pic" alt="用户头像" />
            </a>
            <div class="title">
              <a class="name" href="/#/user/setting">{{user.user_name}}</a>
            </div>
            <div class="info">
              <ul>
                <li>
                  <div class="meta-block">
                    <p>
                      <span>{{user.userInfo[0].user_gender}}</span>-
                      <span>{{user.userInfo[0].user_class}}</span>
                    </p>
                    <a>
                      <span>专业</span>-
                      <span>班级</span>
                    </a>
                  </div>
                </li>
                <!-- <li @click="displayDialog('follow',userId)">
                  <div class="meta-block">
                    <a>
                      <p>{{user.follow}}</p>关注 >
                    </a>
                  </div>
                </li>
                <li @click="displayDialog('fans',userId)">
                  <div class="meta-block">
                    <a>
                      <p>{{user.fans}}</p>粉丝 >
                    </a>
                  </div>
                </li> -->
              </ul>
            </div>
          </div>
        </el-card>
      </div>
    </div>
    <div id="content">
      <router-view v-if="isRouterAlive" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import API from "@/service/api";

export default {
  name: "users",
  // inject: ["reload"],
  components: {},
  provide: function() {
    return {
      userPagereload: this.userPagereload
    };
  },
  data() {
    return {
      user: {},
      isRouterAlive: true,
      diaCount: "",
      dialogVisible: false
    };
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
  computed: {
    ...mapGetters(["userName", "userId", "userHead"])
  },
  methods: {
    userPagereload: function() {
      this.isRouterAlive = false;
      // 该方法会在dom更新后执行
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
    getUserInfo() {
      API.GetUserInfo(this.userId).then(res => {
        this.user = res;
      });
    },
    displayDialog(type, id) {
      API.fans(type, { id: id }).then(res => {
        this.diaCount = res.content;
        this.dialogVisible = true;
      });
    }
  },

  beforeRouteEnter(to, from, next) {
    let cookie = document.cookie.split(";");
    var res = {};
    cookie.forEach(item => {
      var result = item.split("=");
      if (result[0] && result[1]) {
        res[result[0].trim()] = result[1].trim();
      }
    });
    console.log(cookie,res)
    if (res.userid && res.username) {
      next();
    } else {
      next({ path: "/join/login" });
    }
  }
};
</script>

<style lang="less" scoped>
#main {
  padding: 5%;
}
.headbox {
  padding: 0 40px;
  background: #fff;
  height: 200px;
  width: 85%;
  min-width: 1040px;
  border-radius: 5px;
  margin: 0 auto;
}
.main-top {
  margin-top: 20px;
}
.avatar {
  float: left;
  width: 120px;
  height: 120px;
  margin-left: -10px;
  // margin-top: 10px;
  display: block;
  cursor: pointer;
}
.title {
  padding: 5px 0 0 100px;
  .name {
    display: inline;
    font-size: 21px;
    font-weight: 700;
    vertical-align: middle;
    cursor: pointer;
  }
}
.info {
  margin-top: 5px;
  padding-left: 100px;
  font-size: 14px;
  ul {
    padding-left: 0;

    margin-top: 0;
    margin-bottom: 10px;
    li {
      display: inline-block;
      line-height: 20px;
      .meta-block {
        font-size: 12px;
        margin: 0 7px 6px 0;
        padding: 0 7px 0 0;
        border-right: 1px solid #f0f0f0;
        p {
          margin-bottom: -5px;
          font-size: 15px;
          color: #333;
          box-sizing: border-box;
          margin-block-start: 1em;
          margin-block-end: 0.5em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }
        a {
          color: #969696;
        }
      }
    }
    div {
      color: #969696;
    }
  }
}

.imgCercle {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
  vertical-align: middle;
}

.wordList {
  margin-left: 2.5%;
  width: 95%;
  min-width: 606.13px;
}
.wordList div {
  color: #969696;
  margin-top: 5px;
}
div.router-link-active,
div.router-link-active path {
  color: #646464;
  fill: #555;
  border-bottom: 3px solid #646464;
  margin-right: 30px;
  border-radius: 3px;
}
#content {
  position: absolute;
  top: 320px;
  bottom: 0px;
  flex: 1;
  overflow: auto;
  min-width: 1013px;
  width: 92%;
}
.userCenter {
  position: relative;
}
.dialog {
  .info{
    display: inline-block;
    padding-left:50px;
  }
  .author{
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }

  .avatar {
    float: left;
    -webkit-tap-highlight-color: transparent;
    font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB,
      Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    list-style: none;
    line-height: 20px;
    font-size: 13px;
    box-sizing: border-box;
    background-color: transparent;
    text-decoration: none;
    width: 34px;
    height: 34px;
    cursor: pointer;
    color: #333;
    margin: 0 5px 0 0;
    display: inline-block;
    vertical-align: middle;
    img {
      margin-top: -5px;
      margin-right: 3px;
      -webkit-tap-highlight-color: transparent;
      font-family: -apple-system, SF UI Text, Arial, PingFang SC,
        Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
      list-style: none;
      line-height: 20px;
      font-size: 13px;
      cursor: pointer;
      color: #333;
      box-sizing: border-box;
      vertical-align: middle;
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 50%;
    }
  }
}
</style>
