<template>
  <div class="userTable">
    <el-form
      label-suffix=":"
      ref="form"
      :model="form"
      label-position="left"
      label-width="100px"
      :inline="true"
      :disabled="postTableDisable"
    >
      <el-divider content-position="left">作者信息</el-divider>
      <el-row :gutter="20">
        <el-col :span="8"
          ><el-form-item label="作者ID">
            <span v-if="postTableDisable">{{ form.authInfo.user_id }}</span>
            <el-input v-else v-model="form.authInfo.user_id"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8"
          ><el-form-item label="作者昵称">
            <span v-if="postTableDisable">{{ form.authInfo.user_name }}</span>
            <el-input v-else v-model="form.authInfo.user_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider content-position="left">文章详情</el-divider>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="文章标题">
            <span v-if="postTableDisable">{{ form.title }}</span>
            <el-input v-else v-model="form.title"></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="发表时间">
            <span>{{ moment(form.create_time).format("lll") }}</span>
          </el-form-item></el-col
        >
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="文章详情">
            <span v-if="postTableDisable">{{ form.details }}</span>
            <el-input v-else v-model="form.details"></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="文章关键词">
            <span v-for="item in form.keywords" :key="item.id">
              <el-tag style="margin: 5px">{{ item.keyword }}</el-tag>
            </span>
          </el-form-item></el-col
        >
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="点赞数">
            <span>
              {{ form.likeCount }}
            </span>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="收藏数">
            <span>
              {{ form.starCount }}
            </span>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="评论数">
            <span>
              {{ form.ansCount }}
            </span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="解决状态">
            <span>
              {{ form.resolved ? "已解决" : "未解决" }}
            </span>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="搜索热度">
            <span>
              {{ form.hot }}
            </span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="最后活跃时间">
            <span>{{ moment(form.final_time).format("lll") }}</span>
          </el-form-item></el-col
        >
      </el-row>
      <el-divider content-position="left">回答详情</el-divider>
      <!-- ans_count: 0
create_time: "2021-05-14T13:35:37.000Z"
id: 30
post_id: 71
top: 0
user_id: 13
user_name: "yutingbai"
user_pic: "http://localhost:3000/public/uploads/13FA9A8E-5118-4F93-9F01-7BD70F29F956.jpg"
value: "213123123123" -->
      <el-table :data="tableAnsList" stripe style="width: 100%">
        <el-table-column prop="id" label="ID" width="80"> </el-table-column>
        <el-table-column prop="user_name" label="回答者"> </el-table-column>
        <el-table-column prop="create_time" label="回答时间"> </el-table-column>
        <el-table-column prop="value" label="回答详情"> </el-table-column>
        <el-table-column prop="ans_count" sortable label="回答讨论数目">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="scope.row" type="text" size="small"
              >精选</el-button
            >
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
    <el-form style="text-align: center">
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <el-form-item v-if="postTableDisable">
            <el-button @click="postTableDisable = false">编辑</el-button>
          </el-form-item>
          <el-form-item v-else>
            <el-button @click="postTableDisable = true">确认</el-button>
            <el-button @click="postTableDisable = true">取消</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import moment from "moment";
import API from "../../service/api";
export default {
  name: "postTable",
  props: ["postInfo"],
  data() {
    return {
      postTableDisable: true,
      form: this.postInfo,
      moment,
      tableAnsList: [],
    };
  },

  mounted() {
    console.log(this.postInfo);
    API.getAnswerList({ userId: 0, postId: this.postInfo.id }).then((res) => {
      this.tableAnsList = res.data;
    });
  },
  computed: {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>


<style lang="less" scoped>
.userTable {
  text-align: left;
  .userStatusSelect {
    width: 206.4px;
  }
}
</style>
