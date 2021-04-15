<template>
  <div id="main">
    <myHeader />
    
    <div id="content">
      <router-view />
    </div>
    <router-view name="detail" />
  </div>
</template>

<script>
import myHeader from '@/components/user/header.vue';
export default {
  name: 'posted',
  components: {
    myHeader,
  },
  mounted() {},
};
</script>

<style scoped>
</style>
