<template>
  <div>
    <el-form :inline="true" :model="formInline" ref="formInline" class="form">
      <el-form-item label="用户ID">
        <el-input v-model="formInline.userId" placeholder="用户ID"></el-input>
      </el-form-item>
      <el-form-item label="用户名称">
        <el-input v-model="formInline.userName" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table
      class="tableLine"
      ref="filterTable"
      border
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column prop="user_id" sortable label="用户ID">
      </el-table-column>
      <el-table-column
        prop="creat_time"
        label="日期"
        sortable
        width="180"
        column-key="date"
        :formatter="formatter"
      >
      </el-table-column>
      <el-table-column prop="user_name" label="姓名" sortable>
      </el-table-column>
      <el-table-column prop="user_status" label="状态" :formatter="formaStatus">
      </el-table-column>
      <el-table-column prop="user_email" label="绑定邮箱"> </el-table-column>
      <el-table-column prop="question" label="电话号码"> </el-table-column>
      <el-table-column
        prop="final_time"
        label="最后活跃时间"
        :formatter="formatter"
      >
      </el-table-column>
      <el-table-column prop="postCount" label="发布问题数量"> </el-table-column>
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
          <el-button
            type="text"
            size="small"
            @click.native.prevent="moreInfo(scope.row.user_id)"
            >详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :destroy-on-close="true"
      title="用户信息"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <userTable v-if="dialogVisible" :userInfo="activeUserMsg" />
    </el-dialog>
  </div>
</template>
<script lang="ts">
import getCurrentInstance from "vue";
import { defineComponent, ref } from "@vue/composition-api";
import moment from "moment";
import "default-passive-events";
import API from "../../service/api";
import userTable from "../userTable/index.vue";

export default defineComponent({
  components: {
    userTable,
  },
  setup() {
    const dialogVisible = ref(false);
    const myThis = new getCurrentInstance();
    const tableData = ref([]);
    const activeUserMsg = ref({});
    API.UsersList().then((res: any) => {
      console.log(res);
      if (res.status === 0) {
        tableData.value = res.data;
      } else {
        // this.$message.error("账户名或密码错误");
      }
    });
    function deleteRow(index: any, rows: any[], id: any) {
      API.DeleteUser({ userId: id }).then((res: any) => {
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
    const formaStatus = (row: any, column: any) => {
      return row.user_status === 1 ? "管理员" : "学生";
    };
    const moreInfo = (userId: any) => {
      API.searchUser({ userId })
        .then((res: any) => {
          activeUserMsg.value = res.data[0];
        })
        .then(() => {
          dialogVisible.value = true;
          console.log(activeUserMsg.value);
        });
    };
    const handleClose = () => {
      dialogVisible.value = false;
      activeUserMsg.value = {
      };
    };
    return {
      formatter,
      formaStatus,
      tableData,
      // formInline,
      moment,
      deleteRow,
      moreInfo,
      dialogVisible,
      handleClose,
      activeUserMsg,
    };
  },
  data() {
    return {
      formInline: {
        userId: "",
        userName: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!", this.formInline);
      API.searchUser(this.formInline).then((res: any) => {
        this.tableData = res.data;
      });
    },
    resetForm() {
      this.formInline = {
        userId: "",
        userName: "",
      };
    },
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