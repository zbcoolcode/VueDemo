<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 给addTodo标签对象绑定事件监听-->
      <!--     <todo-header @addTodo="addTodo"></todo-header>    -->
      <todo-header ref="header"></todo-header>
      <todo-list :todos="todos"></todo-list>      <!-- 使用传递函数-->
      <todo-footer :todos="todos" :delCompletedTodos="delCompletedTodos" :checkAllTodos="checkAllTodos">
        <input slot="checkAll" type="checkbox" v-model="isAllCheck"/>
        <span slot="count">已完成{{completedSize}} / 全部数量{{todos.length}}</span>
        <button slot="delAll" class="btn btn-danger" @click="delCompletedTodos" v-show="completedSize">清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>

<script>
  import storageUtil from './util/storageUtil'
  import PubSub from 'pubsub-js'
  import todoHeader from './components/todoHeader'
  import todoList from './components/todoList'
  import todoFooter from './components/todoFooter'
  export default {
    components:{
      todoHeader,todoList,todoFooter,
    },
    data(){
      return{
       // todos:  JSON.parse(window.localStorage.getItem('todos_key')||'[]'),     //从本地取得数据
        todos:storageUtil.getTodos(),
          // [
          // {title:'打球',completed:false},
          // {title:'学习',completed:false},
          // {title:'健身',completed:true},
          // {title:'读书',completed:false},
          // {title:'听歌',completed:true},
          // ]
      }
    },
    //使用slot，将原本再todoFooter.vue实现的代码搬到App.vue
    computed:{
      completedSize(value){
        return this.todos.reduce((preTotal,todo)=>preTotal+(todo.completed?1:0),0);
      },
      isAllCheck:{
        get(){
          return this.completedSize==this.todos.length && this.completedSize;
        },
        set(value){
          this.checkAllTodos(value);
        }
      }
    },
    mounted () {    //异步执行代码
      //给 <todo-header ref="header"></todo-header>绑定监听
      this.$refs.header.$on('addTodo',this.addTodo);    //参数代表事件名和回调函数

      //订阅信息
      PubSub.subscribe('delTodo',(msg,index)=>{
        this.delTodo(index);
      })
    },
    watch:{
      todos:{
        deep:true,                            //深度监视todos
        /*
        handler:function (value) {
         // window.localStorage.setItem('todos_key',JSON.stringify(value))    //将todos改变后的值存入本地
          //改为工具类
          storageUtil.saveTodos(value);
        }
         */
        handler:storageUtil.saveTodos,    //相当于直接将storageUtil的saveToos()函数传过来
      }
    },
    methods:{
      addTodo(todo){
        console.log('addTodo');
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
