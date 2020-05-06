<template>
    <div>
      <ul>
        <li>id:{{$route.params.id}}</li>
        <li>name:{{messageDetail.name}}</li>
        <li>content:{{messageDetail.content}}</li>

      </ul>

    </div>
</template>

<script>
  export default {
    data(){
      return{
        messageDetail:{
        },
      }
    },
    mounted () {
      setTimeout(()=>{
        const messagesDetail=[
          {id:1,name:'小彬',content:'1号爱篮球，爱学习'},
          {id:2,name:'小芳',content:'2号爱笑，爱生活'},
          {id:3,name:'小玉',content:'3号爱笑，开心'},
          {id:4,name:'小柯',content:'4号爱学习，很努力'},
          {id:5,name:'小彬',content:'5号爱一切'},
        ];
        this.messagesDetail=messagesDetail;
        const id=this.$route.params.id*1;
        this.messageDetail=messagesDetail.find(detail=>detail.id===id);
      },1000);
    },

    watch:{
      $route: function (value){
        const id=value.params.id*1;
        this.messageDetail=this.messagesDetail.find(detail=>detail.id===id);
        console.log(this.messageDetail.name);
      }
    }
  }

</script>

<style>

</style>
