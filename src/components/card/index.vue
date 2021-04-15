<template>
  <div class="card">
    <div class="titleBox">
      <span>数据结构(计算机存储、组织数据方式) - 百度百科</span>
    </div>
    <div class="wordBox">
      <div class="imgBox">
        <img
          src="https://img-blog.csdn.net/20180903194901687?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lleWF6aGlzaGFuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70"
          alt="文章配图"
        />
      </div>
      <span>
        数据结构是计算机存储、组织数据的方式。数据结构是指相互之间存在一种或多种特定关系的数据元素的集合。通常情况下，精心选择的数据结构可以带来更高的运行或者存储效率。数据结构往往同高效的检索算法和索引技术有关。
      </span>
    </div>

    <div class="iBox">
      <span>
        <i class="el-icon-thumb"></i>
      </span>
      <span>
        <i class="el-icon-star-off"></i>
      </span>
      <span>
        <i class="el-icon-chat-line-square"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
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
}
.wordBox {
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
