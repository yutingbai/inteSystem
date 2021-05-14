<template>
  <div>
    <el-form :inline="true" :model="formInline" class="form">
      <el-form-item label="用户ID">
        <el-input v-model="formInline.user" placeholder="用户ID"></el-input>
      </el-form-item>
      <el-form-item label="用户名称">
        <el-input v-model="formInline.region" placeholder="用户名称">
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
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column
        prop="creat_time"
        label="日期"
        sortable
        width="180"
        :formatter="
          (data) => {
            return moment(data).format('YYYY-MM-DD');
          }
        "
        column-key="date"
      >
      </el-table-column>
      <el-table-column prop="user_id" sortable label="用户ID">
      </el-table-column>
      <el-table-column prop="user_name" label="姓名" sortable>
      </el-table-column>
      <el-table-column prop="user_email" label="绑定邮箱"> </el-table-column>
      <el-table-column prop="question" label="电话号码"> </el-table-column>
      <el-table-column
        prop="final_time"
        label="最后活跃时间"
        :formatter="
          (data) => {
            return moment(data).format('YYYY-MM-DD');
          }
        "
      >
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <!-- <el-button @click="handleClick(scope.row)" type="text" size="small"
            ></el-button
          > -->
          <el-button
            type="text"
            size="small"
            @click.native.prevent="
              deleteRow(scope.$index, tableData, scope.row.user_id)
            "
            >移除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pageination" layout="prev, pager, next" :total="1">
    </el-pagination>
  </div>
</template>
<script lang="ts">
import getCurrentInstance from 'vue';
import { defineComponent, ref } from '@vue/composition-api';
import moment from 'moment';
import 'default-passive-events';
import API from '../../service/api';

export default defineComponent({
  setup() {
    const  myThis  = new getCurrentInstance();
    const formInline = {
      userID: '',
      userName: '',
    };
    const tableData = ref([]);
    API.UsersList().then((res: any) => {
      console.log(res);
      if (res.status === 0) {
        tableData.value = res.data;
      } else {
        // this.$message.error("账户名或密码错误");
      }
    });
    function deleteRow(index: any, rows: any[], id: any) {
      API.DeleteUser({userId: id}).then((res: any) => {
        console.log(res);
        if (res.status === 0) {
          myThis.$message({ message: '删除成功', type: 'success' });
        } else {
          myThis.$message.error('删除失败');
        }
      });
      rows.splice(index, 1);
    }

    return {
      tableData,
      formInline,
      moment,
      deleteRow,
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