<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script lang="ts">
import {defineComponent} from '@vue/composition-api';

export default defineComponent({
  setup(props) {
    const a = 1;

    return {
      a,
    };
  },
});
</script>
<style>
*,html,body{
  margin: 0;
  padding: 0;
  
}
a{
  text-decoration:none;
  color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(255, 250, 244);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.inputBox > input{
  border-radius: 15px;
  border-color: #ea6f5a;
  box-shadow: 0 0 5px #ccc;
  font-size: 15px;
}
</style>
