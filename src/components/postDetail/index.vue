<template>
  <div class="login_body">
    <el-container class="app-container">
      <el-container class="common-main">
        <el-header>
          <div class="outBox">
            <div class="header">
              <el-row>
                <el-col :span="2">
                  <div class="userHeadBox">
                    <img class="authHead" :src="authInfo.user_pic" alt="用户头像" />
                  </div>
                </el-col>
                <el-col :span="3">
                  <div class="toprouter" tag="div" to="/main">
                    <svg
                      t="1591078786365"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="1769"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M864.41472 942.675968H329.081856c-20.987904 0-37.899264 16.912384-37.899264 37.906432 0 20.993024 16.91136 37.906432 37.899264 37.906432h535.332864c20.993024 0 37.900288-16.912384 37.900288-37.906432s-16.907264-37.906432-37.900288-37.906432zM798.517248 385.193984c77.558784-134.705152 90.389504-322.47808 90.973184-330.063872 1.16224-13.991936-6.418432-27.988992-18.664448-34.985984-12.246016-6.995968-27.406336-6.995968-39.652352 0.58368-27.988992 18.0736-274.661376 177.856512-327.728128 268.243968-77.55776 130.624512-268.248064 479.345664-269.996032 482.843648-1.75104 2.919424-2.33472 5.833728-3.497984 8.749056L125.566976 961.339392c-10.493952 18.080768-4.081664 41.404416 13.997056 51.899392 5.828608 3.504128 12.244992 5.250048 18.65728 5.250048 12.83072 0 25.660416-6.996992 32.656384-19.243008L297.59488 814.971904c66.480128-45.48608 422.781952-293.905408 500.922368-429.77792z m-229.757952-58.315776c26.236928-44.9024 139.37152-131.208192 235.00288-197.105664-10.492928 61.81376-31.485952 148.70528-70.555648 217.515008-45.48608 78.14144-217.51296 216.346624-353.386496 316.650496 61.812736-112.550912 144.036864-261.249024 188.939264-337.05984z"
                        p-id="1770"
                        fill="#ea6f5a"
                      />
                    </svg>
                    {{authInfo.user_name}}
                  </div>
                </el-col>
                <el-col :span="10">
                  <div class="titleBox">{{detail.title}}</div>
                </el-col>
                <el-col :span="1" class="countBox" :offset="2">
                  <a
                    @click="pushCount('follow',authInfo.isfollow)"
                  >
                   {{authInfo.isfollow}}
                  </a>
                </el-col>
                <el-col :span="1" class="countBox" >
                  <a
                    @click="pushCount('like',detail.islike,detail.id,userId)"
                  >
                    <svg
                      t="1591090200281"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="2953"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M700.856 155.543c-74.769 0-144.295 72.696-190.046 127.26-45.737-54.576-115.247-127.26-190.056-127.26-134.79 0-244.443 105.78-244.443 235.799 0 77.57 39.278 131.988 70.845 175.713C238.908 694.053 469.62 852.094 479.39 858.757c9.41 6.414 20.424 9.629 31.401 9.629 11.006 0 21.998-3.215 31.398-9.63 9.782-6.662 240.514-164.703 332.238-291.701 31.587-43.724 70.874-98.143 70.874-175.713-0.001-130.02-109.656-235.8-244.445-235.8z m0 0"
                        p-id="2954"
                        :fill="detail.islike ? '#ea6f5a' : '#646464'"
                      />
                    </svg>
                    {{detail.likeCount}}
                  </a>
                </el-col>
                <el-col :span="1" class="countBox">
                  <a
                    @click="pushCount('collection',detail.isLike,detail.user_id,detail.id,detail.title,userId)"
                  >
                    <svg
                      t="1591091670249"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3687"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M573.1 103.9l98.1 207.5c2.1 4.4 6.2 7.5 11 8.3L901.7 353c39 7.4 64.6 45 57.3 84-2.7 14.1-9.5 27-19.5 37.2L780.6 635.7c-3.5 3.6-5 8.6-4.1 13.5L814 877.3c7.6 37.2-16.4 73.5-53.6 81.1-15.3 3.1-31.3 0.9-45.2-6.2L518.8 844.5c-4.2-2.3-9.4-2.3-13.7 0L308.8 952.1c-33.7 17.4-75.2 4.1-92.6-29.6-7.2-13.9-9.4-29.9-6.2-45.2l37.5-228.1c0.9-4.9-0.7-9.9-4.1-13.5L84.5 474.2c-27.9-28.2-27.7-73.8 0.6-101.7 10.2-10.1 23.1-16.9 37.2-19.5l219.5-33.3c4.8-0.8 8.9-3.9 11-8.3l98.1-207.6C466 70.1 505.6 55 539.3 70.1c15 6.7 27.1 18.7 33.8 33.8z"
                        p-id="3688"
                        :fill="detail.isstar ? '#ea6f5a' : '#646464'"
                      />
                    </svg>
                    {{detail.starCount}}
                  </a>
                </el-col>
                <el-col :span="1" class="countBox">
                  <a href="#">
                    <svg
                      t="1569135820525"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="978"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M726.277689 227.555556l-91.886933 138.899911L539.420444 227.555556 726.277689 227.555556zM619.793067 398.222222 415.9488 398.222222l101.910756 387.629511L619.793067 398.222222zM422.752711 375.466667l190.225067 0-95.118222-139.127467L422.752711 375.466667zM401.351111 366.455467 496.310044 227.555556 309.464178 227.555556 401.351111 366.455467zM496.264533 793.156267 392.430933 398.222222 168.721067 398.222222 496.264533 793.156267zM169.039644 375.466667l210.989511 0-91.909689-138.934044L169.039644 375.466667zM747.463111 236.782933 655.712711 375.466667l210.625422 0L747.463111 236.782933zM643.310933 398.222222l-103.844978 394.899911L866.656711 398.222222 643.310933 398.222222z"
                        p-id="979"
                        fill="#ea6f5a"
                      />
                    </svg>
                    {{detail.hot}}
                  </a>
                </el-col> 
                <el-col :span="1" class="countBox">
                  <span @click="comment(detail.user_id,detail.id,userId)">
                    <i class="el-icon-chat-dot-round"></i>
                    {{commentCount.length}}
                  </span>
                </el-col>
                <el-col :span="2" class="countBox">
                  <span @click="routeBack()">
                    返回
                    <i class="el-icon-arrow-right"></i>
                  </span>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-header>
        <div class="contentBox" ref="contentBox" @scroll="listenScroll($event)">
          <span class="up" v-if="upDisplay" @click="top">
            <svg
              t="1591093544264"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3019"
              width="20"
              height="20"
            >
              <path
                d="M712 243.2h-396c-39.2 0-70.4-31.2-70.4-69.6s31.2-69.6 70.4-69.6h396c39.2 0 70.4 31.2 70.4 69.6 0 38.4-31.2 69.6-70.4 69.6z m12 445.6c-20.8 0-39.2-8.8-52-23.2l-88.8-98.4v291.2c0 37.6-31.2 69.6-70.4 69.6s-70.4-31.2-70.4-69.6v-291.2l-88.8 96.8c-12.8 14.4-31.2 23.2-52 23.2-39.2 0-70.4-31.2-70.4-69.6 0-18.4 6.4-33.6 18.4-47.2l212-232.8c12.8-14.4 31.2-23.2 52-23.2s39.2 8.8 52 23.2l212 232.8c12 12 18.4 28.8 18.4 47.2-1.6 40-32.8 71.2-72 71.2z"
                fill="#ea6f5a"
                p-id="3020"
              />
            </svg>
          </span>
          <div class="content">
            <mavonEditor
              v-model="detail.details"
              :subfield="false"
              defaultOpen="preview"
              :toolbarsFlag="false"
            />
          </div>
          <el-card class="commentBox">
            <div slot="header" class="clearfix">
              <span>评论区</span>
              <span @click="comment(detail.id,userId)">
                <i class="el-icon-chat-dot-round"></i>
              </span>
            </div>
            <ul v-if="commentCount.toString()!=''">
              <li v-for="item in commentCount" :key="item.id">
                <span class="commentContent">{{item.content}}</span>
                <span class="commentDate">{{new Date(item.lastActiveAt).toLocaleString()}}</span>
              </li>
            </ul>
            <p  class="last" style="text-align: center; color:#b4b4b4">
              还没有评论快来抢沙发...
              <span @click="comment(detail.user_id,detail.id,userId)">
                <i class="el-icon-chat-dot-round"></i>
              </span>
            </p>
          </el-card>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { constants } from "crypto";
