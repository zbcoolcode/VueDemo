<template>
    <div>
      <h2>Home</h2>
      <div>
        <ul class="nav nav-tabs">
          <li><router-link to="/home/news">News</router-link></li>
          <li><router-link to="/home/messages">Message</router-link></li>
        </ul>
    </div>
    <!--缓存数据keep-alive   -->
          <router-view></router-view>
    </div>

</template>

<script>
  export default {}

</script>

<style>

</style>
