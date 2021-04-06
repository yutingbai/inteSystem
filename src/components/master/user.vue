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
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
  <el-table
    class="tableLine"
    ref="filterTable"
    border
    :data="tableData"
    style="width: 100% ;">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180"
      column-key="date"
      
    >
    <!-- :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler" -->
    </el-table-column>
     <el-table-column
      prop="id"
      sortable
      label="用户ID"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
    >
    </el-table-column>
    <el-table-column
      prop="email"
      label="绑定邮箱"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="question"
      sortable
      label="活跃次数"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="lastTime"
      label="最后活跃时间"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template #default="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
   
  </el-table>
  <el-pagination
    class="pageination"
    layout="prev, pager, next"
    :total="1">
  </el-pagination>
  </div>
  
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
    setup() {
      const formInline = {
        userID: '',
        userName: '',
      };
      const tableData = [{
          date: '2016-05-02',
          name: '王小虎',
          id: 'AAA',
          email: 'AAA.qq.com',
          question: '123',
          lastTime: '2020.1.21',
        }, {
          date: '2016-05-02',
          name: '王小虎',
          id: 'BBB',
          email: 'BBB.qq.com',
          question: '12',
          lastTime: '2020.1.21',
        }, {
          date: '2016-05-02',
          name: '王小虎',
          id: 'CCC',
          email: 'CCC.qq.com',
          question: '123',
          lastTime: '2020.1.21',
        }, {
          date: '2016-05-02',
          name: '王小虎',
          id: 'DDD',
          email: 'DDD.qq.com',
          question: '123',
          lastTime: '2020.1.21',
        }, {
          date: '2016-05-02',
          name: '王小虎',
          id: 'EEE',
          email: 'EEE.qq.com',
          question: '123',
          lastTime: '2020.1.21',
        }, {
          date: '2016-05-02',
          name: '王小虎',
          id: 'FFF',
          email: 'FFF.qq.com',
          question: '123',
          lastTime: '2020.1.21',
        }];
      return {
            tableData,
            formInline,
        };
    },
});
</script>
<style lang="less" scoped>

.form{
  float: left;
}
.pageination{
  float: right;
  position: absolute;
  bottom: 20px;
  right: 50px;
}
</style>