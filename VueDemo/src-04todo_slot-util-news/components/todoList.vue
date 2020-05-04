<template>


  <ul class="todo-main">
    <todoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index"></todoItem>

  </ul>
</template>

<script>
  import todoItem from './todoItem'
  export default {
    components: {todoItem},
    props:{
      todos:Object,
      // delTodo:Function,    //改为订阅信息
    }
  }

</script>

<style>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }


</style>
