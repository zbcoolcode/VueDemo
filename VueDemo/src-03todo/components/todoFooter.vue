<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
          <span>已完成{{completedSize}}</span> / 全部数量{{todos.length}}
        </span>
    <button class="btn btn-danger" @click="delCompletedTodos" v-show="completedSize">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props:{
      delCompletedTodos:Function,
      todos:Array,
      checkAllTodos:Function,
    },
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
    }

  }

</script>

<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
