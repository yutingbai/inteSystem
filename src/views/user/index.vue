<template>
  <div id="main">
    <myHeader />
    <!-- <div class="wordList">
        <router-link tag="div" to="/main/controller/all">推荐</router-link>
        <router-link tag="div" to="/posted/controller/web">关注</router-link>
        <router-link tag="div" to="/posted/controller/java">热门词条</router-link>
    </div> -->
    <div id="content">
    
        <router-view />
    
    </div>
    <router-view name="detail" />
  </div>
</template>

<script>
import myHeader from "@/components/user/header.vue";
export default {
  name: "posted",
  components: {
    myHeader
  },
  mounted(){
    
  }
};
</script>

<style scoped>


</style>
