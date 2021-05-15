<template>
  <div class="follow">
   
      <div class="folconent">
        <div v-for="item in tableData" :key="item.id">
          <Card :item="item" />
        </div>
      </div>
  
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import getCurrentInstance from 'vue';
import Card from '../card/index.vue';
import API from '../../service/api';
import store from '../../store/index'
export default defineComponent({
  components: {
    Card,
  },
  props: {
    query: {
      type: String,
    },
  },
  setup(props) {
    const _this = new getCurrentInstance();
    console.log(_this.$router);
    const tableData = ref([]);
    API.followList({userId:store.state.userId}).then((res: any) => {
      console.log(res);
      if (res.status == 200) {
        tableData.value = res.data;
      } else {
        _this.$message.error('错误');
      }
    });
    const keywordList = ref([]);
    API.keyword({ num: 6 }).then((res: any) => {
      keywordList.value = res.data;
    });
    return {
      tableData,
      keywordList,
    };
  },

});
</script>

<style lang="less" scoped>
// .qapage {
//   width: 80%;
//   background-color: #fff;
//   box-shadow: 0 0 5px #ccc;
//   margin: 0 auto;
//   height: calc(100vh - 90px);
// }
// .left {
//   width: calc(80% - 1px);
//   float: left;
//   height: 100%;
// }
// .right {
//   width: 20%;
//   height: 100%;
//   float: right;
//   border-left: 1px solid rgb(253, 226, 226);
// }
// .folconent {
//   height: calc(100% - 60px);
//   overflow: scroll;
// }
// .folconent::-webkit-scrollbar {
//   display: none;
// }
</style>
