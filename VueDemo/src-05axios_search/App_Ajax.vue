<template>
  <div>
    <div v-if="!hrefUrl">loading</div>
    <div v-else>most star repo is <a :href="hrefUrl">{{hrefName}}</a></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        hrefUrl:'',
        hrefName:'',
      }
    },
    mounted () {    //异步执行代码
      const url='https://api.github.com/search/repositories?q=v&sort=stars';    //发ajax请求获取数据
      axios.get(url).then(response=>{   //成功
        const result=response.data;
        const mostRepo=result.items[0];
        this.hrefUrl=mostRepo.html_url;
        this.hrefName=mostRepo.name;
      }).catch(error=>{                 //失败
        alert('请求失败，哇哈哈！');
      })
    },

  }

</script>

<style>

</style>
