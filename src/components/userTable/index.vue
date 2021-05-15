<template>
  <div class="userTable">
    <el-form
      label-suffix=":"
      ref="form"
      :model="form"
      label-width="100px"
      :inline="true"
      :disabled="userTableDisable"
    >
      <el-row :gutter="20">
        <el-col :span="12"
          ><el-form-item label="用户名">
            <span v-if="userTableDisable">{{ form.user_name }}</span>
            <el-input v-else v-model="form.user_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12"
          ><el-form-item label="用户邮箱">
            <span v-if="userTableDisable">{{ form.user_email }}</span>
            <el-input v-else v-model="form.user_email"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="用户电话">
            <span v-if="userTableDisable">{{ form.user_tele }}</span>
            <el-input v-else v-model="form.user_tele"></el-input>
            </el-form-item
        ></el-col>
        <el-col :span="12">
          <el-form-item label="用户头像">
            <el-avatar
              shape="square"
              :size="50"
              fit="fit"
              :src="form.user_pic"
            ></el-avatar> </el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12"
          ><el-form-item label="用户身份">
            <span v-if="userTableDisable">{{ form.user_status === 1 ? "学生" : "管理员/老师"}}</span>
            <el-select
              v-else
              class="userStatusSelect"
              v-model="form.user_status"
              placeholder="用户身份"
            >
              <el-option label="管理员/老师" :value="1"></el-option>
              <el-option label="学生" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item  label="注册时间">
                <span>{{ form.creat_time }}</span>
            </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
            <el-form-item  label="最后活跃时间">
                <span>{{ form.final_time }}</span>
            </el-form-item>
        </el-col>
        <el-col :span="12">
          
          <el-form-item  label="用户年级">
              <span v-if="userTableDisable">{{ form.user_gender }}</span>
            <el-input v-else v-model="form.user_gender"></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          
          <el-form-item  label="用户班级">
              <span v-if="userTableDisable">{{ form.user_class }}</span>
            <el-input v-else v-model="form.user_class"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
           <el-form-item label="用户文章数">
              <span>{{ form.postCount }}</span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="用户粉丝数">
            <span >{{ form.fansCount }}</span>
             </el-form-item
        ></el-col>
        <el-col :span="12">
          
          <el-form-item label="用户关注数">
              <span>{{ form.user_name }}</span>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-form style="text-align: center">
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <el-form-item v-if="userTableDisable">
            <el-button @click="userTableDisable = false">编辑</el-button>
          </el-form-item>
          <el-form-item v-else>
            <el-button @click="userTableDisable = true">确认</el-button>
            <el-button @click="userTableDisable = true">取消</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "postCard",
  props: ["userInfo"],
  data() {
    return {
      userTableDisable: true,
      form: this.userInfo,
    };
  },

  mounted() {
    console.log(this.userInfo);
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
