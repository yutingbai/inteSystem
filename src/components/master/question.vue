<template>
  <div>
    <el-form :inline="true" :model="formInline" class="form">
      <el-form-item label="问题ID">
        <el-input v-model="formInline.user" placeholder="问题ID"></el-input>
      </el-form-item>
      <el-form-item label="问题描述">
        <el-input v-model="formInline.region" placeholder="问题描述">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      class="tableLine"
      ref="filterTable"
      border
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column prop="id" sortable label="问题ID"> </el-table-column
      ><el-table-column
        prop="create_time"
        label="日期"
        :formatter="
          (data) => {
            return moment(data).format('YYYY-MM-DD');
          }
        "
        sortable
        width="180"
        column-key="date"
      >
      </el-table-column>

      <!-- <el-table-column
      prop="name"
      label="关键字"
    >
    </el-table-column> -->
      <el-table-column prop="title" label="问题描述"> </el-table-column>
      <el-table-column prop="question" sortable label="提问次数">
      </el-table-column>
      <el-table-column
        prop="final_time"
        label="最后提问时间"
        :formatter="
          (data) => {
            return moment(data).format('YYYY-MM-DD');
          }
        "
      >
      </el-table-column>
      <!-- <el-table-column
      prop="user_id"
      label="提问人"
      >
    </el-table-column> --> 
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pageination" layout="prev, pager, next" :total="50">
    </el-pagination>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import moment from "moment";
import "default-passive-events";
import API from "../../service/api";

export default defineComponent({
  setup() {
    const formInline = {
      userID: "",
      userName: "",
    };
    const tableData = ref([]);
    API.Postslist().then((res: any) => {
      console.log(res);
      if (res.status == 0) {
        tableData.value = res.data;
      } else {
        // this.$message.error("账户名或密码错误");
      }
    });
    return {
      tableData,
      formInline,
      moment,
    };
  },
});
</script>
<style lang="less" scoped>
.form {
  float: left;
}
.pageination {
  float: right;
  position: absolute;
  bottom: 20px;
  right: 50px;
}
</style>