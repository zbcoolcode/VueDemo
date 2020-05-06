<template>
  <ul>
    <li v-for="(news, index) in newsArr" :key="index">{{news}}</li>
  </ul>
</template>

<script>
  export default {
    data(){
      return{
        newsArr:['平林小学','培青中学','普宁一中','广大松田'],
      }
    }
  }

</script>

<style>

</style>
