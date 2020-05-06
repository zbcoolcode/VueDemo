<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
<!--        <router-link :to="`/home/message/detail/${m.id}`">{{m.title}}</router-link>-->
<!--        <button @click="pushShow(m.id)">push查看</button>-->
<!--        <button @click="replaceShow(m.id)">replace查看</button>-->
        <router-link :to="'/home/messages/'+message.id">{{message.name}}</router-link>
        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>
      </li>
    </ul>
<!--    <button @click="$router.back()">回退</button>-->
    <hr>
    <router-view></router-view>
    <button @click="$router.back()"></button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        messages:[],
      }
    },
    methods:{
      pushShow(id){
        this.$router.push('/home/messages/'+id);
      },
      replaceShow(id){
        this.$router.replace('/home/messages/'+id);
      },
    },
    mounted () {
      setTimeout(()=>{
        const messages=[
          {id:1,name:'小彬',content:'1号爱篮球，爱学习'},
          {id:2,name:'小芳',content:'2号爱笑，爱生活'},
          {id:3,name:'小玉',content:'3号爱笑，开心'},
          {id:4,name:'小柯',content:'4号爱学习，很努力'},
          {id:5,name:'小彬',content:'5号爱一切'},
        ];
        this.messages=messages;
      },1000)
    }

  }

</script>

<style>

</style>
