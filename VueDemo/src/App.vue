<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :addTodo="addTodo"></todo-header>
      <todo-list :todos="todos" :delTodo="delTodo"></todo-list>
      <todo-footer :todos="todos" :delCompletedTodos="delCompletedTodos" :checkAllTodos="checkAllTodos"></todo-footer>
    </div>
  </div>
</template>

<script>
  import todoHeader from './components/todoHeader'
  import todoList from './components/todoList'
  import todoFooter from './components/todoFooter'
  export default {
    components:{
      todoHeader,todoList,todoFooter,
    },
    data(){
      return{
        todos:JSON.parse(window.localStorage.getItem('todos_key')||'[]'),     //将数据存入到本地
          // [
          // {title:'打球',completed:false},
          // {title:'学习',completed:false},
          // {title:'健身',completed:true},
          // {title:'读书',completed:false},
          // {title:'听歌',completed:true},
          // ]
      }
    },
    watch:{
      todos:{
        deep:true,                            //深度监视todos
        handler:function (value) {
          window.localStorage.setItem('todos_key',JSON.stringify(value))    //将todos改变后的值存入本地
        }
      }
    },
    methods:{
      addTodo(todo){
        this.todos.unshift(todo);
      },
      delTodo(index){
        this.todos.splice(index,1);
      },
      delCompletedTodos(){
        this.todos=this.todos.filter(todo=>!todo.completed);
      },
      checkAllTodos(check){
        return this.todos.forEach(todo=>todo.completed=check);
      }
    },
  }

</script>

<style>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
