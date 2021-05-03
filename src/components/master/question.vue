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
    ><el-table-column type="expand">
        <template #default="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="创建时间">
              <div>{{moment( props.row.create_time).format('YYYY-MM-DD') }}</div>
            </el-form-item>
            <el-form-item label="标题">
              <div>{{ props.row.title }}</div>
            </el-form-item>
            <el-form-item label="问题详情">
              <div>{{ props.row.details }}</div>
            </el-form-item>
            <el-form-item label="问题 ID">
              <div>{{ props.row.id }}</div>
            </el-form-item>
            <el-form-item label="热度">
              <div>{{ props.row.hot }}</div>
            </el-form-item>
            <el-form-item label="关键词">
              <div>{{ props.row.keyword }}</div>
            </el-form-item>
            <el-form-item label="问题配图">
              <div>{{ props.row.pic }}</div>
            </el-form-item>
            <el-form-item label="解决状态">
              <div>{{ props.row.resolve == 0 ? '未解决':'已解决'  }}</div>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="id" sortable label="问题ID"> </el-table-column>
      
      <el-table-column
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
          
          <el-button
            type="text"
            size="small"
            @click.native.prevent="
              deleteRow(scope.$index, tableData, scope.row.id)
            "
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pageination" layout="prev, pager, next" :total="50">
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
    const _this = new getCurrentInstance();
    const formInline = {
      userID: '',
      userName: '',
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
    function deleteRow(index: any, rows: any[], id: any) {
      API.Deletepost({ id }).then((res: any) => {
        console.log(res);
        if (res.status == 0) {
          _this.$message({ message: '删除成功', type: 'success' });
        } else {
          _this.$message.error('删除失败');
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