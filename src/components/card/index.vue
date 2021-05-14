<template>
  <div class="card">
    <div class="titleBox" @click.prevent="pushRoute(item.id)">
      <span>{{item.title}}</span>
    </div>
    <div class="wordBox">
      <div class="imgBox">
        <img
          :src="item.pic"
          alt="文章配图"
        />
      </div>
      <span>
       {{item.details}}
      </span>
    </div>

    <div class="iBox">
      <span>
        <i class="el-icon-thumb"></i>
        {{item.likeCount}}
      </span>
      <span>
        <i class="el-icon-star-off"></i>
        {{item.starCount}}
      </span>
      <span>
        <i class="el-icon-chat-line-square"></i>
        {{item.ansCount}}
      </span>
    </div>
  </div>
</template>

<script>

import API from "../../service/api";

export default {
  name: "card",
  props:['item'],
  data() {
    return {
   
    };
  },

  mounted() {
 
  },
  computed: {
  },
  methods: {
   pushRoute(url){
      this.$router.push('/postDetail/'+url);
    }
  }
};
</script>


<style lang="less" scoped>
.card {
  margin: 0 auto;
  width: 90%;
  height: 160px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-top: 3px;
}

.userBox {
  float: left;
  margin: 5px;
}

.userBox img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.userBox div {
  display: inline-block;
  margin-left: 5px;
  color: #333;
}

.userBox span {
  font-size: 10px;
}

.titleBox {
  float: left;
  margin-left: 5%;
  font-weight: bold;
  margin-top: 10px;
  width: 100%;
  text-align: left;
}
.wordBox {
  width: 100%;
  margin-top: 10px;
  margin-left: 5%;
  float: left;
  text-align: left;
  height: 90px;
  line-height: 30px;
  font-size: 15px;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  .imgBox img {
    width: 150px;
    float: left;
    max-height: 90px;
  }
}


.iBox {
  color: #333;
  float: right;
}
.iBox span {
  margin-right: 10px;
}
</style>
