<template>
  <div id="main" class="main">
    <div class="btnbox">
      <router-link tag="div" to="/users" class="btn">
        回到个人主页
        <svg
          v-if="1"
          t="1568036827784"
          class="icon sign"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1962"
          width="200"
          height="200"
        >
          <path
            d="M509.62963 146.299259c-209.540741 0-380.017778 170.287407-380.017778 379.543704 0 209.256296 170.477037 379.543704 380.017778 379.543704 209.540741 0 380.017778-170.287407 380.017778-379.543704C889.647407 316.586667 719.17037 146.299259 509.62963 146.299259zM509.62963 867.555556c-188.397037 0-341.712593-153.220741-341.712593-341.712593 0-188.397037 153.315556-341.712593 341.712593-341.712593 188.397037 0 341.712593 153.315556 341.712593 341.712593C851.247407 714.24 698.026667 867.555556 509.62963 867.555556z"
            p-id="1963"
            fill="#ea6f5a"
          />
          <path
            d="M729.220741 518.637037 570.69037 360.011852c-3.887407-3.887407-12.325926-1.896296-18.773333 4.456296-6.447407 6.447407-8.438519 14.791111-4.456296 18.773333l125.060741 125.060741L305.398519 508.302222c-9.671111 0-17.540741 7.86963-17.540741 17.540741l0 0c0 9.671111 7.86963 17.540741 17.540741 17.540741l367.122963 0L547.460741 668.444444c-3.887407 3.887407-1.896296 12.325926 4.456296 18.773333 6.447407 6.447407 14.791111 8.438519 18.773333 4.456296l158.625185-158.625185c1.232593-1.232593 1.896296-2.844444 1.991111-4.740741 0.094815-1.706667 0.094815-3.318519 0-5.025185C731.117037 521.481481 730.453333 519.86963 729.220741 518.637037z"
            p-id="1964"
            fill="#ea6f5a"
          />
        </svg>
      </router-link>
      <div class="detailBox">
        <div>
          <svg
            t="1568119124307"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1333"
            width="200"
            height="200"
          >
            <path
              d="M984.293767 435.610686 590.464452 435.610686 590.464452 41.78318l-157.531364 0 0 393.827505L39.105583 435.610686l0 157.531364 393.827505 0 0 393.831124 157.531364 0L590.464452 593.142049l393.829314 0L984.293767 435.610686z"
              p-id="1334"
              fill="#f2f2f2"
            />
          </svg>选择类型
        </div>
        <div class="father">
          问答
          <router-link
            tag="div"
            to="/users/editor/board=QUESTION&classification=产品测试"
            class="classFic"
          >提问</router-link>
          <router-link
            tag="div"
            to="/users/editor/board=QUESTION&classification=产品运营"
            class="classFic"
          >分享</router-link>
        </div>
      </div>
      <div class="btn btnpost" @click="handleToPOST">
        发布这篇文章
        <svg
          v-if="1"
          t="1568036827784"
          class="icon sign"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1962"
          width="200"
          height="200"
        >
          <path
            d="M509.62963 146.299259c-209.540741 0-380.017778 170.287407-380.017778 379.543704 0 209.256296 170.477037 379.543704 380.017778 379.543704 209.540741 0 380.017778-170.287407 380.017778-379.543704C889.647407 316.586667 719.17037 146.299259 509.62963 146.299259zM509.62963 867.555556c-188.397037 0-341.712593-153.220741-341.712593-341.712593 0-188.397037 153.315556-341.712593 341.712593-341.712593 188.397037 0 341.712593 153.315556 341.712593 341.712593C851.247407 714.24 698.026667 867.555556 509.62963 867.555556z"
            p-id="1963"
            fill="#ea6f5a"
          />
          <path
            d="M729.220741 518.637037 570.69037 360.011852c-3.887407-3.887407-12.325926-1.896296-18.773333 4.456296-6.447407 6.447407-8.438519 14.791111-4.456296 18.773333l125.060741 125.060741L305.398519 508.302222c-9.671111 0-17.540741 7.86963-17.540741 17.540741l0 0c0 9.671111 7.86963 17.540741 17.540741 17.540741l367.122963 0L547.460741 668.444444c-3.887407 3.887407-1.896296 12.325926 4.456296 18.773333 6.447407 6.447407 14.791111 8.438519 18.773333 4.456296l158.625185-158.625185c1.232593-1.232593 1.896296-2.844444 1.991111-4.740741 0.094815-1.706667 0.094815-3.318519 0-5.025185C731.117037 521.481481 730.453333 519.86963 729.220741 518.637037z"
            p-id="1964"
            fill="#ea6f5a"
          />
        </svg>
      </div>
    </div>

    <div class="editor">
      <div class="titleBox">
        <input type="text" v-model="title" placeholder="请输入文章标题" />
      </div>
      <mavon-editor
        v-model="doc"
        :ishljs="true"
        codeStyle="code-github"
        ref="md"
        @imgAdd="$imgAdd"
        @imgDel="$imgDel"
      />
    </div>
  </div>
