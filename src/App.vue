<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap");

  body, html, #app{
      font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
      padding: 0;
      margin: 0;
      height: 100%;
  }

  p{
      padding: 0;
  }
</style>
