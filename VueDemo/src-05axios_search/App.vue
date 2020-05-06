<template>
    <div>
      <div class="container">
        <Search></Search>
        <Main></Main>
      </div>
    </div>
</template>

<script>
  import Main from './components/main'
  import Search from './components/search'
  export default {
    components:{
      Main,Search,
    }
  }

</script>

<style>

</style>
