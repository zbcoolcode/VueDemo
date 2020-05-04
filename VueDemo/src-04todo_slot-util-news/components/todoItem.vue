<template>
  <li :style="{background: bgcolor}" @mouseenter="isEnter(true)" @mouseleave="isEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.completed"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delTitle(index)">删除</button>
  </li>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    props:{
      todo:Object,
      index:Number,
      // delTodo:Function,    //改未订阅信息
    },
    data(){
      return{
        bgcolor: 'white',
        isShow:false,
      }
    },
    methods:{
      isEnter(isEnter){
        if(isEnter){
          this.bgcolor='red';
          this.isShow=true;
        }else{
          this.bgcolor='white';
          this.isShow=false;
        }
      },
      delTitle(index){
        // this.delTodo(index);   //改为订阅信息
        PubSub.publish('delTodo',index);

      }
    }
  }

</script>

<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