</template>
<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import API from "@/service/api";

import { mapGetters } from "vuex";
export default {
  name: "editor",
  components: { mavonEditor },
  data() {
    return {
      doc: "",
      isFirst: false,
      title: "",
      // postId: "false"
      formdata: new FormData()
    };
  },
  computed: {
    ...mapGetters(["userName", "userId", "userHead"])
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
    console.log(res.userId);
    if (res.userId) {
      next();
    } else {
      next({ path: "/users/login" });
    }
  },
  methods: {
    // 绑定@imgAdd event
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var param = new FormData();
      param.append("file", $file);
      API.postphoto(param).then(res => {
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        // $vm.$img2Url 详情见本页末尾
        this.$refs.md.$img2Url(pos, res.data);
      });
    },
    $imgDel(pos) {
      delete this.img_file[pos];
    },
    handleToPOST() {
      // console.log(this.formdata.get('image'))
      var This = this;
      var str = new String(this.$route.path);
      var reg = /\=+|\&/g;
      var board = str.split(reg)[1];
      var classification = str.split(reg)[3];
      var userId = window.localStorage.getItem("userId");
      // console.log(board,classification)
      if (!board) {
        alert("请先选择文章类型！");
      } else if (this.title == "") {
        alert("请输入文章标题!");
      } else if (board == "PROJECT") {
        var html = this.$refs.md.d_render;
        var formData = new FormData();
        formData.append("userId", userId);
        formData.append("projectContent", html);
        formData.append("label", "暂无");
        formData.append("type", classification);
        formData.append("title", this.title);
        API.postProject(formData).then(res => {
          if (res.data.code == 0) {
            alert("发布成功");
            this.$router.push("/post");
          } else {
            this.$message.error(res.errmsg);
          }
        });
      } else {
        // console.log(this.title)
        var html = this.$refs.md.d_render;
        var formData = new FormData();
        formData.append("userId", this.userId);
        formData.append("content", this.doc);
        formData.append("board", board);
        formData.append("classification", classification);
        formData.append("title", this.title);

        API.postPage(formData).then(res => {
          if (res.code == 0) {
            alert("发布成功");
            this.$router.push("/post");
          } else {
            alert(res.data.errmsg);
          }
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: #f1f1f1;
}
.editor {
  width: 100%;
  height: 100%;
}
.v-note-wrapper {
  float: right;
  width: 80%;
  max-height: 90%;
  min-height: 90%;
  overflow-y: scroll;
  overflow-x: hidden;
}
.btnbox {
  color: #f2f2f2;
  position: fixed;
  left: 0;
  float: left;
  width: 20%;
  height: 100%;
  overflow-y: auto;
  background-color: #404040;
  z-index: 100;
  div {
    color: #f2f2f2;
  }
  .btn {
    display: block;
    font-size: 17px;
    padding: 9px 10px;
    color: #ec7259;
    border: 1px solid rgba(236, 114, 89, 0.8);
    border-radius: 20px;
    text-align: center;
    width: 60%;
    margin: 20px auto;
    svg {
      width: 1.5em;
      height: 1.5em;
      vertical-align: -0.4em;
      margin-right: 0.1em;
    }
  }
  .btnpost {
    color: rgb(66, 192, 46);
    border: 1px solid rgba(66, 192, 46, 0.8);
    path {
      fill: rgb(66, 192, 46);
    }
    position: absolute;
    bottom: 10%;
    left: 16%;
  }
}

svg {
  width: 0.8em;
  height: 1em;
  margin-right: 0.2em;
}

.detailBox {
  width: 100%;
  margin: 20px auto;
  div {
    margin: 10px;
    position: relative;
    line-height: 40px;
    list-style: none;
    font-size: 15px;
    color: #f2f2f2;
    background-color: #404040;
    padding: 0 15px;
    cursor: pointer;
  }
  .classFic {
    display: none;
  }
}

.father:hover .classFic {
  display: block;
}
.father div.active {
  display: block;
  display: block;
  border-right: 3px solid #fff;
}
.father div.router-link-active {
  display: block;
  display: block;
  border-right: 3px solid #fff;
}

.titleBox {
  width: 100%;
  height: 10%;
  input {
    width: 78%;
    height: 100%;
    padding: 0 1%;
    font-weight: 400;
    line-height: 30px;
    box-shadow: none;
    color: #595959;
    background-color: #fff;
    outline: none;
    border: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    float: right;
    font-size: 30px;
  }
}
</style>