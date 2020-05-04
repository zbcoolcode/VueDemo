<template>
  <div class="todo-footer">
    <label>
<!--      <input type="checkbox" v-model="isAllCheck"/>-->
      <slot name="checkAll"></slot>
    </label>
    <span>
<!--          <span>已完成{{completedSize}}</span> / 全部数量{{todos.length}}-->
      <slot name="count"></slot>
    </span>
<!--    <button class="btn btn-danger" @click="delCompletedTodos" v-show="completedSize">清除已完成任务</button>-->
    <slot name="delAll"></slot>
  </div>
</template>

<script>
  export default {
    props:{
      //  使用了slot
      // delCompletedTodos:Function,
      // todos:Array,
      // checkAllTodos:Function,
    },
    //使用slot，以下再App.vue中定义
    /*
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
     */

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