import API from "../../service/api";
import { mapGetters } from "vuex";
import { mavonEditor } from "mavon-editor";
export default {
  name: "detail",
  data() {
    return {
      postId: "",
      detail: {
      },
      authInfo:{},
      upDisplay: false,
      commentCount: []
    };
  },

  components: { mavonEditor },
  mounted() {
    this.postId = this.$route.params.postId;
    
    this.getDetail();
  },
  computed: {
    ...mapGetters(["userName", "userId", "userHead"])
  },
  methods: {
    top() {
      this.$refs.contentBox.scrollTop = 0;
    },
    listenScroll(event) {
      if (event.srcElement.scrollTop > 300) {
        this.upDisplay = true;
      }
    },
    getDetail() {
      var params = {};
      params.id = this.postId;
      params.userId = this.userId;
      API.getPostDetail(params).then(res => {
        this.detail = res.data;
        this.authInfo = res.data.authInfo
        console.log(this.detail , this.authInfo );
      });
      API.getAnswerList({userId:this.userId , postId:this.postId}).then(res=>{
        this.commentCount = res.data
      })
    },
    routeBack() {
      this.$router.go(-1);
    },
    pushCount(count, type, userId, postId, summary, myId) {
      var params = { type, userId, postId, summary, myId };
      switch (count) {
        case "like":
          API.postLike(params).then(res => {
            if (res.code == 0) {
              this.$message.success("success");
              this.detail.islike = Number(!type);
              this.detail.likeCount += type == 0 ? 1 : -1;
            } else {
              this.$message.error("wrong" + res.errmsg);
            }
          });
          break;
        case "collection":
          API.postCollection(params).then(res => {
            if (res.code == 0) {
              this.$message.success("success");
              this.detail.isCollection = Number(!type);
              this.detail.joinCount += type == 0 ? 1 : -1;
            } else {
              this.$message.error("wrong" + res.errmsg);
            }
          });
          break;
          case "userattachment":
          
          API.userattachment({fromUserId:params.myId , toUserId:params.userId}).then(res => {
            if (res.code == 0) {
              this.$message.success("success");
            } else {
              this.$message.error("wrong" + res.errmsg);
            }
          });
          break;
      }
    },
    comment(postId, userId) {
      var params = {
        content: "", //内容
        parentId: 0,
        postId: this.postId, //文章id
        userId: userId //被评论用户id
      };
      this.$prompt("请输入你的评论", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          params.content = value;
          console.log(value, params);
          API.comment(params).then(res => {
            this.getDetail();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  }
};
</script>

<style lang="less">
*,
:after,
:before {
  box-sizing: border-box;
}
.app-container{
  box-shadow: 0 0 5px #ccc;
}
.login_body {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(251, 251, 251);
  overflow: hidden;
}
.userHeadBox {
  float: right;
  margin-top: 5px;
  margin-right: -10px;
}
.userHeadBox img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.toprouter{
  height: 49px;
  line-height: 49px;
}
.titleBox {
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  font-size: 28px;
  word-wrap: break-word;
  color: #222226;
  font-weight: 600;
  margin: 0;
  word-break: break-all;
}
.contentBox {
  width: 100%;
  position: absolute;
  top: 60px;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  padding-bottom: 60px;
}
.content {
  position: relative;
  top: 10px;
  left: 0;
  width: 80%;
  margin: 0 auto;
}
mavonEditor{
  padding: 10px;
}
.countBox {
  line-height: 50px;
  text-align: center;
  svg {
    font-size: 1.2em;
  }
}
.up {
  position: fixed;
  right: 50px;
  bottom: 50px;
  font-size: 50px;
}
.commentBox {
  position: relative;
  top: 10px;
  left: 0;
  width: 80%;
  margin: 0 auto;
  list-style: none;
  ul {
    list-style: none;
    li {
      display: block;
      padding: 5px 10px;
      border-bottom: 1px solid #f0f0f0;
      font-size: 14px;
      line-height: 30px;

      .commentDate {
        float: right;
      }
    }
  }
}
</style>
