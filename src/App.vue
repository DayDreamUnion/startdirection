
<template>
  <div id="app">
    <!-- 路由插槽，所有匹配的组件将在这里呈现 -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {}
  }
</script>

<style>
html, body {
  height: 100%;
  background-color: #eeeeee;
  box-sizing: border-box;
  -webkit-box-sizing:border-box; /* Safari */
}
</style>
