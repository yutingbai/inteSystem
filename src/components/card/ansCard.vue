<template>
  <div class="card">
    <div class="userhead">
      <div class="imgBox">
        <el-avatar
          v-if="item.user_pic"
          shape="square"
          :size="40"
          fit="fit"
          :src="item.user_pic"
        ></el-avatar>
        <el-avatar v-else shape="square" :size="40">
          {{ item.user_name }}
        </el-avatar>
      </div>

      <div class="textBox" line-height="40px">
        <div class="userName">{{ item.user_name }}</div>
        <div
          class="timeBox"
          :title="moment(item.create_time).startOf('hour').fromNow()"
        >
          {{ moment(item.create_time).format("lll") }}
        </div>
      </div>
    </div>
    <div class="content">
      {{ item.value }}
    </div>
    <div v-if="!item.top" class="topAns"></div>
    <div class="buttonsBox">
      <div
        class="talkBtn"
        @click.prevent="comment(item.user_name, item.id, userId)"
      >
        <svg
          t="1620994132160"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2382"
          width="20"
          height="20"
        >
          <path
            d="M294.879656 837.442406c-10.920596 0-21.752252-2.775118-31.251212-7.988584-20.78231-11.098475-33.89402-33.022611-33.89402-57.072105l0-68.37744c-92.357182-65.084673-147.053897-164.909791-147.053897-269.92579 0-190.040752 174.403754-344.638935 388.767815-344.638935 214.41003 0 388.768415 154.620168 388.768415 344.638935 0 189.992185-174.358385 344.550994-388.724045 344.550994-20.150338 0-40.863694-1.515972-61.736543-4.555911l-31.611967 21.087703c-1.467605 1.110247-3.045935 2.25647-4.649847 3.295765l-42.71384 28.198881C319.973642 833.740916 307.537074 837.442406 294.879656 837.442406zM471.448542 145.791545c-183.316312 0-332.424816 129.311927-332.424816 288.286742 0 90.643744 50.184775 177.069947 134.170233 231.212038l12.908248 8.323357 0 98.741853c0 3.251795 1.668469 6.115853 4.401016 7.582859 3.336738 1.82876 6.38667 1.510976 9.338668-0.38374l97.143936-64.655963 11.007937 1.87373c21.551388 3.678506 42.899714 5.502269 63.476363 5.502269 183.270742 0 332.445202-129.283945 332.445202-288.196403C803.937315 275.103472 654.760856 145.791545 471.448542 145.791545zM901.123222 464.873008c0.652558 8.389312 1.421037 16.74005 1.421037 25.26487 0 36.97693-6.701456 72.50764-18.95215 105.874017 0.04397 1.037297 0.222849 2.141548 0.222849 3.199831 0 69.758504-38.740534 136.353153-103.572578 178.152812l-12.946222 8.302371-0.612585 82.362958c-0.045969 0-0.225847 0.04397-0.407724 0.04397l-79.496901-52.74304-11.057503 1.875728c-16.736653 2.841074-33.326405 4.286094-49.280388 4.286094-2.118564 0-4.150186-0.202862-6.294732-0.272815-33.800883 8.530217-69.361773 13.469867-106.301727 13.469867-20.214694 0-40.951635-1.512974-61.756529-4.554912l-0.453692 0.311789c49.980513 29.934704 110.11754 47.41865 174.832464 47.41865 15.523475 0 31.433488-1.146223 47.499795-3.334739l22.924457 15.226676c1.331098 1.06128 2.594241 1.986653 3.608553 2.617226l34.252577 22.605673c9.386636 6.156826 20.403167 9.475576 31.545612 9.475576 9.66045 0 19.180995-2.458333 27.238532-6.926304 18.637364-9.927269 30.146361-29.304132 30.146361-50.489568l0-51.120141c73.24414-52.632115 116.524796-132.58171 116.524796-216.707472C940.163553 550.506549 925.943394 504.779751 901.123222 464.873008z"
            p-id="2383"
            fill="#8a8a8a"
          ></path>
        </svg>
        {{ item.ans_count }}
      </div>
      <div
        v-if="item.ans_count"
        class="moreBtn"
        @click.prevent="
          moreBtnClick ? cleanList() : getTAlkList(item.id, userId)
        "
      >
        {{ moreBtnClick ? "收起" : "查看全部" }}
      </div>
      <div
        v-if="item.user_id == userId"
        class="deleBtn"
        @click.prevent="deleAns('answer', userId, item.id)"
      >
        {{ "删除" }}
      </div>
    </div>

    <ul v-if="ansTalkList.toString() != ''">
      <li class="cardBox" v-for="item in ansTalkList" :key="item.id">
        <div class="userhead">
          <div class="imgBox">
            <el-avatar
              v-if="item.user_pic"
              shape="square"
              :size="40"
              fit="fit"
              :src="item.user_pic"
            ></el-avatar>
            <el-avatar v-else shape="square" :size="40">
              {{ item.user_name }}
            </el-avatar>
          </div>

          <div class="textBox" style="width: 136px" line-height="40px">
            <div class="userName">{{ item.user_name }}</div>
            <div
              class="timeBox"
              :title="moment(item.create_time).format('lll')"
            >
              {{ moment(item.create_time).fromNow() }}
            </div>
          </div>
        </div>
        <div class="content">
          {{ item.value }}
        </div>
        <div
          v-if="item.user_id == userId"
          class="deleBtn"
          style="padding-left:80px"
          @click.prevent="deleAns('talk', userId, item.id)"
        >
          {{ "删除" }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from "moment";
import API from "../../service/api";
import { mapGetters } from "vuex";
export default {
  name: "ansCard",
  props: ["item"],
  data() {
    return {
      moment,
      ansTalkList: [],
      moreBtnClick: 0,
    };
  },

  mounted() {},
  computed: {
    ...mapGetters(["userName", "userId", "userHead"]),
  },
  methods: {
    cleanList() {
      this.ansTalkList = [];
      this.moreBtnClick = 0;
    },
    getTAlkList(itemId, userId) {
      var params = {
        ansId: itemId,
        userId: userId,
      };
      API.getAnsTalkList(params).then((res) => {
        this.ansTalkList = res.data;
        this.moreBtnClick = 1;
      });
    },
    comment(userNAme, itemId, userId) {
      var params = {
        value: "", //内容
        ansId: itemId, //文章id
        userId: userId, //被评论用户id
      };
      this.$prompt(`对${userNAme}的回答作出评论`, {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          params.value = value;
          console.log(params);
          API.pushAnsTalk(params).then((res) => {
            if (res.status == 200) {
              this.$emit("getDetail");
              this.getTAlkList(itemId, userId);
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    deleAns(type, userId, itemId) {
      if (type === "answer") {
        API.deleAnswer({ userId: userId, ansId: itemId }).then((res) => {
          if (res.status === 200) {
            this.$emit("getDetail");
            this.$message({
              type: "success",
              message: "删除成功",
            });
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
        });
      }else{
        API.deleAnsTalk({ userId: userId, talkId: itemId }).then((res) => {
          if (res.status === 200) {
            this.getTAlkList()
            this.$emit("getDetail");
            this.$message({
              type: "success",
              message: "删除成功",
            });
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
        });
      }
    },
  },
};
</script>


<style lang="less" scoped>
.userhead {
  position: relative;
}
.userhead div {
  float: left;
}
.imgBox {
  margin-top: 5px;
}
.textBox {
  width: 200px;
  padding: 0 10px;
  .userName {
    font-size: 16px;
    line-height: 28px;
    color: #404040;
  }
  .timeBox {
    font-size: 13px;
    line-height: 20px;
    color: #969696;
  }
}
.content {
  float: left;
  text-align: left;
  font-size: 16px;
  margin-left: 40px;
}
.topAns {
  position: absolute;
  top: 0;
  right: 0;
  float: right;
  width: 80px;
  height: 80px;
  background: url(./top.svg);
  opacity: 0.7;
}
.buttonsBox {
  width: 100%;
  float: left;
}

.talkBtn,
.moreBtn,
.deleBtn {
  
  float: left;
  text-align: left;
  padding-left: 30px;
  margin-top: 30px;
  font-size: 12px;
  color: #8a8a8a;
}
.talkBtn {
  padding-left: 80px;
}
.cardBox {
  width: 100%;
  padding-left: 150px;
}
</style>
