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
              <div>
                {{ moment(props.row.create_time).format("YYYY-MM-DD") }}
              </div>
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
            <el-form-item label="问题配图">
              <div>{{ props.row.pic }}</div>
            </el-form-item>
            <el-form-item label="解决状态">
              <div>{{ props.row.resolved ? "已解决" : "未解决" }}</div>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="id"  width="100" sortable label="问题ID"> </el-table-column>

      <el-table-column
        prop="create_time"
        label="日期"
        :formatter="formatter"
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
      <el-table-column prop="hot" sortable label="提问次数">
      </el-table-column>
      <el-table-column
        prop="final_time"
        label="最后提问时间"
        :formatter="formatter"
      >
      </el-table-column>
      <el-table-column
      prop="user_id"
      label="提问人ID"
      >
    </el-table-column>
    <el-table-column
      prop="resolved"
      label="解决状态"
      :formatter="resolvedFormat"
      >
    </el-table-column>
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
          <el-button
            type="text"
            size="small"
            @click.native.prevent="moreInfo(scope.row.id)"
            >详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
   <el-dialog
      :destroy-on-close="true"
      title="文章信息"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <postTable v-if="dialogVisible" :postInfo="activePostMsg" />
    </el-dialog>
  </div>
</template>
<script lang="ts">
import getCurrentInstance from "vue";
import { defineComponent, ref } from "@vue/composition-api";
import moment from "moment";
import "default-passive-events";
import API from "../../service/api";
import postTable from '../postTable/index.vue'

export default defineComponent({
  components:{
    postTable
  },
  setup() {
    const myThis = new getCurrentInstance();
    const formInline = {
      userID: "",
      userName: "",
    };
    const dialogVisible = ref(false);
    const tableData = ref([]);
    const activePostMsg = ref({});
    API.Postslist().then((res: any) => {
      console.log(res);
      if (res.status === 0) {
        tableData.value = res.data;
      } else {
        // this.$message.error("账户名或密码错误");
      }
    });
    function deleteRow(index: any, rows: any[], id: any) {
      API.Deletepost({ id }).then((res: any) => {
        console.log(res);
        if (res.status === 0) {
          myThis.$message({ message: "删除成功", type: "success" });
        } else {
          myThis.$message.error("删除失败");
        }
      });
      rows.splice(index, 1);
    }
    const formatter = (row: any, column: any) => {
      return moment(row[column.property]).format("YYYY/MM/DD HH:ss");
    };
    const resolvedFormat = (row: any)=>{
      return row.resolved ? '已解决':'未解决'
    }
    const moreInfo = (postId: any) => {
      API.getPostDetail({ id:postId , userId:0})
        .then((res: any) => {
          activePostMsg.value = res.data;
        })
        .then(() => {
          dialogVisible.value = true;
          console.log(activePostMsg.value);
        });
    };
    const handleClose = () => {
      dialogVisible.value = false;
      activePostMsg.value = {
      };
    };
    return {
      tableData,
      formInline,
      moment,
      deleteRow,
      formatter,
      moreInfo,
      handleClose,
      dialogVisible,
      activePostMsg,
      resolvedFormat
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