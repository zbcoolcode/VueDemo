<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="addTitle"/>
  </div>
</template>

<script>
  export default {
    props:{
      // addTodo:Function,    //已经用绑定事件监听模式
    },
    data(){
      return{
        title:'',
        completed:false,
      }
    },
    methods:{
      addTitle (){
        console.log("addTitile");
        const title=this.title.trim();
        const completed=false;
        if(!title){
          alert('内容不能为空');
          return;
        }
        const todo={title,completed};
        // this.addTodo(todo);
        this.$emit('addTodo',todo);   // 绑定事件监听的模式
        this.title='';
      },
    }
  }

</script>

<style>

</style>
