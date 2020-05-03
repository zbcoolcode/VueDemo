<template>
    <div>
      <header class="site-header jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>请发表对Vue的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <add :addComment="addComment"></add>
        <List :comments="comments" :delComment="delComment"></List>
      </div>
    </div>
</template>

<script>
  import Add from './components/Add'
  import List from './components/List'
  export default {
    //初始化数据要写在函数中
    data(){
      return{
        comments:[      //数据再哪个组件，更新数据的方法就应该再哪个组件
          {name:'bzini',content:'vue 还可以呀'},
          {name:'kobe',content: 'I like basketball'},
          {name: '小彬',content: '天行健，君子以自强不息'},
          {name: '小玉',content: '要努力，不放弃'},
        ],
      }
    },
    methods:{
      addComment(comment){
        this.comments.unshift(comment);

      },
      delComment(index){
        this.comments.splice(index,1);
      },
    },
    components:{
      Add,List,
    }
  }

</script>

<style>

</style>
